import React from 'react';
import { Header, Footer } from './index';

export const Layout = ({ children, globalData = {} }) => {
  const { title } = globalData;
  return (
    <>
      <Header title={title} />
      {children}
      <Footer />
    </>
  );
};
