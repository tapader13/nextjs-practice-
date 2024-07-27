import { register } from '@/actions/user';
import RegistrationForm from '@/components/RegistrationForm';
import { getSession } from '@/lib/getSession';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';

const RegisterPage = async () => {
  const session = await getSession();
  const user = session?.user;
  if (user) redirect('/login');
  return (
    <div className='min-h-screen flex items-center justify-center bg-black'>
      <div className='w-full max-w-sm p-6 bg-gray-800 rounded-lg shadow-md'>
        <h2 className='text-2xl font-semibold text-white mb-6 text-center'>
          Register
        </h2>
        <RegistrationForm />
        <p className='text-center text-white mt-4'>
          Already have an account?{' '}
          <Link href='/login' className='text-blue-500 hover:underline'>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
