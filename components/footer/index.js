import React from 'react';
import { Container } from '../../components/ui-components';
import { Wrap } from '@chakra-ui/react';
import { FooterColumn } from './FooterColumn.js';

export const Footer = () => {
  return (
    <footer className="pb-10 bg-darkBlue pt-14">
      <Container>
        <Wrap
          spacing="30px"
          justify={{ base: 'flex-start', lg: 'space-between' }}>
          <FooterColumn title="About"></FooterColumn>
          <FooterColumn title="Social Acounts"></FooterColumn>
          <FooterColumn title="Helpfull links"></FooterColumn>
          <FooterColumn title="Newsletter signup"></FooterColumn>
        </Wrap>
      </Container>
    </footer>
  );
};
