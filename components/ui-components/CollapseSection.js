import React from 'react';

import { FaChevronRight, FaChevronDown } from 'react-icons/fa';

export const CollapseSection = ({ children }) => {
  return (
    //TODO: remove focus color on click
    <section className="px-6 py-5 bg-white border shadow-section border-grey2">
      <div className="flex items-center cursor-pointer" onClick={onToggle}>
        <h3 className="text-grey5 text-f-36">Title</h3>
      </div>
    </section>
  );
};
