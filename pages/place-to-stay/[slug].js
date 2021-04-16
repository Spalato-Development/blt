import { getApolloClient } from '@wpengine/headless';
import { GET_PTS } from 'lib/queries';
import { appGetStaticProps } from 'lib/appGetStaticProps';
import { getNextStaticPaths } from '@wpengine/headless/next';
import { Title } from 'components/ui-components';

const PlaceToStay = ({ ptsData = {} }) => {
  const { placeToStay: pts } = ptsData.data;
  const { title } = pts;

  return (
    <>
      <Title title={title} intro="Recommended place to stay:" />
      <div className="container justify-center block px-5 md:px-0 lg:flex">
        <div className="w-full mr-16 bg-darkBlue lg:w-3/4 mb-7 lg:mb-0 h-[800px]">
          main
        </div>
        <div className="w-full bg-darkBlue lg:w-1/3 h-[800px] lg:-mt-32">
          sidebar
        </div>
      </div>
    </>
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
