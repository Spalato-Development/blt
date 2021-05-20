import { getApolloClient } from '@wpengine/headless';
import { GET_EXPERIENCE } from 'lib/queries';
import { appGetStaticProps } from 'lib/appGetStaticProps';
import { getNextStaticPaths } from '@wpengine/headless/next';
import { CollapseSection, TravelQuote } from 'components/ui-components';
import { About, Newsletter, PageLayout } from 'components';

const Experience = ({ experienceData = {} }) => {
  const { experience } = experienceData.data || {};
  const {
    title,
    modified,
    commonDataAttributes: { imageGallery, about },
    customDataAttributes: { writer },
  } = experience || {};

  const tabs = [
    { name: 'our review' },
    { name: 'logistics' },
    { name: 'who to go with' },
    { name: 'where to stay' },
    { name: 'map' },
  ];
  return (
    <>
      <PageLayout
        title={title}
        tabs={tabs}
        intro="Best things to do:"
        images={imageGallery}
        sidebar={
          <>
            <Newsletter />
          </>
        }>
        {/* Review */}
        <CollapseSection title="Our review" id="our-review">
          <About
            writer={writer && writer[0]}
            date={modified}
            review={about}
            text="Know someone who would like this place to stay? Why not let them know…"
          />
        </CollapseSection>
      </PageLayout>
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
