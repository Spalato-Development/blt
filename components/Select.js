import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import { FaAngleDown } from 'react-icons/fa';
import clsx from 'clsx';

const items = [
  { name: 'recently added' },
  { name: 'Price: cheapest first' },
  { name: 'Price: expensive first' },
  { name: 'A-Z' },
  { name: 'Z-A' },
];

export const Select = () => {
  const [selected, setSelected] = useState(items[0]);

  return (
    <div className="">
      <Listbox value={selected} onChange={setSelected}>
        {({ open }) => (
          <>
            <div className="relative mt-1">
              <Listbox.Button
                className="relative w-[200px] h-[45px] cursor-default "
                className={clsx(
                  'relative w-[200px] h-[45px] cursor-default',
                  'text-left pl-4',
                  'border-2 border-grey2',
                )}>
                <span className="block truncate">{selected.name}</span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <FaAngleDown
                    className="w-5 h-5 text-lightBlue"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0">
                <Listbox.Options
                  static
                  className={clsx(
                    'absolute w-[200px]',

                    'border-2 border-grey2 border-t-0',
                    'text-base text-left',
                  )}>
                  {items.map((item, itemIdx) => (
                    <Listbox.Option
                      key={itemIdx}
                      className={({ active }) =>
                        `${
                          active
                            ? 'text-amber-900 bg-amber-100'
                            : 'text-gray-900'
                        }
                          cursor-default select-none relative py-2 px-5 pr-4 border-b border-grey2 hover:bg`
                      }
                      value={item}>
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`${
                              selected ? 'font-medium' : 'font-normal'
                            } block truncate`}>
                            {item.name}
                          </span>
                          {selected ? (
                            <span
                              className={`${
                                active ? 'text-amber-600' : 'text-amber-600'
                              }
                                absolute inset-y-0 left-0 flex items-center pl-3`}>
                              <CheckIcon
                                className="w-5 h-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </div>
  );
};
