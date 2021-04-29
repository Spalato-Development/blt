import React, { useState } from 'react';
import { appGetStaticProps } from 'lib/appGetStaticProps';
import { SearchHead, SearchTabs, Filters } from 'components';
import { getApolloClient } from '@wpengine/headless';
import { FILTERS_QUERY } from 'lib/queries';
import { useGlobalData } from 'lib/context/globalDataContext';
import { Typo, Button } from 'components/ui-components';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';
// import country from 'country-list-js';

const Search = ({ filtersData = {} }) => {
  const {
    commonFilters,
    placeToStayFilters,
    bottomCommonFilters,
    destinationsFilters,
    experiencesFilters,
    itinerariesFilters,
    roundupsFilters,
  } = filtersData?.data.options;
  const [filters, setFilters] = useState('all');
  const [results, setResults] = useState({});
  const [globalSearch, setGlobalSearch] = useState(undefined);

  const objectLength = (obj) => Object.entries(obj || 0).length;
  const ptsResultsNumber = objectLength(results.placesToStayResults);
  const destinationsResultsNumber = objectLength(results.destinationsResults);
  const experiencesResultsNumber = objectLength(results.experiencesResults);
  const roundupsResultsNumber = objectLength(results.roundupsResults);
  const itinerariesResultsNumber = objectLength(results.itinerariesResults);
  const totalResults =
    ptsResultsNumber +
    experiencesResultsNumber +
    roundupsResultsNumber +
    itinerariesResultsNumber +
    destinationsResultsNumber;

  const searchTabs = [
    { name: 'all', results: 0 },
    { name: 'experiences', results: 0 },
    { name: 'destinations', results: 0 },
    { name: 'places to stay', results: 0 },
    { name: 'round ups', results: 0 },
    { name: 'itineraries', results: 0 },
  ];
  const globalData = useGlobalData();
  const {
    placesToStay,
    destinations,
    experiences,
    roundups,
    writers,
  } = globalData.allEntitiesData.data;

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const submitGlobalSearch = (data) => {
    const lowerData = data?.globalSearch?.toLowerCase();

    const placesToStayResults = placesToStay?.nodes.filter((item) => {
      const {
        title,
        tags,
        entityCategories: cats,
        commonDataAttributes: { country },
      } = item;
      const tagNames = tags?.nodes.map((item) => item.name.toLowerCase());
      const catNames = cats?.nodes.map((item) => item.name.toLowerCase());
      // const { continent } = country?.findByName('Spain') || {};
      return (
        title.toLowerCase().includes(lowerData) ||
        tagNames.includes(lowerData) ||
        catNames.includes(lowerData)
        // || continent.toLocaleLowerCase().includes(lowerData)
      );
    });
    setGlobalSearch(lowerData);
    setResults({ ...results, placesToStayResults });
    reset();
  };

  return (
    <>
      <SearchHead
        handleSubmitGlobalSearch={submitGlobalSearch}
        results={totalResults}
        query={globalSearch}
      />
      <div
        className={clsx(
          'container max-w-big',
          'flex flex-col lg:flex-row ',
          'px-5 md:px-0',
        )}>
        <div
          className={clsx(
            'w-full lg:w-2/3 lg:w-[940px]',
            'order-2 lg:order-1',
            'mr-0 lg:mr-14',
          )}>
          <SearchTabs tabs={searchTabs} setFilters={setFilters} />
          {results.placesToStayResults?.map((item) => {
            return (
              <div key={item.id}>
                <h2>{item.title}</h2>
              </div>
            );
          })}
        </div>
        <div
          className={clsx(
            'w-full lg:w-1/3 lg:w-[300px]',
            'order-1 lg:order-2',
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
              <>
                <Filters filterSets={commonFilters?.filterSet} />
                <Filters filterSets={placeToStayFilters?.ptsFilterSet} />
                <Filters filterSets={bottomCommonFilters?.bottomFilterSet} />
              </>
            )}

            {filters === 'all' && (
              <>
                <Filters filterSets={commonFilters?.filterSet} />
                <Filters filterSets={bottomCommonFilters?.bottomFilterSet} />
              </>
            )}
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
