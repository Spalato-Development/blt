import React, { useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import Slider from 'react-slick';

export const Gallery = ({ images = [], ...props }) => {
  return (
    <>
      <div {...props}>
        <Image
          src={images[0]?.sourceUrl}
          alt={images[0]?.altText}
          width="940px"
          height="530px"
          priority={true}
        />
      </div>
      <div className={clsx('flex flex-wrap -mx-1')}>
        {images?.map((image) => {
          const { id, sourceUrl, altText } = image;
          return (
            <div key={id} className="mx-1">
              <Image
                src={sourceUrl}
                alt={altText}
                width="122px"
                height="69px"
                priority={true}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};
