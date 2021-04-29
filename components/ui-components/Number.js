import React from 'react';
import clsx from 'clsx';

export const Number = ({ number }) => {
  return (
    <div
      className={clsx(
        'text-[34px] font-bold',
        'w-[50px] min-w-[50px] h-[50px] mb-4 mr-4 md:mr-0',
        'flex justify-center items-center',
        'border-3 border-gold',
      )}>
      {number}
    </div>
  );
};
