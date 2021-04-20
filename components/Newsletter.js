import React from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import { Typo } from 'components/ui-components';

export const Newsletter = () => {
  return (
    <div className={clsx('border border-grey2 shadow-section p-3')}>
      <Image src="/images/newsletter-image.png" width="1200px" height="800px" />
      <div className="px-5 pb-5 mt-3">
        <Typo h2 as="h3" className="mb-3 text-center">
          Want one of these?
        </Typo>
        <div className="flex justify-center">
          <Image src="/images/underline.svg" width="111px" height="8px" />
        </div>
      </div>
    </div>
  );
};
