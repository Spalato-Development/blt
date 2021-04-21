import React from 'react';
import { appGetStaticProps } from 'lib/appGetStaticProps';
import { SearchHead } from 'components';
import { ContentLayout } from 'components/ui-components';

const Search = () => {
  return (
    <>
      <SearchHead />
      <ContentLayout></ContentLayout>
    </>
  );
};

export default Search;

export const getStaticProps = async (context) => {
  const globalData = await appGetStaticProps(context);
  return {
    props: {
      globalData,
    },
  };
};
