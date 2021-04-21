import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

export const SearchTabs = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>All</Tab>
        <Tab>Experiences</Tab>
        <Tab>Destinations</Tab>
        <Tab>Places to stay</Tab>
        <Tab>Round ups</Tab>
        <Tab>Itineraries</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <p>one!</p>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
