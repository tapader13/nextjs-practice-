import 'next-auth';

declare module 'next-auth' {
  interface User {
    role: 'user' | 'admin';
  }

  interface Session {
    user?: User;
  }
}

declare module '@auth/core/jwt' {
  interface JWT {
    role: 'user' | 'admin';
  }
}
