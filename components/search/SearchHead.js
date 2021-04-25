import React from 'react';
import { IoSearch } from 'react-icons/io5';
import { Button } from 'components/ui-components';
import clsx from 'clsx';

export const SearchHead = ({ className, ...props }) => {
  return (
    <div
      className={`py-5 bg-veryLightGold pl-14 container max-w-big my-5 ${className}`}
      {...props}>
      <form>
        <div className="relative w-auto lg:w-[940px]">
          <IoSearch className="absolute text-f-24 text-grey4 top-4 left-7" />
          <input
            type="text"
            placeholder="destinations | experiences | places to stay"
            className={clsx(
              'w-full h-[55px]',
              'pl-20',
              'border-none shadow-input placeholder-grey3 font-semibold text-f-18',
            )}
          />
          <Button
            as="input"
            type="submit"
            value="search"
            className="absolute h-[47px] right-1 top-1"
          />
        </div>
      </form>
    </div>
  );
};
