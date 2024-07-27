import NextAuth, { CredentialsSignin } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { connectDb } from './lib/utils';
import User from './lib/userModel';
import bcrypt from 'bcrypt';
import Github from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Github({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        const email = credentials.email as string | undefined;
        const password = credentials.password as string | undefined;
        if (!email || !password) {
          throw new CredentialsSignin(
            'please provide all required credentials'
          );
        }

        await connectDb();
        const findUser = await User.findOne({ email }).select(
          '+password +role'
        );
        if (!findUser) {
          throw new Error('user not found');
        }
        if (!findUser.password) {
          throw new Error('password not found');
        }

        const ismatch = await bcrypt.compare(password, findUser.password);
        if (!ismatch) {
          throw new Error('password not match');
        }
        return {
          id: findUser._id,
          name: findUser.name,
          email: findUser.email,
          role: findUser.role,
        };
      },
    }),
  ],

  pages: {
    signIn: '/login',
  },

  callbacks: {
    async session({ session, token }) {
      if (token?.sub && token?.role && token?.email) {
        session.user.id = token.sub;
        session.user.role = token.role;
        session.user.email = token.email;
      }
      return session;
    },

    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        if (user.email) {
          token.email = user.email;
        }
      }
      return token;
    },

    signIn: async ({ user, account }) => {
      if (account?.provider === 'google') {
        try {
          const { email, name, image, id } = user;

          await connectDb();

          const alreadyUser = await User.findOne({ email });

          if (!alreadyUser) {
            await User.create({
              email,

              username: name,

              image,

              authProviderId: id,
            });
          } else {
            return true;
          }
        } catch (error) {
          throw new Error('Error while creating user');
        }
      }

      if (account?.provider === 'credentials') {
        return true;
      } else {
        return false;
      }
    },
    // authorized({ auth, request }) {
    //   const user = auth?.user;
    //   console.log(1, user);
    //   const isLoginPage = request.nextUrl?.pathname.endsWith('/login');
    //   const isRegistrationPage =
    //     request.nextUrl?.pathname.endsWith('/register');
    //   const isDashboardPage =
    //     request.nextUrl?.pathname.endsWith('/private/dashboard');

    //   if (isLoginPage && user) {
    //     return Response.redirect(new URL('/', request.nextUrl));
    //   }
    //   if (isRegistrationPage && user) {
    //     return Response.redirect(new URL('/login', request.nextUrl));
    //   }
    //   if (isDashboardPage && !user) {
    //     return false;
    //   }
    //   return true;
    // },
  },
});
