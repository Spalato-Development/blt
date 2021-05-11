import React, { Fragment } from 'react';
import Link from 'next/link';
import { DateFormatter } from 'components';

export const About = ({ writer = [], date, text, children, ...props }) => {
  console.log('about writer', writer);
  return (
    <Fragment {...props}>
      <div className="justify-between text-f-18 sm:flex md:text-f-22">
        <div>
          Expert travel writer:{' '}
          <Link href={writer?.uri || ''}>
            <a>{writer?.title}</a>
          </Link>
        </div>
        <div>
          Last updated: <DateFormatter date={date} />{' '}
        </div>
      </div>
      <div className="mt-5 mb-12 prose-lg">{children}</div>
      <div className="text-center text-gold text-f-24">{text}</div>
    </Fragment>
  );
};
