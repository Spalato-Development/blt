import { getApolloClient } from '@wpengine/headless';
import { placeToStayFragment } from '../../lib/fragments';
import { getNextStaticPaths } from '@wpengine/headless/next';
import { appGetStaticProps } from '../../lib/appGetStaticProps';

const GET_PTS = gql`
  query($id: ID!) {
    placeToStay(id: $id, idType: SLUG) {
      ...placeToStayFragment
    }
  }
  ${placeToStayFragment}
`;

const PlaceToStay = ({ ptsData = {} }) => {
  const { placeToStay: pts } = ptsData.data;

  return (
    <div>
      <h1 className="text-xl uppercase text-darkBlue font-script">
        {pts.title}
      </h1>
    </div>
  );
};

export default PlaceToStay;

export const getStaticProps = async (context) => {
  const client = getApolloClient(context);
  const globalData = await appGetStaticProps(context);
  const ptsData = await client.query({
    query: GET_PTS,
    variables: {
      id: context.params.slug,
    },
  });

  return {
    props: {
      ptsData,
      globalData,
    },
  };
};

export function getStaticPaths() {
  return getNextStaticPaths();
}
