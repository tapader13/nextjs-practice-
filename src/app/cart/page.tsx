'use client';
import { useRouter } from 'next/navigation';
import {
  ItemType,
  decreItemToCart,
  deleteItemToCart,
  increItemToCart,
} from '@/lib/features/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { useEffect } from 'react';
import Link from 'next/link';

const Cart = () => {
  const dispatch = useAppDispatch();

  const items = useAppSelector((state) => state.cart.items);

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

  const router = useRouter();

  useEffect(() => {
    if (items.length === 0) {
      router.push('/');
    }
  }, [items]);

  return (
    <div className='bg-black min-h-screen'>
      {' '}
      <div className='container mx-auto px-4 py-8'>
        {' '}
        {items.length > 0 && (
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
            <div className='text-center'>
              <Link className='text-green-500 ' href={'/checkout'}>
                Checkout
              </Link>
            </div>
          </div>
        )}
        {items.length === 0 && (
          <p className='text-gray-700 text-center text-xl font-semibold mt-8'>
            Your cart is currently empty.
          </p>
        )}
      </div>
    </div>
  );
};

export default Cart;
