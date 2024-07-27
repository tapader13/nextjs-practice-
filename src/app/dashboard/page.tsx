import { getSession } from '@/lib/getSession';
import { redirect } from 'next/navigation';
import React from 'react';

const DashBoard = async () => {
  const session = await getSession();
  const user = session?.user;
  if (!user) redirect('/login');
  if (user?.role !== 'admin') {
    redirect('/');
  }
  const cards = [
    {
      title: 'Card 1',
      description: 'This is the description for card 1.',
    },
    {
      title: 'Card 2',
      description: 'This is the description for card 2.',
    },
    {
      title: 'Card 3',
      description: 'This is the description for card 3.',
    },
    {
      title: 'Card 4',
      description: 'This is the description for card 4.',
    },
  ];
  return (
    <div className='min-h-screen bg-black py-10 px-5'>
      <div className='container mx-auto'>
        <h1 className='text-4xl font-bold text-white mb-10 text-center'>
          Dashboard
        </h1>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          {cards.map((card, index) => (
            <div
              key={index}
              className='bg-gray-800 text-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'
            >
              <h2 className='text-2xl font-semibold mb-4'>{card.title}</h2>

              <p className='text-gray-400'>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
