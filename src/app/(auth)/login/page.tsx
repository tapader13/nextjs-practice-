import { login } from '@/actions/user';
import { signIn } from '@/auth';
import LoginForm from '@/components/LoginForm';
import { getSession } from '@/lib/getSession';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';

const LoginPage = async () => {
  const session = await getSession();
  const user = session?.user;
  if (user) redirect('/');
  return (
    <div className='min-h-screen flex items-center justify-center bg-black'>
      <div className='w-full max-w-sm p-6 bg-gray-800 rounded-lg shadow-md'>
        <h2 className='text-2xl font-semibold text-white mb-6 text-center'>
          Login
        </h2>
        <LoginForm />
        <form
          action={async () => {
            'use server';
            await signIn('github');
          }}
        >
          {' '}
          <button
            className='w-full py-2 mt-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-300'
            type='submit'
          >
            Github
          </button>
        </form>
        <form
          action={async () => {
            'use server';
            await signIn('google');
          }}
        >
          {' '}
          <button
            className='w-full py-2 mt-4 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-700 transition-colors duration-300'
            type='submit'
          >
            Google
          </button>
        </form>
        <p className='text-center text-white mt-4'>
          Don,t have an account?{' '}
          <Link href='/register' className='text-blue-500 hover:underline'>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
