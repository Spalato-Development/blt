import React from 'react';

export const Header = ({ title }) => {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: title }} />
    </div>
  );
};
