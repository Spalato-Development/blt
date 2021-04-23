import React from 'react';

export const Price = ({ priceCheckingLinks, ...props }) => {
  return (
    <div
      className="justify-between block xl:flex text-f-22 text-grey5"
      {...props}>
      <div>Check pricing & availability on:</div>
      <div className="flex flex-wrap mt-4 xl:mt-0">
        {priceCheckingLinks?.map((item, i) => {
          return (
            <a href={item.url} key={i} target="_blank">
              <img
                src={item.logo.sourceUrl}
                alt={item.logo.altText}
                className="max-w-[124px] mx-2 mb-2"
              />
            </a>
          );
        })}
      </div>
    </div>
  );
};
