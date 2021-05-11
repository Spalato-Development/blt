import { getApolloClient } from '@wpengine/headless';
import { GET_EXPERIENCE } from 'lib/queries';
import { appGetStaticProps } from 'lib/appGetStaticProps';
import { getNextStaticPaths } from '@wpengine/headless/next';
import {
  Title,
  Tabs,
  Gallery,
  CollapseSection,
  TravelQuote,
  ContentLayout,
} from 'components/ui-components';
import { About, Newsletter } from 'components';

const Experience = ({ experienceData = {} }) => {
  const { experience } = experienceData.data || {};
  const {
    title,
    modified,
    commonDataAttributes: { imageGallery, standfirst, review },
    customDataAttributes: { writer },
  } = experience;

  const tabs = [
    { name: 'our review' },
    { name: 'logistics' },
    { name: 'who to go with' },
    { name: 'where to stay' },
    { name: 'map' },
  ];
  return (
    <>
      <Title title={title} intro="Best things to do:" />
      <ContentLayout
        sidebar={
          <>
            <Newsletter />
          </>
        }>
        <Tabs tabs={tabs} className="mb-4" />
        <Gallery images={imageGallery} />

        {/* Review */}
        <CollapseSection title="Our review" id="our-review">
          <About
            writer={writer && writer[0]}
            date={modified}
            review={review}
            text="Know someone who would like this place to stay? Why not let them know…"></About>
        </CollapseSection>
      </ContentLayout>
    </>
  );
};

export default Experience;

export const getStaticProps = async (context) => {
  const client = getApolloClient(context);
  const globalData = await appGetStaticProps(context);
  const experienceData = await client.query({
    query: GET_EXPERIENCE,
    variables: {
      id: context.params.slug,
    },
    errorPolicy: 'all',
  });

  return {
    props: {
      experienceData,
      globalData,
    },
  };
};

export function getStaticPaths() {
  return getNextStaticPaths();
}
