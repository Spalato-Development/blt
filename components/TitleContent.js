import React, { Fragment } from 'react';
import { Typo } from 'components';

export const TitleContent = ({ title, content, ...props }) => {
  if (!content) {
    return null;
  }
  return (
    <Fragment {...props}>
      {title && (
        <Typo as="h3" h3 className="my-6">
          {title}
        </Typo>
      )}
      <div
        className="mb-5 prose-lg"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </Fragment>
  );
};
