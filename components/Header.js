import React from 'react';
import Link from 'next/link';
import { useGlobalData } from '../lib/context/globalDataContext';

export const Header = () => {
  const globalData = useGlobalData();
  console.log('globaldata', globalData);
  return (
    <header className=" bg-darkBlue">
      <div className="container">
        <h1 className="text-white text-[48px] font-light">
          <Link href="/">
            <a>
              bucket list{' '}
              <span className="ml-4 text-gold font-script"> travels</span>
            </a>
          </Link>
        </h1>
      </div>
    </header>
  );
};
