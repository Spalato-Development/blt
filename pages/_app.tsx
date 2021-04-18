import React from 'react';
import { AppContext, AppInitialProps } from 'next/app';
import { HeadlessProvider } from '@wpengine/headless/react';
import { Layout } from 'components';
import { GlobalDataProvider } from 'lib/context/globalDataContext';
import 'styles/wp-styles/styles.css';
import 'styles/globals.css';

/* eslint-disable react/jsx-props-no-spreading */
export default function App({
  Component,
  pageProps,
}: AppContext & AppInitialProps) {
  return (
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    <GlobalDataProvider globalData={pageProps.globalData}>
      <HeadlessProvider pageProps={pageProps}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </HeadlessProvider>
    </GlobalDataProvider>
  );
}
