import React from 'react';
import { IoSearch } from 'react-icons/io5';
import { Button, Number } from 'components/ui-components';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import { useMediaQuery } from 'lib/hooks';

const ResultsNumber = ({ query, results }) => {
  const resultsString = results === 1 ? 'result' : 'results';

  return (
    <div className="flex items-center mt-5">
      <Number number={results} />
      <div className="ml-3 font-bold text-f-26">
        {' '}
        {resultsString} found for '{query}'
      </div>
    </div>
  );
};

export const SearchHead = ({
  className,
  handleSubmitGlobalSearch,
  results,
  query,

  ...props
}) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const isSmall = useMediaQuery('(max-width:639px)');

  return (
    <div
      className={`py-5 bg-veryLightGold md:pl-14 px-5 container max-w-big my-5 ${className}`}
      {...props}>
      <form onSubmit={handleSubmit(handleSubmitGlobalSearch)}>
        <div className="relative w-auto lg:w-[940px]">
          <IoSearch
            className={clsx(
              'hidden sm:block',
              'absolute top-4 left-7',
              'text-f-24 text-grey4',
            )}
          />
          <input
            type="text"
            aria-label="search"
            placeholder={
              !isSmall
                ? 'destinations | experiences | places to stay'
                : 'What are you looking for?'
            }
            className={clsx(
              'w-full h-11 sm:h-[55px]',
              'sm:pl-20',
              'border-none shadow-input placeholder-grey3 font-semibold text-f-18',
            )}
            {...register('globalSearch')}
          />
          <Button
            className={clsx(
              'absolute  right-0 top-0 sm:right-1 sm:top-1',
              'h-11 w-11 sm:h-[47px] sm:w-[135px] !p-0',
            )}
            onClick={handleSubmit(handleSubmitGlobalSearch)}>
            {isSmall ? (
              <IoSearch className={clsx('text-f-24 text-grey4')} />
            ) : (
              'Search'
            )}
          </Button>
        </div>
        {query && <ResultsNumber results={results} query={query} />}
      </form>
    </div>
  );
};
