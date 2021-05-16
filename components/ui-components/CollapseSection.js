import React, { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { FaChevronRight } from 'react-icons/fa';
import { Typo, Number } from 'components';
import clsx from 'clsx';
import { useMediaQuery } from 'beautiful-react-hooks';
import Collapse from '@kunukn/react-collapse';

export const CollapseSection = ({
  children,
  className,
  title,
  number,
  listings,
  ...props
}) => {
  const isDefaultOpen = useMediaQuery('(min-width: 768px)');
  const [open, setOpen] = useState(true);
  useEffect(() => {
    !isDefaultOpen && setOpen(isDefaultOpen);
  }, []);
  return (
    <section
      className={clsx(
        ' py-5 sm:py-8 my-3 sm:my-base2',
        'bg-white border shadow-section border-grey2',
        'transition-max-h duration-500   ease-out',
        { 'px-4 sm:px-7': !listings },
        className,
      )}
      {...props}>
      <>
        <div className={`flex justify-between ${listings && 'px-4 sm:px-7'}`}>
          <div
            role="button"
            className="flex items-center cursor-pointer focus:outline-none"
            onClick={() => setOpen(!open)}>
            <FaChevronRight
              className={clsx(
                'transition duration-500',
                'mr-5',
                'text-lightBlue text-[25px] sm:text-[49px]',
                { 'transform rotate-90': open },
              )}
            />

            <Typo>{title}</Typo>
          </div>
          {number && <Number number={number} />}
        </div>

        <Collapse
          isOpen={open}
          className={`duration-500 ease-in-out transition-height`}>
          <div className={clsx('pt-5')}>
            <Transition
              show={open}
              enter="transition duration-700 ease-out"
              enterFrom="opacity-0  transform -translate-y-4"
              enterTo="opacity-100 transform translate-y-0"
              leave="transition duration-300 ease-out"
              leaveFrom="opacity-100 transform translate-y-0"
              leaveTo="transform opacity-0 -translate-y-4">
              <div className={clsx('overflow-hidden')}>{children}</div>
            </Transition>
          </div>
        </Collapse>
      </>
    </section>
  );
};
