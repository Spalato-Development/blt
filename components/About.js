import React, { Fragment } from 'react';
import Link from 'next/link';
import { DateFormatter, TitleContent } from 'components';

export const About = ({
  writer = [],
  date,
  text,

  about,

  children,
  ...props
}) => {
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
      <TitleContent content={about} />

      {children}
      <div className="mt-12 text-center text-gold text-f-24">{text}</div>
    </Fragment>
  );
};
