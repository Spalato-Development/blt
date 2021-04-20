import React from 'react';

export const ContentLayout = ({ children, sidebar }) => {
  return (
    <div className="container justify-between block px-5 max-w-big md:px-0 lg:flex">
      <div className="w-full mr-16 lg:w-2/3 xl:w-[940px] mb-7 lg:mb-0 ">
        {children}
      </div>
      <div className="w-full lg:w-1/3  lg:-mt-40 xl:w-[320px] lg:mr-5">
        {sidebar}
      </div>
    </div>
  );
};
