import React from 'react';
import clsx from 'clsx';

export const Tabs = ({ tabs = [] }) => {
  return (
    <div className="flex flex-wrap justify-start sm:justify-center sm:flex-nowrap">
      {tabs?.map((tab) => (
        <a
          className={clsx(
            'uppercase text-grey5 font-semibold p-2 text-center leading-tight text-[15px]',
            'hover:bg-gold focus:bg-gold',
            'h-[54px] w-[176px]',
            'border border-grey2',
            'flex justify-center items-center mx-1 mb-2',
          )}
          key={tab.name}
          href={`#${tab.name.toLowerCase().replace(' ', '-')}`}>
          {tab.name}
        </a>
      ))}
    </div>
  );
};
