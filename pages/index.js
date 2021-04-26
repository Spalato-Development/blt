import React from 'react';
import Head from 'next/head';
import { getApolloClient } from '@wpengine/headless';
import { HOME_QUERY } from 'lib/queries';

import { HomeHero } from 'components';
import { appGetStaticProps } from 'lib/appGetStaticProps';

export default function Home({ homeData = {} }) {
  console.log('homeData', homeData);
  const {
    homeHero,
    whatWeOffer: { wwoItems, wwoTextBelow, wwoTitle },
  } = homeData.data.page || {};
  return (
    <div>
      <HomeHero homeHero={homeHero} />
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
