'use client';
import {
  decreItemToCart,
  deleteItemToCart,
  increItemToCart,
  ItemType,
} from '@/lib/features/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import React, { useState } from 'react';

interface UserInfo {
  name: string;
  email: string;
  address: string;
}

const Checkout: React.FC = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: '',
    email: '',
    address: '',
  });
  const dispatch = useAppDispatch();

  const items = useAppSelector((state) => state.cart.items);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(userInfo);
  };
  const handleIncrement = (item: ItemType) => {
    const updatedCart = { ...item, quantity: item.quantity + 1 };

    dispatch(increItemToCart(updatedCart));
  };

  const handleDecrement = (item: ItemType) => {
    if (item.quantity > 1) {
      const updatedCart = { ...item, quantity: item.quantity - 1 };

      dispatch(decreItemToCart(updatedCart));
    }
  };

  const handleDelete = (item: ItemType) => {
    const updatedCart = { ...item, quantity: item.quantity + 1 };

    dispatch(deleteItemToCart(updatedCart));
  };
  return (
    <div className='flex'>
      <div className='w-1/2 p-4'>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label htmlFor='name' className='block text-white font-bold mb-2'>
              Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              value={userInfo.name}
              onChange={handleChange}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='name' className='block text-white font-bold mb-2'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={userInfo.email}
              onChange={handleChange}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='name' className='block text-white font-bold mb-2'>
              Address
            </label>
            <input
              type='text'
              id='address'
              name='address'
              value={userInfo.address}
              onChange={handleChange}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
          </div>

          <button
            type='submit'
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          >
            Payment
          </button>
        </form>
      </div>
      <div className='w-1/2 p-4'>
        <div className='container mx-auto px-4 py-8'>
          {' '}
          (
          <div className='bg-white rounded-lg shadow-md px-4 py-5'>
            {' '}
            <h2 className='text-2xl font-semibold text-gray-700 mb-4'>
              Your Cart
            </h2>
            <ul className='list-none'>
              {items.map((item) => (
                <li key={item.id} className='flex items-center mb-4'>
                  <div className='w-1/3 mr-4'>
                    <p className='text-gray-700 text-sm'>{item.name}</p>
                  </div>
                  <div className='w-1/3 text-center'>
                    <p className='text-gray-700 text-sm'>
                      Price: ${item.price}
                    </p>
                  </div>
                  <div className='w-1/3 flex justify-between'>
                    <p className='text-gray-700 text-sm'>
                      Quantity: {item.quantity}
                    </p>
                    <div className='flex items-center'>
                      <button
                        className='text-gray-700 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 px-2 py-1 rounded-md'
                        onClick={() => handleIncrement(item)}
                      >
                        +
                      </button>
                      <button
                        className='text-gray-700 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 px-2 py-1 rounded-md ml-2'
                        onClick={() => handleDecrement(item)}
                      >
                        -
                      </button>
                      <button
                        className='text-red-500 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 px-2 py-1 rounded-md ml-2'
                        onClick={() => handleDelete(item)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          )
        </div>
      </div>
    </div>
  );
};

export default Checkout;
