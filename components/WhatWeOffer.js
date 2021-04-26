import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';

export const WhatWeOffer = ({ whatWeOffer }) => {
  const { wwoItems, wwoTextBelow, wwoTitle } = whatWeOffer;
  return (
    <div className="container px-5 pt-4 pb-10 text-center max-w-big">
      {/* Title */}
      <div className="flex flex-col items-center mb-8">
        <h2 className="text-center text-[48px] text-grey5 font-light">
          {wwoTitle}
        </h2>
        <Image
          src="/images/underline.svg"
          width="111px"
          height="8px"
          priority={true}
        />
      </div>
      {/* Items */}
      <div className="flex justify-between mb-10">
        {wwoItems?.map((item, i) => {
          return (
            <div key={i} className="flex flex-col items-center max-w-[230px]">
              <div
                className={clsx(
                  'text-[34px] font-bold',
                  'w-[50px] h-[50px] mb-4',
                  'flex justify-center items-center',
                  'border-3 border-gold',
                )}>
                {i + 1}
              </div>
              <div className="text-[20px] leading-snug">{item.content}</div>
            </div>
          );
        })}
      </div>
      <div className="text-gold text-f-30">{wwoTextBelow}</div>
    </div>
  );
};
