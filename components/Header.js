import React from 'react';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className=" bg-darkBlue">
      <div className="container max-w-[1400px] px-5">
        <h1 className="text-white text-[48px] font-pm-light">
          <Link href="/">
            <a className="font-pm-light">
              bucket list{' '}
              <span className="ml-4 text-gold font-script"> travels</span>
            </a>
          </Link>
        </h1>
      </div>
    </header>
  );
};
