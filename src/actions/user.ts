'use server';

import User from '@/lib/userModel';
import { connectDb } from '@/lib/utils';
import { redirect } from 'next/navigation';
import bcrypt from 'bcrypt';
import { CredentialsSignin } from 'next-auth';
import { signIn, signOut } from '@/auth';
const login = async (previousState: any, formData: FormData) => {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  try {
    await signIn('credentials', {
      redirect: false,
      callbackUrl: '/',
      email,
      password,
    });
    // return { success: true };
  } catch (error: any) {
    return { error: 'invalid credentials' };
  }
  redirect('/');
};
const register = async (previousState: any, formData: FormData) => {
  const username = formData.get('username') as string;
  const password = formData.get('password') as string;
  const email = formData.get('email') as string;
  await connectDb();
  const findUser = await User.findOne({ email });
  if (findUser) {
    return { error: 'Email already exists' };
  }
  const hashedpassword = await bcrypt.hash(password, 10);
  await User.create({ email, password: hashedpassword, username });
  redirect('/login');
};
const handleLogout = async () => {
  await signOut();
};
export { register, login, handleLogout };
