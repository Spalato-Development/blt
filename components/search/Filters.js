import React, { useState } from 'react';
import clsx from 'clsx';
import { Checkbox, Button } from 'components/ui-components';
import { FaChevronRight, FaChevronDown } from 'react-icons/fa';
import Collapse from '@kunukn/react-collapse';

const FiltersMap = ({ filters = [], radio, onSearch, title }) => {
  return (
    <>
      {filters?.map((filter) => {
        const { option, isDisabled } = filter || {};
        return (
          <Checkbox
            key={option}
            id={option}
            label={option}
            disabled={isDisabled}
            className="mb-1"
            radio={radio}
            onChange={(e) => {
              onSearch({
                title,
                option: filter.option,
                value: e.target.value,
              });
            }}
          />
        );
      })}
    </>
  );
};

const FilterSet = ({ filters = [], title, radio, hasInput, onSearch }) => {
  const [open, setOpen] = useState(false);
  const [openFilterSet, setOpenFilterSet] = useState(false);
  const firstFilters = filters.slice(0, 4);
  const lastFilters = filters.slice(4);

  return (
    <div className="py-4 border-b border-grey2">
      {/* Title */}
      <div className="flex justify-between">
        <h4 className="uppercase text-[15px] tracking-wider text-grey5 mb-2">
          {title}
        </h4>
        <FaChevronDown
          className={clsx(
            'w-8 h-6 lg:hidden text-lightBlue',
            'transition duration-500',
            { 'transform rotate-180': openFilterSet },
          )}
          onClick={(e) => {
            e.preventDefault();
            setOpenFilterSet(!openFilterSet);
          }}
        />
      </div>
      <Collapse
        isOpen={openFilterSet}
        className="duration-500 ease-in-out transition-height">
        <div>
          {hasInput && (
            <input
              type="text"
              placeholder="Enter departure airport"
              aria-label="departure airport"
              className="w-full h-8 mt-2 mb-3 border-grey2"
            />
          )}
          <FiltersMap
            filters={firstFilters}
            radio={radio}
            onSearch={onSearch}
            title={title}
          />
          {lastFilters.length > 0 && (
            <>
              <Collapse
                isOpen={open}
                className="duration-500 ease-in-out transition-height">
                <FiltersMap
                  filters={lastFilters}
                  radio={radio}
                  onSearch={onSearch}
                  title={title}
                />
              </Collapse>

              <Button
                small
                secondary
                className="mt-2"
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(!open);
                }}
                css={{
                  '&:hover': {
                    svg: { color: 'white' },
                  },
                }}>
                {open ? 'show less' : 'show all'}{' '}
                <FaChevronRight
                  className={clsx(
                    'transition duration-500',
                    'ml-1',
                    'text-lightBlue  text-[11px]',
                    { 'transform rotate-90': open },
                  )}
                />
              </Button>
            </>
          )}
        </div>
      </Collapse>
    </div>
  );
};

export const Filters = ({ filterSets = [], onSearch }) => {
  return (
    <form>
      {filterSets?.map((filterSet) => {
        const { title, hasInput, filters, radio } = filterSet || {};
        return (
          <FilterSet
            onSearch={onSearch}
            key={title}
            hasInput={hasInput}
            filters={filters}
            title={title}
            radio={radio && title}
          />
        );
      })}
    </form>
  );
};
