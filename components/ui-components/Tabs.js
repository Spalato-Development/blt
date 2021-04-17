import React from 'react';
import { Button } from './Buttons';

export const Tabs = ({ tabs = [] }) => {
  return (
    <div className={clsx('flex justify-between')}>
      {tabs?.map((tab) => (
        <Button isTab as="a" key={tab.name} href={`#${tab.name}`}>
          {tab.name}
        </Button>
      ))}
    </div>
  );
};
