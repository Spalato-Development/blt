import React from 'react';
import Image from 'next/image';
import { Number } from 'components';

export const WhatWeOffer = ({ whatWeOffer }) => {
  const { wwoItems, wwoTextBelow, wwoTitle } = whatWeOffer;
  return (
    <div className="container px-5 py-6 md:pt-4 md:pb-10 max-w-big">
      {/* Title */}
      <div className="flex flex-col items-center mb-8">
        <h2 className="text-center text-f-40 md:text-[48px] text-grey5 font-light">
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
      <div className="grid grid-cols-1 gap-8 mb-10 md:gap-10 md:grid-cols-3 lg:grid-cols-5">
        {wwoItems?.map((item, i) => {
          return (
            <div
              key={i}
              className="flex md:flex-col items-center md:max-w-[230px] ">
              <Number number={i + 1} className="mb-4 mr-4 md:mr-0" />
              <div className="md:text-[20px] leading-snug md:text-center max-w-[400px]">
                {item.content}
              </div>
            </div>
          );
        })}
      </div>
      <div className="hidden text-center text-gold text-f-30 md:block">
        {wwoTextBelow}
      </div>
    </div>
  );
};
