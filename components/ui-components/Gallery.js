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
        const { id, sourceUrl, altText } = image;
        return (
          <div key={id} className="flex">
            <Image
              src={sourceUrl}
              alt={altText}
              width="940px"
              height="530px"
              priority={true}
            />
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

    width: 26,
    height: 43,
    position: `absolute`,
    top: 0,
    // '@media only and (min-width: 800px)': {
    //   display: 'block',
    // },
  },
  '.slick-prev': {
    '&:before': {
      content: '""',
      background: 'url(/images/arrow-prev.svg) no-repeat',
      right: -40,
      zIndex: 10,

      // position: 'absolute',
    },
  },
  '.slick-next': {
    right: 0,
    '&:before': {
      content: '""',
      background: 'url(/images/arrow-next.svg) no-repeat',
      right: 20,
      // width: 26,
      // height: 43,
      // position: 'absolute',
      // left: 0,
    },
  },
};
