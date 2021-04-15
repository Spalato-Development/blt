import React from 'react';
import { Container } from '../components/ui-components';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className=" bg-darkBlue">
      <div>
        <h1 className="text-white text-[48px] font-pm-light">
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
