import React from 'react';
import {
  IconButton,
  Icon,
  useDisclosure,
  Collapse as Collapsible,
} from '@chakra-ui/react';
import { FaChevronRight, FaChevronDown } from 'react-icons/fa';

export const CollapseSection = ({ children }) => {
  const { isOpen, onToggle } = useDisclosure();
  const icon = isOpen ? <FaChevronRight /> : <FaChevronRight />;

  return (
    //TODO: remove focus color on click
    <section className="px-6 py-5 bg-white border shadow-section border-grey2">
      <div className="flex items-center cursor-pointer" onClick={onToggle}>
        <Icon
          as={FaChevronRight}
          boxSize="39px"
          viewBox="0 0 39 25"
          color="lightBlue"
          mr="5"
        />
        {/* <Icon
          as={isOpen ? <FaChevronDown /> : <FaChevronRight />}
          // aria-label="Open menu item"
          // boxSize="39px"
          color="lightBlue"
        /> */}
        <h3 className="text-grey5 text-f-36">Title</h3>
      </div>
      {<Collapsible in={isOpen}>{children}</Collapsible>}
    </section>
  );
};
