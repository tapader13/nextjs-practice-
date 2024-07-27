import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';
export const metadata: Metadata = {
  title: 'about page',
  description: 'about',
};

const AboutPage = () => {
  return (
    <div className='my-10 flex flex-row justify-between px-[110px]'>
      <div className='w-1/2'>
        <h4 className=' text-2xl font-bold text-blue-600 '>About Agency</h4>
        <h1 className=' text-white text-5xl mt-5 font-semibold'>
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className=' text-white my-7 text-xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus iste
          aut odio neque beatae. Pariatur, vitae deserunt veniam molestiae
          nostrum quia expedita reiciendis recusandae soluta et quis similique
          ullam libero.
        </p>
        <div className='flex flex-row justify-between'>
          <div>
            <h1 className=' text-blue-400 font-bold text-2xl'>10 k+</h1>
            <p className=' text-white'>Year of experience</p>
          </div>
          <div>
            <h1 className=' text-blue-400 font-bold text-2xl'>10 k+</h1>
            <p className=' text-white'>Year of experience</p>
          </div>
          <div>
            <h1 className=' text-blue-400 font-bold text-2xl'>10 k+</h1>
            <p className=' text-white'>Year of experience</p>
          </div>
        </div>
      </div>
      <div>
        <Image alt='' src={'/about.png'} height={400} width={500} />
      </div>
    </div>
  );
};

export default AboutPage;
