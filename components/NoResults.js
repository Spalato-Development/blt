import React from 'react';
import clsx from 'clsx';

const EmptyListing = () => {
  return (
    <div className="w-full p-2 shadow-listing mb-base2">
      <div className="h-[166px] w-[249px] bg-veryLightGold"></div>
    </div>
  );
};
const emptyListings = Array.from(Array(4).keys());

export const NoResults = ({ className }) => {
  return (
    <>
      <div
        className={clsx(
          'bg-white border shadow-section border-grey2',
          'text-[#fda658] text-f-24 md:text-f-36 text-center',
          'p-5 md:py-10 md:px-12 mb-base2',
          className,
        )}>
        Sorry - we have no recommendations for that search term. Please try
        again!
      </div>
      <div
        className={clsx(
          'bg-white border shadow-section border-grey2',
          'pt-6 pb-3 px-base2',
          'hidden md:block',
        )}>
        {emptyListings.map((item, i) => (
          <EmptyListing key={i} />
        ))}
      </div>
    </>
  );
};
