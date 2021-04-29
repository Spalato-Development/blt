import React, { useState } from 'react';
import clsx from 'clsx';
import { Checkbox, Button } from 'components/ui-components';
import { FaChevronRight } from 'react-icons/fa';
import Collapse from '@kunukn/react-collapse';

const FiltersMap = ({ filters = [], radio }) => {
  const filtersItems = filters?.map((filter) => filter.item);
  return (
    <>
      {filtersItems?.map((filter) => {
        return (
          <Checkbox
            key={filter}
            id={filter}
            label={filter}
            className="mb-1"
            radio={radio}
          />
        );
      })}
    </>
  );
};

const FilterSet = ({ filters = [], title, radio, hasInput }) => {
  const [open, setOpen] = useState(false);
  const firstFilters = filters.slice(0, 4);
  const lastFilters = filters.slice(4);
  return (
    <div className="py-4 border-b border-grey2">
      <h4 className="uppercase text-[15px] tracking-wider text-grey5 mb-2">
        {title}
      </h4>
      <div>
        {hasInput && (
          <input
            type="text"
            placeholder="Enter departure airport"
            aria-label="departure airport"
          />
        )}
        <FiltersMap filters={firstFilters} radio={radio} />
        {lastFilters.length > 0 && (
          <>
            <Collapse
              isOpen={open}
              className="duration-500 ease-in-out transition-height">
              <FiltersMap filters={lastFilters} />
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
    </div>
  );
};

export const Filters = ({ filterSets = [] }) => {
  return (
    <form>
      {filterSets?.map((item) => {
        return (
          <FilterSet
            key={item.title}
            filters={item.filters}
            title={item.title}
            radio={item.radio}
          />
        );
      })}
    </form>
  );
};
