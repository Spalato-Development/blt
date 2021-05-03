import React, { useState } from 'react';
import { appGetStaticProps } from 'lib/appGetStaticProps';
import { SearchHead, SearchTabs, Filters, Listing } from 'components';
import { getApolloClient } from '@wpengine/headless';
import { FILTERS_QUERY } from 'lib/queries';
import { useGlobalData } from 'lib/context/globalDataContext';
import { Typo, Button, Select } from 'components';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';

const Search = ({ filtersData = {}, filtersForUI }) => {
  // const {
  //   commonFilters,
  //   placeToStayFilters,
  //   bottomCommonFilters,
  //   destinationsFilters,
  //   experiencesFilters,
  //   itinerariesFilters,
  //   roundupsFilters,
  // } = filtersData?.data.options;

  // sidebar filters
  const [sidebarFilters, setSidebarFilters] = useState(filtersForUI);
  // tab filters
  const [tabFilters, setTabFilters] = useState('all');
  // search
  const [globalSearch, setGlobalSearch] = useState(undefined);
  // results to be displayed
  const [results, setResults] = useState({});

  console.log('sidebarFilters: ', sidebarFilters);
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
    { name: 'all', results: totalResults },
    { name: 'experiences', results: experiencesResultsNumber },
    { name: 'destinations', results: destinationsResultsNumber },
    { name: 'places to stay', results: ptsResultsNumber },
    { name: 'round ups', results: roundupsResultsNumber },
    { name: 'itineraries', results: itinerariesResultsNumber },
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

  const submitGlobalSearch = (searchData) => {
    setGlobalSearch(searchData?.globalSearch?.toLowerCase());
    doSearch(searchData?.globalSearch?.toLowerCase());
  };

  const searchPlacesToStay = (searchQuery) => {
    if (!searchQuery) return placesToStay?.nodes;

    return placesToStay?.nodes.filter((item) => {
      const { title, tags, entityCategories: cats } = item;
      const tagNames = tags?.nodes.map((item) => item.name.toLowerCase());
      const catNames = cats?.nodes.map((item) => item.name.toLowerCase());

      return (
        title.toLowerCase().includes(searchQuery) ||
        tagNames.includes(searchQuery) ||
        catNames.includes(searchQuery)
      );
    });
  };

  const doSearch = (searchQuery) => {
    searchQuery = searchQuery || globalSearch;
    let placesToStayResults = searchPlacesToStay(searchQuery);

    // Testing with the "continent" filters

    const continents = [];
    const settings = [];

    sidebarFilters.commonFilters.map((item) => {
      if (item.title.toLowerCase() === 'continent') {
        item.filters.map((filter) => {
          if (filter.isSelected) {
            continents.push(filter.option);
          }
        });
      } else if (item.title.toLowerCase() === 'setting') {
        item.filters.map((filter) => {
          if (filter.isSelected) {
            settings.push(filter.option);
          }
        });
      }
    });

    if (continents && continents.length) {
      placesToStayResults = placesToStayResults.filter((place) => {
        return continents.includes(place.commonDataAttributes.continent);
      });
    }
    if (settings && settings.length) {
      placesToStayResults = placesToStayResults.filter((place) => {
        return place.customDataAttributes.setting.some((element) =>
          settings.includes(element),
        );
      });
    }
    setResults({ placesToStayResults });
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
            'w-full lg:w-2/3 xl:w-[960px]',
            'order-2 lg:order-1',
            'mr-0 lg:mr-7 lg:pl-5 px-5 lg:px-0',
          )}>
          <SearchTabs tabs={searchTabs} setTabFilters={setTabFilters} />

          <Select />

          {/* Results */}
          {results.placesToStayResults?.map((item) => {
            const { id } = item;
            return <Listing key={id} item={item} />;
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

            {/* {filters === 'places to stay' && (
              <>
                <Filters filterSets={commonFilters?.filterSet} />
                <Filters filterSets={placeToStayFilters?.ptsFilterSet} />
                <Filters filterSets={bottomCommonFilters?.bottomFilterSet} />
              </>
            )} */}

            {tabFilters === 'all' && (
              <>
                {/* <Filters filterSets={commonFilters?.filterSet} /> */}
                <Filters
                  filterSets={sidebarFilters.commonFilters}
                  onSearch={(data) => {
                    const _commonFilters = sidebarFilters.commonFilters.map(
                      (item) => {
                        if (item.title === data.title) {
                          const optionToUpdate = item.filters.find(
                            (filter) => filter.option === data.option,
                          );
                          optionToUpdate.isSelected = !optionToUpdate.isSelected;
                        }
                        return item;
                      },
                    );
                    setSidebarFilters({
                      ...sidebarFilters,
                      ['commonFilters']: _commonFilters,
                    });
                    doSearch();
                  }}
                />
                {/* <Filters filterSets={bottomCommonFilters?.bottomFilterSet} /> */}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;

// const transformFiltersForUI = (graphqlFilters) => {
//   // console.log("* graphqlFilters: ", Object.entries(graphqlFilters))
//   return Object.entries(graphqlFilters).reduce((acc, [key, entry]) => {

//     if (entry.filterSet) {
//       // console.log("-> key: ", key, " ->entry: ", entry)
//       // console.log("--> entry.filterSet: ", entry.filterSet)
//       entry.filterSet.map(_filter => {
//         // console.log("_filter: ", _filter)
//         acc.push({
//   title: _filter.title,
//   options: _filter.filters.map(option => {
//     return {
//       option: option,
//       isSelected: false,
//       isDisabled: false,
//     }
//   }),
//   forType: key.replace("Filters", ""),
//   radio: _filter.radio,
// })
//       })
//     }
//     return acc;
//   }, [])
// }

const transformFilters = (graphqlFilters) => {
  return Object.entries(graphqlFilters).reduce((acc, [key, entry]) => {
    if (entry.filterSet) {
      acc[key] = [];
      entry.filterSet.map((_filter) => {
        acc[key].push({
          title: _filter.title,
          filters: _filter.filters.map((option) => {
            return {
              option: option.item,
              isSelected: false,
              // isDisabled: false,
              isDisabled: option.item === 'Countryside' ? true : false,
            };
          }),
          forType: key.replace('Filters', ''),
          radio: _filter.radio,
        });
      });
    }
    return acc;
  }, {});
};

export const getStaticProps = async (context) => {
  const client = getApolloClient(context);
  const filtersData = await client.query({ query: FILTERS_QUERY });
  const filtersForUI = transformFilters(filtersData.data.options);
  const globalData = await appGetStaticProps(context);
  return {
    props: {
      globalData,
      // filtersData,
      filtersForUI,
    },
  };
};
