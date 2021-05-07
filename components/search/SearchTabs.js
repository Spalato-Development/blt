import React from 'react';
import { Button } from 'components/ui-components';
import clsx from 'clsx';

export const SearchTabs = ({
  tabs = [],
  className,
  setTabFilters,
  ...props
}) => {
  const handleClick = (e) => {
    setTabFilters(e.target.value);
  };
  return (
    <div
      className={clsx(
        'flex flex-wrap justify-start -mx-1 md:justify-between md:flex-nowrap',
        className,
      )}
      {...props}>
      {tabs?.map((tab) => (
        <Button
          key={tab.name}
          value={tab.name}
          className={clsx('h-[39px] sm:h-[54px]', 'w-auto md:w-[149px]')}
          onClick={(e) => handleClick(e)}
          tab>
          {tab.name}
          <span className="ml-1">[{tab.results}]</span>
        </Button>
      ))}
    </div>
  );
};
