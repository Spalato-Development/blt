import React, { useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

export const Gallery = ({ images = [], ...props }) => {
  const [bigImage, setBigImage] = useState(images[0]);
  function handleClick(e) {
    // setBigImage(images.find((image) => image.id === id));
    console.log('target', e);
  }

  return (
    <>
      <div {...props}>
        <Image
          src={bigImage?.sourceUrl}
          alt={bigImage?.altText}
          width="940px"
          height="530px"
          priority={true}
        />
      </div>
      <div className={clsx('flex flex-wrap -mx-1')}>
        {images?.map((image) => {
          const { id, sourceUrl, altText } = image;
          return (
            <div
              key={id}
              className="mx-1"
              onClick={(e) => handleClick(e)}>
              <Image
                src={sourceUrl}
                alt={altText}
                width="110px"
                height="61px"
                priority={true}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};
