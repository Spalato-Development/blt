import React from 'react';

export const Awards = ({ awards }) => {
  return (
    <div className="pt-4 pb-8 border bg-[#eaecf2] border-grey-2">
      <h3 className="text-center uppercase text-grey5 font-bold tracking-[3px]">
        As recommended by
        <div className="flex justify-between container max-w-[1100px]  mt-5 ">
          {awards?.map((item, i) => {
            const { logo, url } = item;
            return (
              <div key={i}>
                <img
                  src={logo.sourceUrl}
                  alt={logo.altText}
                  className="w-auto h-12 mx-4"
                />
              </div>
            );
          })}
        </div>
      </h3>
    </div>
  );
};
