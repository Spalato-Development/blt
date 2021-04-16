import { getApolloClient } from '@wpengine/headless';
import { GET_PTS } from 'lib/queries';
import { getNextStaticPaths } from '@wpengine/headless/next';
import { appGetStaticProps } from 'lib/appGetStaticProps';

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
