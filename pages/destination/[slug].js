import { getApolloClient } from '@wpengine/headless';
import { GET_DESTINATION } from 'lib/queries';
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

const Destination = ({ destinationData = {} }) => {
  const { destination } = destinationData.data || {};
  console.log('destination', destination);

  const {
    title,
    modified,
    commonDataAttributes: { imageGallery, about, standfirst },
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
      <Title title={title} intro="Best things to do & places to stay in:" />
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
            writer={writer[0]}
            date={modified}
            text="Know someone who would like this place to stay? Why not let them know…">
            <div dangerouslySetInnerHTML={{ __html: about }} />
          </About>
        </CollapseSection>
      </ContentLayout>
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
