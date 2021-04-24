import React, { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { FaChevronRight } from 'react-icons/fa';
import { Typo } from 'components/ui-components';
import clsx from 'clsx';
import { useMediaQuery } from 'beautiful-react-hooks';
import Collapse from '@kunukn/react-collapse';

export const CollapseSection = ({ children, className, title, ...props }) => {
  const isDefaultOpen = useMediaQuery('(min-width: 768px)');
  const [open, setOpen] = useState(isDefaultOpen);
  console.log('isDefaultOpen', isDefaultOpen, 'open', open);
  useEffect(() => {
    setOpen(isDefaultOpen);
  }, []);
  return (
    <section
      className={clsx(
        'px-9 py-8 my-base2',
        'bg-white border shadow-section border-grey2',
        'transition-max-h duration-500   ease-out',
        className,
      )}
      {...props}>
      <>
        <div
          role="button"
          className="flex items-center cursor-pointer focus:outline-none"
          onClick={() => setOpen(!open)}>
          <FaChevronRight
            className={clsx(
              'transition duration-500',
              'mr-5',
              'text-lightBlue text-[49px]',
              { 'transform rotate-90': open },
            )}
          />

          <Typo>{title}</Typo>
        </div>

        <Collapse
          isOpen={open}
          className={`duration-500 ease-in-out transition-height`}>
          <div className={clsx('pt-5')}>
            {/* <Transition
              show={open}
              enter="transition duration-700 ease-out"
              enterFrom="opacity-0  transform -translate-y-4"
              enterTo="opacity-100 transform translate-y-0"
              leave="transition duration-300 ease-out"
              leaveFrom="opacity-100 transform translate-y-0"
              leaveTo="transform opacity-0 -translate-y-4"> */}
            <div className={clsx('pt-5 overflow-hidden')}>{children}</div>
            {/* </Transition> */}
          </div>
        </Collapse>
      </>
    </section>
  );
};
