import React from 'react';
import { Container } from '../../components/ui-components';

import { FooterColumn } from './FooterColumn.js';

export const Footer = () => {
  return (
    <footer className="pb-10 bg-darkBlue pt-14">
      <div>
        <div>
          <FooterColumn title="About"></FooterColumn>
          <FooterColumn title="Social Acounts"></FooterColumn>
          <FooterColumn title="Helpfull links"></FooterColumn>
          <FooterColumn title="Newsletter signup"></FooterColumn>
        </div>
      </div>
    </footer>
  );
};
