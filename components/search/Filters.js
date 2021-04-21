import React, { useState } from 'react';
import clsx from 'clsx';
import { Checkbox, Button } from 'components/ui-components';
import { Collapse } from '@chakra-ui/react';
import { FaChevronRight } from 'react-icons/fa';
import { filtersData } from 'lib/data';
import { css } from 'twin.macro';
const { continents, setting, months, time } = filtersData;

const FiltersMap = ({ filters, radio }) => {
  return (
    <>
      {filters?.map((filter) => {
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

const FilterSet = ({ filters = [], title, withInput, radio }) => {
  const [open, setOpen] = useState(false);
  const firstFilters = filters.slice(0, 4);
  const lastFilters = filters.slice(4);
  return (
    <div className="py-4 border-b border-grey2">
      <h4 className="uppercase text-[15px] tracking-wider text-grey5 mb-2">
        {title}
      </h4>
      <div>
        <FiltersMap filters={firstFilters} radio={radio} />
        {lastFilters.length > 0 && (
          <>
            <Collapse in={open}>
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

export const Filters = () => {
  return (
    <form>
      <FilterSet title="Continent" filters={continents} />
      <FilterSet title="Setting" filters={setting} />
      <FilterSet title="Travel Month" filters={months} />
      <FilterSet title="Flight Time" filters={time} radio="flightTime" />
      <FilterSet title="Jet Lag" filters={time} radio="jetlag" />
    </form>
  );
};
