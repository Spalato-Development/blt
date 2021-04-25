import React from 'react';
import Head from 'next/head';
import { getApolloClient } from '@wpengine/headless';
import { HOME_QUERY } from 'lib/queries';
import { appGetStaticProps } from 'lib/appGetStaticProps';

export default function Home({ homeData }) {
  console.log('homeData', homeData);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main></main>
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
