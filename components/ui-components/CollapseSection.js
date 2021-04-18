import React from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import { FaChevronRight } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';
import clsx from 'clsx';

export const CollapseSection = ({ children, className, title, ...props }) => {
  return (
    <Disclosure>
      {({ open }) => (
        <section
          className={clsx(
            'px-9 py-8 my-base2',
            'bg-white border shadow-section border-grey2',
            'transition-max-h duration-500   ease-out',
            className,
          )}
          {...props}>
          <>
            <Disclosure.Button className="flex items-center cursor-pointer focus:outline-none">
              <FaChevronRight
                className={clsx(
                  'transition duration-500',
                  'mr-5',
                  'text-lightBlue text-[49px]',
                  { 'transform rotate-90': open },
                )}
              />

              <h3 className="text-grey5 text-f-36">{title}</h3>
            </Disclosure.Button>
            <Transition
              show={open}
              enter="transition duration-700 ease-out"
              enterFrom="opacity-0  transform -translate-y-4"
              enterTo="opacity-100 transform translate-y-0"
              leave="transition duration-300 ease-out"
              leaveFrom="opacity-100 transform translate-y-0"
              leaveTo="transform opacity-0 -translate-y-4">
              <Disclosure.Panel className={clsx('pt-5')} static>
                {children}
              </Disclosure.Panel>
            </Transition>
          </>
        </section>
      )}
    </Disclosure>
  );
};
