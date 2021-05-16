import React from 'react';
import clsx from 'clsx';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Button } from 'components/ui-components';

export const Tabs = ({ tabs = [], className, ...props }) => {
  return (
    <div
      className={clsx(
        'flex flex-wrap justify-start -mx-1 md:justify-between sm:flex-nowrap',
        className,
      )}
      {...props}>
      {tabs?.map((tab) => (
        <Button
          as={AnchorLink}
          tab
          className={clsx('h:[39px] sm:h-[54px]', 'w-[100px] sm:w-[176px]')}
          key={tab.name}
          href={`#${tab.name.toLowerCase().replaceAll(' ', '-')}`}>
          {tab.name}
        </Button>
      ))}
    </div>
  );
};
