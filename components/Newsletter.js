import React from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import { Typo, Checkbox, Button } from 'components/ui-components';
import { useMediaQuery } from 'lib/hooks';

import { FaEnvelope } from 'react-icons/fa';

const EnvelopeInput = ({
  placeholder,
  height = 'h-[45px]',
  enveloppeTop = 'top-4',
}) => {
  return (
    <div className="relative">
      <FaEnvelope
        className={`absolute w-4 text-grey3 ${enveloppeTop} left-4`}
      />
      <input
        type="email"
        name="email"
        placeholder={placeholder}
        className={`w-full pl-12 border-2 border-grey2 bg-grey1 ${height}`}
      />
    </div>
  );
};

const EbookCheckboxes = () => {
  return (
    <>
      <Checkbox
        id="ebook"
        label="Our e-book of the top 200 must-do travel experiences"
        className="mb-8"
        large
      />
      <Checkbox
        id="round-up"
        label="A monthly round up of exclusive offers, ideas & inspiration
"
        className="mb-8"
        large
      />
      <Checkbox
        id="reminder"
        label="A reminder every 6 months that we're here"
        className="mb-8"
        large
      />
    </>
  );
};

const EbookImage = ({ priority, width, height, ...props }) => (
  <div {...props}>
    <Image
      src="/images/newsletter-image.png"
      width={width}
      height={height}
      priority={priority}
    />
  </div>
);
const Newsletter = () => {
  const isLarge = useMediaQuery('(min-width: 1024px)');
  return (
    <div className={clsx('border border-grey2 shadow-section bg-white p-3')}>
      <EbookImage
        width={isLarge ? '292px' : '1024px'}
        height={isLarge ? '195px' : '683px'}
        priority={isLarge}
      />
      <div className="px-5 pb-5 mt-3">
        <Typo h2 as="h3" className="mb-3 text-center">
          Want one of these?
        </Typo>
        <div className="flex justify-center mb-4">
          <Image
            src="/images/underline.svg"
            width="111px"
            height="8px"
            priority={true}
          />
        </div>
        <form>
          <EbookCheckboxes />

          <EnvelopeInput
            grey
            height="h-[45px]"
            enveloppeTop="top-4"
            placeholder="Enter your email"
          />
          <Button
            as="input"
            type="submit"
            value="submit"
            className="w-full my-5 h-50px"
          />
        </form>
        <div className="text-sm text-center text-grey3">
          We promise you won’t get any marketing from us other than what you
          specify above
        </div>
      </div>
    </div>
  );
};

const NewsletterHome = () => {
  const isLarge = useMediaQuery('(min-width: 1024px)');
  return (
    <>
      {isLarge ? (
        <div
          className={clsx(
            'container max-w-big',
            'border border-grey2 shadow-section bg-white',
            'px-16 py-12 mt-7 mb-10',
            'lg:flex',
          )}>
          <EbookImage
            width="556px"
            height="371px"
            className="mr-14 max-w-[556px]"
          />
          <div>
            <h3 className="font-light sm:text-[48px]">Want one of these?</h3>
            <div className="flex justify-center mb-4">
              <Image
                src="/images/underline.svg"
                width="111px"
                height="8px"
                priority={true}
              />
            </div>
            <form>
              <EbookCheckboxes />
              <div className="relative">
                <EnvelopeInput
                  grey
                  height="h-[58px]"
                  enveloppeTop="top-[21px]"
                  placeholder="Enter your email"
                />
                <Button
                  as="input"
                  type="submit"
                  value="submit"
                  className={clsx('absolute top-0 right-0', 'w-[131px] h-full')}
                />
              </div>
            </form>
            <div className="mt-4 text-center text-grey3">
              We promise you won’t get any marketing from us other than what you
              specify above
            </div>
          </div>
        </div>
      ) : (
        <Newsletter />
      )}
    </>
  );
};

const NewsletterSmall = () => {
  return (
    <div>
      Get a monthly fix of inspiring ideas & exclusive offers:
      <form className="mt-5">
        <EnvelopeInput placeholder="Enter your email here" />
        <div className="flex justify-end">
          <Button
            as="input"
            type="submit"
            value="Sign up"
            className="h-[45px] mt-6"
          />
        </div>
      </form>
    </div>
  );
};

export { Newsletter, NewsletterSmall, EnvelopeInput, NewsletterHome };
