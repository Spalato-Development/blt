import React from 'react';
import { Button } from 'components';
import clsx from 'clsx';

export const Price = ({ priceCheckingLinks, website, className, ...props }) => {
  return (
    <div
      className={clsx(
        'justify-between block xl:flex',
        'text-f-22 text-grey5',
        className,
      )}
      {...props}>
      <div>Check pricing & availability on:</div>
      <div className="flex flex-wrap mt-4 xl:mt-0">
        {priceCheckingLinks?.map((item, i) => {
          return (
            <a href={item.url} key={i} target="_blank">
              <img
                src={item?.logo?.sourceUrl}
                alt={item?.logo?.altText}
                className="max-w-[124px] mx-2 mb-2"
              />
            </a>
          );
        })}
        {website && (
          <Button secondary as="a" href={website} target="_blank">
            Hotel Website
          </Button>
        )}
      </div>
    </div>
  );
};
