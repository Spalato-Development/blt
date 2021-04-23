import React from 'react';
import { FooterColumn } from './FooterColumn.js';
import { useGlobalData } from 'lib/context/globalDataContext';
import Link from 'next/link';
import { NewsletterSmall } from 'components';
import clsx from 'clsx';

import { FaFacebookSquare as Fb, FaInstagram as Insta } from 'react-icons/fa';

const FooterItem = ({ children }) => {
  return <li className="mb-5 text-white">{children}</li>;
};

export const Footer = () => {
  const { footerData } = useGlobalData() || {};
  const { footerData: footer } = footerData?.data?.options || {};
  const { vatNumber, companyNumber, facebook, instagram } = footer || {};
  const { menuItems } = footerData?.data?.menu || {};
  return (
    <footer className="pb-10 bg-darkBlue pt-14">
      <div
        className="container grid grid-cols-1 gap-8 px-5 md:px-0 sm:grid-cols-2 lg:grid-cols-4"
        className={clsx(
          'container px-5 2xl:px-0',
          'grid grid-cols-1 gap-8  sm:grid-cols-2 lg:grid-cols-4',
        )}>
        <FooterColumn title="About">
          <ul>
            <FooterItem>
              <Link href="/about-us">
                <a className="text-white">About us</a>
              </Link>
            </FooterItem>
            <FooterItem>
              <Link href="/writers">
                <a className="text-white">Our writers</a>
              </Link>
            </FooterItem>
            <FooterItem>Company number: {companyNumber}</FooterItem>
          </ul>
        </FooterColumn>
        <FooterColumn title="Social Acounts">
          <div className="flex">
            <a
              href={facebook}
              target="_blank"
              className="mr-5 no-underline text-gold hover:text-lightGold">
              <Fb className="w-[40px] h-[40px]" />
            </a>
            <a
              href={instagram}
              target="_blank"
              className="no-underline text-gold hover:text-lightGold">
              <Insta className="w-[40px] h-[40px]" />
            </a>
          </div>
        </FooterColumn>
        <FooterColumn title="Helpfull links">
          <ul>
            {menuItems?.nodes?.map((item) => {
              const { id, label, path } = item;
              return (
                <FooterItem key={id}>
                  <Link href={path}>
                    <a className="text-white">{label}</a>
                  </Link>
                </FooterItem>
              );
            })}
          </ul>
        </FooterColumn>
        <FooterColumn title="Newsletter signup">
          <NewsletterSmall />
        </FooterColumn>
      </div>
      <div className="container px-5 mt-5 text-gold md:px-0">
        @ {new Date().getFullYear()} Bucket List Travels. All rights reserved.
      </div>
    </footer>
  );
};
