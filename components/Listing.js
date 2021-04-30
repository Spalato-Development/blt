import React from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from 'components';

export const Listing = ({ item, className, ...props }) => {
  const {
    title,
    featuredImage,
    uri,
    entityCategories,
    commonDataAttributes: { standfirst },
  } = item;

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
    <div
      className={clsx('shadow-listing', 'p-2 pr-3 mb-5', 'flex', className)}
      {...props}>
      {img}
      <div className="max-w-[470px]">
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
      <div className="">
        <Link href={uri}>
          <Button as="a" secondary>
            Read our review
          </Button>
        </Link>
      </div>
    </div>
  );
};
