import React from 'react';
import Image from 'next/image';

export const Price = ({ priceCheckingLinks, ...props }) => {
  return (
    <div className="flex justify-between text-f-22 text-grey5" {...props}>
      <div>Check pricing & availability on:</div>
      <div className="flex">
        {priceCheckingLinks?.map((item, i) => {
          return (
            <a href={item.url} key={i} target="_blank">
              <img
                src={item.logo.sourceUrl}
                alt={item.logo.altText}
                className="max-w-[124px] mx-2"
              />
            </a>
          );
        })}
      </div>
    </div>
  );
};
