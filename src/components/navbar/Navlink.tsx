import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
type LinkType = {
  link: { title: string; path: string };
  handleMenu?: () => void;
};

const Navlink = ({ link, handleMenu }: LinkType) => {
  const pathName = usePathname();
  const isActive = pathName.endsWith(link.path);
  const handleClick = () => {
    if (handleMenu) {
      handleMenu();
    }
  };
  return (
    <Link
      href={link.path}
      onClick={handleClick}
      className={`${
        isActive
          ? 'bg-white text-black px-2 py-1 rounded-xl mx-5'
          : 'mx-5 px-2 py-1'
      }`}
    >
      {link.title}
    </Link>
  );
};

export default Navlink;
