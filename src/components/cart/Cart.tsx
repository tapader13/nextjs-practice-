'use client';
import { addItemToCart } from '@/lib/features/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import Image from 'next/image';

const Cart = ({
  post,
}: {
  post: { id: string; title: string; description: string };
}) => {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.cart.items);
  const handleAddToCart = () => {
    const filterItems = items.filter((item) => item.id === post.id);
    if (filterItems.length <= 0) {
      const newCart = { id: post.id, name: post.title, price: 12, quantity: 2 };

      dispatch(addItemToCart(newCart));
    } else {
      alert(`Cart ${post.id} already added`);
    }
  };
  return (
    <div
      style={{
        boxShadow: '#746565 2px 2px 5px',
        padding: '10px',
      }}
    >
      <div>
        <div className=' flex flex-row items-center justify-center'>
          <Image src={'/about.png'} alt='' height={200} width={250} />
        </div>
        <h1>{post.title}</h1>
        <p className='text-justify'>{post.description}</p>
        <button
          className=' bg-blue-500 px-5 py-2 my-3'
          onClick={() => handleAddToCart()}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default Cart;
