import React, { useState } from 'react';
// import { Transition } from '@headlessui/react';
import { FaChevronRight } from 'react-icons/fa';
import clsx from 'clsx';
import { Collapsible } from 'grommet';

export const CollapseSection = ({ children, className, title, ...props }) => {
  const [open, setOpen] = useState(false);
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

          <h3 className="text-grey5 text-f-36">{title}</h3>
        </div>

        {/* <Transition
          show={open}
          enter="transition duration-700 ease-out"
          enterFrom="opacity-0  transform -translate-y-4"
          enterTo="opacity-100 transform translate-y-0"
          leave="transition duration-300 ease-out"
          leaveFrom="opacity-100 transform translate-y-0"
          leaveTo="transform opacity-0 -translate-y-4"> */}
        <Collapsible open={open}>
          <div className={clsx('pt-5')} static>
            <div className={clsx('pt-5 overflow-hidden')}>{children}</div>
          </div>
        </Collapsible>
        {/* </Transition> */}
      </>
    </section>
  );
};
