import React from 'react';
import Head from 'next/head';
import { getApolloClient } from '@wpengine/headless';
import { HOME_QUERY } from 'lib/queries';
import { Typo, Button } from 'components/ui-components';
import { appGetStaticProps } from 'lib/appGetStaticProps';
import Image from 'next/image';
import clsx from 'clsx';
import { FaCheck, FaSearch } from 'react-icons/fa';
import Link from 'next/link';

export default function Home({ homeData = {} }) {
  console.log('homeData', homeData);
  const {
    homeHero: {
      heroTitle,
      heroImage: { sourceUrl, altText },
      topSentences,
    },
    whatWeOffer: { wwoItems, wwoTextBelow, wwoTitle },
  } = homeData.data.page || {};
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={clsx('h-[578px] w-full relative')}>
          <div className="z-0 h-[578px]">
            <Image
              src={sourceUrl}
              alt={altText}
              priority={true}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>

          <div className="absolute top-0 left-0 z-10 w-full px-4 pt-5 pb-12">
            <div className="font-bold">
              <p className="text-gold text-f-22 ">For those who want to:</p>
              {topSentences?.map((item, i) => (
                <div key={i} className="flex items-center my-7 ">
                  <FaCheck className="mr-3 text-gold text-f-26" />
                  <div className="text-white text-f-26">{item.sentence}</div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Typo light className="mb-12 font-bold text-white ">
                {heroTitle}
              </Typo>
              <div className="w-auto lg:w-[950px] mx-auto">
                <form className="relative">
                  <input
                    type="text"
                    placeholder="Search for experiences, destinations & places to stay"
                    className={clsx(
                      'bg-white border-none shadow-input pl-6',
                      'text-f-26 placeholder-grey3 font-bold',
                      'w-full h-[80px]',
                    )}
                  />
                  <Button className="h-[65px] w-[135px] absolute right-2 top-2">
                    <FaSearch className="text-[38px]" />
                  </Button>
                </form>
                {/* <link href="/about">
                  <a className="tracking-wider underline uppercase text-lightBlue text-f-24">
                    BROWSE ALL OF OUR RECOMMENDATIONS
                  </a>
                </link> */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export const getStaticProps = async (context) => {
  const client = getApolloClient(context);
  const globalData = await appGetStaticProps(context);
  const homeData = await client.query({
    query: HOME_QUERY,
  });

  return {
    props: {
      globalData,
      homeData,
    },
  };
};
