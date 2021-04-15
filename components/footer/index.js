import React from 'react';

import { FooterColumn } from './FooterColumn.js';

export const Footer = () => {
  return (
    <footer className="pb-10 bg-darkBlue pt-14">
      <div className="container grid grid-cols-1 gap-8 px-5 md:px-0 sm:grid-cols-2 lg:grid-cols-4">
        <FooterColumn title="About"></FooterColumn>
        <FooterColumn title="Social Acounts"></FooterColumn>
        <FooterColumn title="Helpfull links"></FooterColumn>
        <FooterColumn title="Newsletter signup"></FooterColumn>
      </div>
    </footer>
  );
};
