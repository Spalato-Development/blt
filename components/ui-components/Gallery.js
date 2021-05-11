import React, { useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import Slider from 'react-slick';
import { useMediaQuery } from 'lib/hooks';

export const Gallery = ({ images = [], ...props }) => {
  const isLarge = useMediaQuery('(min-width:800px)');
  const desktopSettings = {
    customPaging: function (i) {
      const img = images[i];

      return (
        <a className="flex mx-1 mb-2 cursor-pointer">
          <Image
            src={img.sourceUrl}
            alt={img.altText}
            width="122px"
            height="69px"
            priority={true}
          />
        </a>
      );
    },
    dots: true,
    dotsClass: 'slick-thumbs',
    infinite: true,
    fade: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const mobileSettings = {
    infinite: true,
    fade: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const settings = isLarge ? desktopSettings : mobileSettings;
  return (
    <Slider {...settings} {...props} css={{ ...styles }}>
      {images?.map((image) => {
        const { id, sourceUrl, altText, caption, description } = image;
        return (
          <div key={id} className="relative flex">
            <Image
              src={sourceUrl}
              alt={altText}
              width="940px"
              height="530px"
              priority={true}
            />
            <div className="absolute leading-none text-white left-5 right-5 bottom-5 ">
              <div
                className="sm:text-f-26"
                dangerouslySetInnerHTML={{ __html: caption }}
              />
              <div
                className="text-[10px] font-light"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

const styles = {
  '.slick-thumbs': {
    display: 'flex !important',
    flexWrap: 'wrap',
    margin: '0 -4px',
    cursor: 'pointer',
    color: 'red',
  },
  '.slick-prev, .slick-next': {
    position: 'absolute',
    display: 'block',
    top: '40%',

    '@media only screen and (min-width: 800px)': {
      top: 230,
    },

    fontSize: 0,
  },
  '.slick-prev:before, .slick-next:before': {
    display: 'block',
    content: "''",

    width: 50,
    height: 50,
    position: `absolute`,
    top: 0,
  },
  '.slick-prev': {
    '&:before': {
      content: '""',
      background: 'url(/images/arrow-prev.svg) no-repeat',
      left: 0,
      '@media only screen and (max-width: 640px)': {
        left: -16,
      },
      zIndex: 10,

      // position: 'absolute',
    },
  },
  '.slick-next': {
    right: 0,
    '&:before': {
      content: '""',
      background: 'url(/images/arrow-next.svg) no-repeat',
      right: 0,
      '@media only screen and (max-width: 640px)': {
        right: -16,
      },
    },
  },
};
