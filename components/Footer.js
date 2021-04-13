import React from 'react';
import { useQuery, gql } from '@apollo/client';

const FOOTER_DATA = gql`
  query {
    options {
      footerData {
        companyNumber
        facebook
        fieldGroupName
        instagram
        vatNumber
      }
    }
  }
`;

export const Footer = () => {
  const { data, error, loading } = useQuery(FOOTER_DATA);
  const { facebook } = data?.options?.footerData || '';
  console.log(data, loading, error);
  return (
    <div>
      <h1 classname="text-6xl font-semibold uppercase text-darkBlue">
        FooterData: {facebook}
      </h1>
    </div>
  );
};
