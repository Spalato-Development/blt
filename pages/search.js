import React, { useState } from 'react';
import { appGetStaticProps } from 'lib/appGetStaticProps';
import { SearchHead, SearchTabs, Filters } from 'components';
import { getApolloClient } from '@wpengine/headless';
import { FILTERS_QUERY } from 'lib/queries';
import { Typo, Button } from 'components/ui-components';
import clsx from 'clsx';

const Search = ({ filtersData = {} }) => {
  const { commonFilters, placeToStayFilters } = filtersData?.data.options;
  const [filters, setFilters] = useState('all');
  const searchTabs = [
    { name: 'all', results: 0 },
    { name: 'experiences', results: 0 },
    { name: 'destinations', results: 0 },
    { name: 'places to stay', results: 0 },
    { name: 'round ups', results: 0 },
    { name: 'itineraries', results: 0 },
  ];
  console.log('selectedFilters', filters, 'ptsfilters', placeToStayFilters);

  return (
    <>
      <SearchHead />
      <div
        className={clsx(
          'container max-w-big',
          'flex flex-col lg:flex-row ',
          'px-5 md:px-0',
        )}>
        <div
          className={clsx(
            'w-full lg:w-2/3 xl:w-[940px]',
            'order-2 xl:order-1',
            'mr-0 lg:mr-14',
          )}>
          <SearchTabs tabs={searchTabs} setFilters={setFilters} />
        </div>
        <div
          className={clsx(
            'w-full lg:w-1/3 xl:w-[300px]',
            'order-1 xl:order-2',
          )}>
          <div className="px-5 pt-3 pb-10 mb-10 border border-grey2">
            <Typo
              as="h3"
              h3
              className="p-2 mb-2 text-center border-b border-grey2">
              Filter your results
            </Typo>
            <div className="flex justify-center mb-3">
              <Button secondary small>
                Reset all
              </Button>
            </div>

            {filters === 'places to stay' && (
              <Filters filterSets={placeToStayFilters?.ptsFilterSet} />
            )}

            {filters === 'all' && (
              <Filters filterSets={commonFilters?.filterSet} />
            )}

            {/* <Filters filterSets={commonFilters?.filterSet} /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;

export const getStaticProps = async (context) => {
  const client = getApolloClient(context);
  const filtersData = await client.query({ query: FILTERS_QUERY });
  const globalData = await appGetStaticProps(context);
  return {
    props: {
      globalData,
      filtersData,
    },
  };
};
