import React, { Fragment } from 'react';
import Link from 'next/link';
import { DateFormatter, TitleContent } from 'components';

export const About = ({
  writer = [],
  date,
  text,
  review,
  about,
  orientation,
  culture,
  food,
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
      <TitleContent title="Orientation" content={orientation} />
      <TitleContent title="Culture & Customs" content={culture} />
      <TitleContent title="Food & Drink" content={food} />
      {review?.map((section, i) => {
        const { title, content } = section;
        return <TitleContent key={i} title={title} content={content} />;
      })}

      <div className="mt-12 text-center text-gold text-f-24">{text}</div>
    </Fragment>
  );
};
