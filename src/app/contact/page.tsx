import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';
export const metadata: Metadata = {
  title: 'contact page',
  description: 'about',
};
const ContactPage = () => {
  return (
    <div className='my-20 mx-[110px] flex flex-row justify-between'>
      <div className='ml-10'>
        <Image alt='' src={'/contact.png'} height={400} width={400} />
      </div>
      <div className='w-1/2 flex flex-col'>
        <input
          type='text'
          className='mb-5 bg-gray-800 py-2 px-3 rounded-md'
          placeholder='enter your name'
        />
        <input
          type='text'
          className='mb-5 bg-gray-800 py-2 px-3 rounded-md'
          placeholder='enter your email'
        />
        <input
          type='text'
          className='mb-5 bg-gray-800 py-2 px-3 rounded-md'
          placeholder='enter your phone'
        />
        <textarea
          className='mb-5 bg-gray-800 py-2 px-3 rounded-md'
          rows={5}
          placeholder='message'
          name=''
          id=''
        ></textarea>
        <button className='bg-blue-600 py-2 rounded-lg text-white font-bold'>
          Send
        </button>
      </div>
    </div>
  );
};

export default ContactPage;
