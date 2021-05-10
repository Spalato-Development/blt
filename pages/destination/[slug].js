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
  return <h1>destination</h1>;
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
