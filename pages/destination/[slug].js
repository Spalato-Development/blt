import { getApolloClient } from '@wpengine/headless';
import { GET_DESTINATION } from 'lib/queries';
import { appGetStaticProps } from 'lib/appGetStaticProps';
import { getNextStaticPaths } from '@wpengine/headless/next';
import { CollapseSection } from 'components/ui-components';
import { About, Newsletter, PageLayout } from 'components';

const Destination = ({ destinationData = {} }) => {
  const { destination } = destinationData.data || {};
  console.log('destination', destination);

  const {
    title,
    modified,
    commonDataAttributes: { imageGallery, review },
    customDataAttributes: { writer },
  } = destination;

  const tabs = [
    { name: 'our review' },
    { name: 'experiences' },
    { name: 'where to stay' },
    { name: 'logistics' },
    { name: 'who to go with' },
    { name: 'map' },
  ];
  return (
    <>
      <PageLayout
        title={title}
        tabs={tabs}
        images={imageGallery}
        intro="Best things to do & places to stay in:"
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
            review={review}
            text="Know someone who would like this place to stay? Why not let them know…"
          />
        </CollapseSection>
      </PageLayout>
    </>
  );
};

export default Destination;

export const getStaticProps = async (context) => {
  const client = getApolloClient(context);
  const globalData = await appGetStaticProps(context);
  const destinationData = await client.query({
    query: GET_DESTINATION,
    variables: {
      id: context.params.slug,
    },
    errorPolicy: 'all',
  });

  return {
    props: {
      destinationData,
      globalData,
    },
  };
};

export function getStaticPaths() {
  return getNextStaticPaths();
}
