import React from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import { Typo, Checkbox, Button } from 'components/ui-components';

import { FaEnvelope } from 'react-icons/fa';

const EnvelopeInput = ({ placeholder }) => {
  return (
    <div className="relative">
      <FaEnvelope className="absolute w-4 text-grey3 top-4 left-4" />
      <input
        type="email"
        name="email"
        placeholder={placeholder}
        className="w-full h-[45px] border-2 border-grey2 bg-grey1 pl-12"
      />
    </div>
  );
};
const Newsletter = () => {
  return (
    <div className={clsx('border border-grey2 shadow-section bg-white p-3')}>
      <Image
        src="/images/newsletter-image.png"
        width="750px"
        height="500px"
        priority={true}
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

          <EnvelopeInput grey placeholder="Enter your email" />
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

const NewsletterSmall = () => {
  return (
    <div>
      Get a monthly fix of inspiring ideas & exclusive offers:
      <form className="pr-5 mt-5">
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

export { Newsletter, NewsletterSmall, EnvelopeInput };
