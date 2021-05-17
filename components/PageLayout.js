import React from 'react';
import {
  Title,
  Tabs,
  Gallery,
  ContentLayout,
  BreadCrumbs,
} from 'components/ui-components';

export const PageLayout = ({
  children,
  title,
  stars,
  intro,
  sidebar,
  tabs,
  images,
}) => {
  return (
    <>
      <Title title={title} stars={stars} intro={intro} />
      <ContentLayout sidebar={sidebar}>
        {tabs && <Tabs tabs={tabs} className="mb-4" />}
        {images && <Gallery images={images} />}
        {children}
      </ContentLayout>
    </>
  );
};
