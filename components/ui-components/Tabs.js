import React from 'react';
import clsx from 'clsx';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export const Tabs = ({ tabs = [], className, ...props }) => {
  return (
    <div
      className={clsx(
        'flex flex-wrap justify-start -mx-1 md:justify-between sm:flex-nowrap',
        className,
      )}
      {...props}>
      {tabs?.map((tab) => (
        <AnchorLink
          className={clsx(
            'uppercase text-grey5 font-semibold p-2 text-center leading-tight text-[12px] sm:text-[15px]',
            'hover:bg-gold focus:bg-gold hover:no-underline',
            'h:[39px] sm:h-[54px]',
            'w-[100px] sm:w-[176px]',
            'border border-grey2',
            'flex justify-center items-center mx-1 mb-2',
          )}
          key={tab.name}
          href={`#${tab.name.toLowerCase().replace(' ', '-')}`}>
          {tab.name}
        </AnchorLink>
      ))}
    </div>
  );
};
