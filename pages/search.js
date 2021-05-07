import React, { useState, useEffect } from 'react';
import { appGetStaticProps } from 'lib/appGetStaticProps';
import {
  SearchHead,
  SearchTabs,
  Filters,
  Listing,
  NoResults,
} from 'components';
import { getApolloClient } from '@wpengine/headless';
import { FILTERS_QUERY } from 'lib/queries';
import { useGlobalData } from 'lib/context/globalDataContext';
import { Typo, Button, Select } from 'components';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';

const Search = ({ allSidebarFilters = {} }) => {
  // sidebar filters
  const [sidebarFilters, setSidebarFilters] = useState(allSidebarFilters);
  // tab filters
  const [tabFilters, setTabFilters] = useState('all');
  // search
  const [globalSearchQuery, setGlobalSearchQuery] = useState(undefined);
  // results to be displayed
  const [results, setResults] = useState({});
  console.log('sidebarFilters', sidebarFilters, 'results', results);


  useEffect(() => {
    updateFiltersUI()
  }, [results]);

  /** 
   * Lets enabled/Disable the filters depending on the results!
   */
  const updateFiltersUI = () => {
    const commonFiltersUpdated = sidebarFilters?.commonFilters?.map((filterSet) => {
      const filterTitle = filterSet.title.toLowerCase()

      // CONTINENT

      const continentsResults = results?.placesToStayResults?.map((item) => {
        return item.commonDataAttributes.continent.toLowerCase();
      });

      if (filterTitle === 'continent') {
        filterSet.filters = filterSet.filters.map((filter) => {
          filter.isDisabled = !continentsResults?.includes(filter.option.toLowerCase())
          return filter;
        });
      }
      return filterSet;

      // SETTING
      // TRAVEL MONTH
      // SPECIALLY FOR
    });

    setSidebarFilters({
      ...sidebarFilters,
      commonFilters: commonFiltersUpdated
    })

  }

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
    console.log('searchData', searchData);
    setGlobalSearchQuery(searchData?.globalSearch?.toLowerCase());

    doSearch(searchData?.globalSearch?.toLowerCase());
  };

  const searchPlacesToStay = (searchQuery) => {
    if (!searchQuery) return null;

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

  /**
   * Manages the automatic search on sidebar filters (continent, settings ...)
   * @param {object} data - The data on the filter to be parser
   * @param {string} data.title - The title of the filter
   * @param {string} data.option - The option value of the filter
   * @param {bool} data.value - If the option is "selected" or not
   * @param {string} filtersCategory - The type of filter, it can be:
   *  - commonFilters, bottomFilters ...
   */
  const handleFilterSearch = (data, filtersCategory) => {
    //the data is {title, option, value} that are the args in the Checkbox from the filter file
    const _Filters = sidebarFilters[filtersCategory]?.map((item) => {
      if (item.title === data.title) {
        const optionToUpdate = item.filters.find(
          (filter) => filter.option === data.option,
        );
        optionToUpdate.isSelected = !optionToUpdate.isSelected;
      }
      return item;
    });
    setSidebarFilters({
      ...sidebarFilters,
      [`${filtersCategory}`]: _Filters,
    });
    doSearch();
  };

  const doSearch = (searchQuery) => {
    //If no filter from the sidebar are applied, the query is the one from the globalSearch
    searchQuery = searchQuery || globalSearchQuery;
    let placesToStayResults = searchPlacesToStay(searchQuery);

    //common filters
    const continents = [];
    const settings = [];
    // pts filters
    const standards = [];
    const roomTypes = [];
    const brands = [];

    sidebarFilters.commonFilters?.map((item) => {
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

    sidebarFilters.placeToStayFilters?.map((item) => {
      const { title, filters } = item;
      if (title.toLowerCase() === 'standard') {
        filters?.map(
          (filter) => filter.isSelected && standards.push(filter.option),
        );
      } else if (title.toLowerCase() === 'room type') {
        filters?.map(
          (filter) => filter.isSelected && roomTypes.push(filter.option),
        );
      } else if (title.toLowerCase() === 'brand') {
        filters?.map(
          (filter) => filter.isSelected && brands.push(filter.option),
        );
      }
    });

    if (continents && continents.length) {
      placesToStayResults = placesToStayResults?.filter((place) => {
        return continents.includes(place.commonDataAttributes.continent);
      });
    }
    if (settings && settings.length) {
      placesToStayResults = placesToStayResults?.filter((place) => {
        return place.customDataAttributes.setting.some((element) =>
          settings.includes(element),
        );
      });
    }
    if (standards?.length) {
      placesToStayResults = placesToStayResults?.filter((place) => {
        return standards.includes(place.customDataAttributes.standard);
      });
    }
    if (roomTypes?.length) {
      placesToStayResults = placesToStayResults?.filter((place) => {
        return place.customDataAttributes.roomType.some((element) =>
          roomTypes.includes(element),
        );
      });
    }
    if (brands?.length) {
      placesToStayResults = placesToStayResults?.filter((place) => {
        return brands.includes(place.customDataAttributes.brand);
      });
    }
    setResults({ ...results, placesToStayResults });
  };

  const commonFilters = (
    <Filters
      filterSets={sidebarFilters.commonFilters}
      onSearch={(data) => handleFilterSearch(data, 'commonFilters')}
    />
  );

  const bottomCommonFilters = (
    <Filters
      filterSets={sidebarFilters.bottomCommonFilters}
      onSearch={(data) => handleFilterSearch(data, 'bottomCommonFilters')}
    />
  );

  const placesToStayResultsListings = results.placesToStayResults?.map(
    (item) => {
      const { id } = item;
      return <Listing key={id} item={item} />;
    },
  );

  return (
    <>
      <SearchHead
        handleSubmitGlobalSearch={submitGlobalSearch}
        results={totalResults}
        query={globalSearchQuery}
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
          {globalSearchQuery && totalResults === 0 && (
            <NoResults className="mt-10" />
          )}
          {tabFilters === 'places to stay' && placesToStayResultsListings}
          {tabFilters === 'all' && placesToStayResultsListings}
        </div>

        {/* Sidebar filters */}

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

            {tabFilters === 'places to stay' && (
              <>
                {commonFilters}
                <Filters
                  filterSets={sidebarFilters.placeToStayFilters}
                  onSearch={(data) =>
                    handleFilterSearch(data, 'placeToStayFilters')
                  }
                />

                {bottomCommonFilters}
              </>
            )}

            {tabFilters === 'all' && (
              <>
                {commonFilters}
                {bottomCommonFilters}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;

/**
 * [SSR]
 * Retrieves the filters from the "global data" shape into a UI format data,
 * - We need `option`, `isSelected` and `isDisabled` params on the filters
 *  
 * @param {*} graphqlFilters 
 * @returns 
 */
const transformFiltersServerSide = (graphqlFilters) => {
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
              isDisabled: false
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
  const allSidebarFilters = transformFiltersServerSide(filtersData.data.options);
  const globalData = await appGetStaticProps(context);
  return {
    props: {
      globalData,
      // filtersData,
      allSidebarFilters,
    },
  };
};
