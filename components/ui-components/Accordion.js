import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';

export const BltAccordion = ({ children, title }) => {
  return (
    <Accordion w="100%" allowToggle bg="white" className="bg-white">
      <AccordionItem>
        <div className="flex">
          <AccordionIcon mr={6} className="mr-7" />
          <AccordionButton bg="white" _hover={{ bg: 'transparent' }}>
            <h3 className="text-grey5 text-f-26 sm:text-f-36">{title}</h3>
          </AccordionButton>
        </div>

        <AccordionPanel>{children}</AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
