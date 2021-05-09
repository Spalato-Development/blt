import React, { useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { Button, StarIcons, Price } from 'components';
import Collapse from '@kunukn/react-collapse';
import { FaChevronDown } from 'react-icons/fa';

export const Listing = ({ item = {}, className, ...props }) => {
  const [open, setOpen] = useState(false);
  const {
    title,
    featuredImage,
    uri,
    entityCategories,
    commonDataAttributes: { standfirst },
  } = item;

  const { starRating, priceCheckingLinks, website } =
    item.customDataAttributes || {};

  const img = featuredImage ? (
    <Link href={`${uri}`}>
      <a className="flex mr-5 ">
        <Image
          src={featuredImage.node.sourceUrl}
          alt={featuredImage.node.altText}
          width="249px"
          height="166px"
        />
      </a>
    </Link>
  ) : (
    <div className="flex items-center justify-center col-span-1 bg-veryLightGold">
      No Image
    </div>
  );
  return (
    <div className={clsx('shadow-listing', 'p-2 pr-3 mb-5', className)}>
      <div className={clsx('flex', className)} {...props}>
        {img}
        <div className="max-w-[470px] flex flex-col justify-between">
          <div>
            <Link href={`${uri}`}>
              <a className="hover:no-underline ">
                <h2 className="font-bold text-black text-f-24">{title}</h2>{' '}
              </a>
            </Link>
            <h3 className="mb-2 text-f-18 text-grey5">
              {entityCategories?.nodes[0]?.name}
            </h3>
            <p>{standfirst}</p>
          </div>
          <div>
            {starRating && <StarIcons stars={parseInt(starRating)} small />}
          </div>
        </div>
        <div className="flex flex-col items-end justify-between">
          <Button secondary className="w-10 h-10 !p-0">
            <img src="/images/cross.svg" alt="add to bucket list" />
          </Button>
          <Link href={uri}>
            <Button as="a" className="hover:no-underline" secondary>
              Read our review
            </Button>
          </Link>
          {priceCheckingLinks && (
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
