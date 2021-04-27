import React from 'react';
import { Typo, Button } from 'components/ui-components';
import Image from 'next/image';
import clsx from 'clsx';
import { FaCheck, FaSearch } from 'react-icons/fa';
import Link from 'next/link';
import { useMediaQuery } from 'lib/hooks';

const Sentences = ({ topSentences }) => {
  return (
    <>
      <p className="text-gold font-bold text-[20px] sm:text-f-22  mb-4 sm:mb-0">
        For those who want to:
      </p>
      {topSentences?.map((item, i) => (
        <div key={i} className="flex items-center mb-4 sm:my-4 ">
          <FaCheck className="mr-3 text-gold text-f-26" />
          <div className="text-white text-[15px] sm:text-f-26 sm:font-bold ">
            {item.sentence}
          </div>
        </div>
      ))}
    </>
  );
};

export const HomeHero = ({ homeHero }) => {
  const isSmall = useMediaQuery('(max-width:640px)');

  const {
    heroTitle,
    heroImage: { sourceUrl, altText },
    topSentences,
  } = homeHero;
  return (
    <>
      <div className={clsx('h-[277px] sm:h-[578px] w-full relative')}>
        <div className="z-0">
          <Image
            src={sourceUrl}
            alt={altText}
            priority={true}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>

        <div
          className={clsx(
            'absolute top-0 left-0 z-10 w-full h-full',
            'px-4 pt-5 pb-5 sm:pb-12',
            'flex flex-col justify-end sm:justify-between',
          )}>
          {/* Top sentences */}
          <div className="hidden sm:block">
            <Sentences topSentences={topSentences} />
          </div>
          {/* Search */}
          <div className="text-center">
            <h2 className="mb-4 text-lg font-bold leading-tight text-white sm:mb-8 sm:text-f-26 md:text-f-36">
              {heroTitle}
            </h2>
            <div className="w-auto lg:w-[950px] mx-auto">
              <form className="relative mb-4">
                <input
                  type="text"
                  placeholder={
                    isSmall
                      ? 'destinations | experiences | places to stay'
                      : 'Search for experiences, destinations & places to stay'
                  }
                  className={clsx(
                    'bg-white border-none shadow-input pl-6',
                    ' text-sm sm:text-f-18 md:text-f-26 placeholder-grey3 font-bold',
                    'w-full h-10 sm:h-20',
                  )}
                />
                <Button
                  className={clsx(
                    'w-10 h-10 sm:h-[65px] sm:w-[135px]',
                    'absolute right-0 top-0 sm:right-2 sm:top-2',
                    'flex items-center justify-center',
                  )}>
                  <FaSearch className="text-grey4 text-f-18 sm:text-[38px]" />
                </Button>
              </form>
              <Link href="/seacrh">
                <a className="text-base font-normal tracking-wider underline uppercase text-lightBlue sm:text-f-24">
                  {isSmall
                    ? 'Browse all recommendatons'
                    : 'BROWSE ALL OF OUR RECOMMENDATIONS'}
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Sentences mobile */}
      <div className="p-3 pr-7 sm:hidden bg-darkBlue">
        <Sentences topSentences={topSentences} />
      </div>
    </>
  );
};
