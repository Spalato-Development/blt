import React from 'react';

export const ContentLayout = ({ children, sidebar }) => {
  return (
    <div className="container justify-center block px-5 md:px-0 xl:flex">
      <div className="w-full mr-16 xl:w-3/4 mb-7 xl:mb-0 max-w-[940px] ">
        {children}
      </div>
      <div className="w-full xl:w-1/3 h-[800px] xl:-mt-32 xl:max-w-[316px]">
        {sidebar}
      </div>
    </div>
  );
};
