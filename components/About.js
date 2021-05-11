import React, { Fragment } from 'react';
import Link from 'next/link';
import { DateFormatter } from 'components';

export const About = ({ writer = [], date, text, review, ...props }) => {
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
      {review?.map((section, i) => {
        const { title, content } = section;
        return (
          <Fragment key={i}>
            {title && <h3>{title}</h3>}
            <div
              className="mt-5 mb-12 prose-lg"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </Fragment>
        );
      })}

      <div className="text-center text-gold text-f-24">{text}</div>
    </Fragment>
  );
};
