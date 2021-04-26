import React from 'react';
import Link from 'next/link';
import { useGlobalData } from 'lib/context/globalDataContext';
import { Menu } from './Menu';

export const Header = () => {
  const globalData = useGlobalData();
  console.log('globaldata', globalData);
  return (
    <header className=" bg-darkBlue">
      <div className="container flex items-center justify-between px-5 py-2 sm:py-0 2xl:px-0 max-w-big">
        <h1 className="text-white text-f-28 sm:text-[48px] font-light">
          <Link href="/">
            <a className="text-white hover:text-white hover:no-underline">
              bucket list{' '}
              <span className="ml-4 text-gold font-script"> travels</span>
            </a>
          </Link>
        </h1>
        <Menu />
      </div>
    </header>
  );
};
