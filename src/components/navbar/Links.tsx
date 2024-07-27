'use client';
import { useState } from 'react';
import Navlink from './Navlink';
import Image from 'next/image';
import Link from 'next/link';
import { useAppSelector } from '@/lib/hooks';
import { User } from 'next-auth';
import { Logout } from '../Logout';

const Links = ({ user }: { user: User | undefined }) => {
  const links = [
    { title: 'HomePage', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' },
    { title: 'Blog', path: '/blog' },
  ];
  const session = user ? true : false;
  let isAdmin = false;
  if (user) {
    if ((user.role = 'admin')) {
      isAdmin = true;
    }
  }
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const totalItemsInCart = useAppSelector((state) => state.cart.items);
  return (
    <>
      <div>
        {' '}
        <div className=' flex-row  items-center md:flex hidden'>
          {links.map((link, i) => (
            <Navlink key={i} link={link} />
          ))}
          {totalItemsInCart.length > 0 && (
            <Link
              href={'/cart'}
              className='bg-orange-400 p-2 rounded-full mx-4'
            >
              {totalItemsInCart.length}
            </Link>
          )}
          {session ? (
            <>
              {isAdmin && (
                <Navlink
                  // handleMenu={handleMenu}
                  link={{ title: 'DashBoard', path: '/dashboard' }}
                />
              )}
            </>
          ) : (
            <Navlink link={{ title: 'Login', path: '/login' }} />
          )}
        </div>
        <div>
          <Image
            // onClick={handleMenu}
            className=' cursor-pointer block md:hidden'
            src='/menu.png'
            alt=''
            width={30}
            height={30}
          />
        </div>
      </div>
      {menuOpen && (
        <div className='flex flex-col bg-[#22213e] w-4/12 h-full top-14 right-0 fixed md:hidden justify-start gap-5 pt-5'>
          {links.map((link, i) => (
            <Navlink key={i} handleMenu={handleMenu} link={link} />
          ))}
          {session ? (
            <>
              {isAdmin && (
                <Navlink
                  handleMenu={handleMenu}
                  link={{ title: 'DashBoard', path: '/private/dashboard' }}
                />
              )}
              <button
                onClick={handleMenu}
                className='py-1 px-2 bg-white text-black rounded-xl'
              >
                Logout
              </button>
            </>
          ) : (
            <Navlink
              handleMenu={handleMenu}
              link={{ title: 'Login', path: '/login' }}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Links;
