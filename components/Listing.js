import React, { useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { Button, StarIcons, Price } from 'components';
import Collapse from '@kunukn/react-collapse';
import { FaChevronDown } from 'react-icons/fa';

export const Listing = ({
  item = {},
  search,
  noBl,
  className,

  destinationGuide,
  ...props
}) => {
  const [open, setOpen] = useState(false);
  const {
    title,
    featuredImage,
    uri,

    commonDataAttributes: { standfirst, country },
  } = item;

  const {
    starRating,
    priceCheckingLinks,
    website,
    minAge,
    priceFrom,
    duration,
    profile,
    whenIsIt,
    city,
    region,
  } = item.customDataAttributes || {};

  const img = featuredImage ? (
    <Link href={`${uri}`}>
      <a className="mr-5 " css={{ img: { objectFit: 'cover' } }}>
        <div className="flex">
          <Image
            src={featuredImage.node.sourceUrl}
            alt={featuredImage.node.altText}
            width="249px"
            height="166px"
          />
        </div>
      </a>
    </Link>
  ) : (
    <div className="flex items-center justify-center col-span-1 bg-veryLightGold w-[249px] h-[166px] mr-5">
      No Image
    </div>
  );
  return (
    <div className={clsx('shadow-listing', 'p-2 pr-3 mb-5', className)}>
      <div className={clsx('flex justify-between')} {...props}>
        {/* Left: Image */}
        {img}

        {/* Middle: title content stars features */}
        <div
          className={`${
            search ? 'max-w-[470px]' : 'max-w-[385px]'
          } flex flex-col justify-between`}>
          <div>
            <Link href={`${uri}`}>
              <a className="hover:no-underline ">
                <h2 className="font-bold leading-none text-black text-f-24">
                  {title}
                </h2>{' '}
              </a>
            </Link>
            <h3 className="mb-2 text-f-18 text-grey5">
              {city ? city : region ? region : country}
            </h3>
            <div
              dangerouslySetInnerHTML={{ __html: standfirst }}
              className="mr-2 leading-tight prose"
            />
          </div>
          {starRating ? (
            <div>
              <StarIcons stars={parseInt(starRating)} small />
            </div>
          ) : (
            <div className="flex mt-4 text-grey4">
              {minAge !== undefined &&
                `Ages: ${minAge === null ? 0 : minAge}+ ${
                  priceFrom
                    ? ` | Price from: £${priceFrom}`
                    : duration
                    ? ` | Duration: ${duration}`
                    : whenIsIt
                    ? ` | When: ${whenIsIt}`
                    : ''
                }`}
            </div>
          )}
        </div>

        {/* Right: Buttons */}
        <div className="flex flex-col items-end justify-between">
          {/* Add to BL button */}
          {!noBl ? (
            <Button secondary className="w-10 h-10 !p-0">
              <img src="/images/cross.svg" alt="add to bucket list" />
            </Button>
          ) : (
            <div></div>
          )}
          {/* Website or link to profile (read our review) */}
          {profile === 'full' ? (
            <Link href={uri} passHref>
              <Button as="a" secondary>
                {destinationGuide ? 'Read our guide' : 'Read our review'}
              </Button>
            </Link>
          ) : (
            website && (
              <Button
                secondary
                as="a"
                href={website}
                target="_blank"
                rel="noopener noreferrer">
                See Website
              </Button>
            )
          )}
          {/* Price checking links button */}
          {priceCheckingLinks ? (
            <Button
              secondary
              className="leading-none"
              onClick={(e) => {
                e.preventDefault();
                setOpen(!open);
              }}
              css={{
                '&:hover': {
                  svg: { color: 'white' },
                },
              }}>
              Check Prices{' '}
              <FaChevronDown
                className={clsx(
                  'transition duration-500',
                  'ml-3 -mt-1',
                  'text-lightBlue  text-[17px]',
                  { 'transform rotate-180': open },
                )}
              />
            </Button>
          ) : (
            <div></div>
          )}
        </div>
      </div>
      {priceCheckingLinks && (
        <Collapse
          isOpen={open}
          className="duration-500 ease-in-out transition-height">
          <Price
            priceCheckingLinks={priceCheckingLinks}
            website={website}
            className="mt-5"
          />
        </Collapse>
      )}
    </div>
  );
};
