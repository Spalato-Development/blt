import React from 'react';
import Link from 'next/link';

export const Breadcrumbs = ({ cats }) => {
  console.log('cats', cats);
  return (
    <div>
      <Link href="/">
        <a>HOME</a>
      </Link>
      <span>{'>'}</span>
      {cats?.map((cat, i) => {
        const { name, slug, id } = cat;
        return (
          <div key={id}>
            {i + 1 === cats.length ? (
              <Link href={`/destination/${slug}`}>
                <a>{name}</a>
              </Link>
            ) : (
              <div>{name}</div>
            )}
          </div>
        );
      })}
    </div>
  );
};
