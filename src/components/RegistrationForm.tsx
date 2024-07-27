'use client';
import { register } from '@/actions/user';
import React, { useEffect } from 'react';
import { useFormState } from 'react-dom';
import error from './../app/error';
import { useRouter } from 'next/navigation';

const RegistrationForm = () => {
  const [state, formAction] = useFormState(register, undefined);
  const router = useRouter();

  return (
    <div>
      {' '}
      <form action={formAction}>
        <div className='mb-4'>
          <label className='block text-white mb-2' htmlFor='username'>
            Username
          </label>
          <input
            className='w-full px-3 py-2 text-black bg-gray-200 border rounded focus:outline-none focus:ring focus:border-blue-500'
            type='text'
            id='username'
            name='username'
            required
          />
        </div>
        <div className='mb-4'>
          <label className='block text-white mb-2' htmlFor='email'>
            Email
          </label>
          <input
            className='w-full px-3 py-2 text-black bg-gray-200 border rounded focus:outline-none focus:ring focus:border-blue-500'
            type='email'
            id='email'
            name='email'
            required
          />
        </div>
        <div className='mb-4'>
          <label className='block text-white mb-2' htmlFor='password'>
            Password
          </label>
          <input
            className='w-full px-3 py-2 text-black bg-gray-200 border rounded focus:outline-none focus:ring focus:border-blue-500'
            type='password'
            id='password'
            name='password'
            required
          />
        </div>
        <button
          className='w-full py-2 mt-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300'
          type='submit'
        >
          Register
        </button>
        <p className=' text-red-500'>{state?.error}</p>
      </form>
    </div>
  );
};

export default RegistrationForm;
