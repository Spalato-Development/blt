import React from 'react';
import clsx from 'clsx';

export const ContentLayout = ({ children, sidebar }) => {
  return (
    <div
      className={clsx(
        'container  px-4 max-w-big 2xl:px-0 ',
        'lg:flex justify-start block',
      )}>
      <div
        className={clsx(
          'w-full  lg:w-2/3 xl:w-[940px ]',
          'mb-7 lg:mb-0 mr-14 xl:ml-14 ',
        )}>
        {children}
      </div>
      <div
        className={clsx('w-full lg:w-1/3 xl:w-[320px] ', 'lg:-mt-40  lg:mr-5')}>
        {sidebar}
      </div>
    </div>
  );
};
