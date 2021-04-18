import { getApolloClient } from '@wpengine/headless';
import { GET_PTS } from 'lib/queries';
import { appGetStaticProps } from 'lib/appGetStaticProps';
import { getNextStaticPaths } from '@wpengine/headless/next';
import {
  Title,
  Tabs,
  Gallery,
  CollapseSection,
} from 'components/ui-components';
import { About, Price } from 'components';

const PlaceToStay = ({ ptsData = {} }) => {
  const { placeToStay: pts } = ptsData.data;
  const {
    title,
    date,
    commonDataAttributes: { imageGallery, about, standfirst },
    ptsDataAttr: { writer, priceCheckingLinks },
  } = pts;
  console.log('price', priceCheckingLinks);

  const tabs = [
    { name: 'our review' },
    { name: 'price' },
    { name: 'key amenities' },
    { name: 'experiences nearby' },
    { name: 'map' },
  ];

  return (
    <>
      <Title title={title} intro="Recommended place to stay:" />
      <div className="container justify-center block px-5 md:px-0 xl:flex">
        <div className="w-full mr-16 lg:w-3/4 mb-7 xl:mb-0 max-w-[940px] ">
          <Tabs tabs={tabs} className="mb-4" />
          <Gallery images={imageGallery} />
          <CollapseSection title="Our review">
            <About
              writer={writer[0]}
              date={date}
              text="Know someone who would like this place to stay? Why not let them know…">
              <div dangerouslySetInnerHTML={{ __html: about }} />
            </About>
          </CollapseSection>
          <CollapseSection title="Price">
            <Price priceCheckingLinks={priceCheckingLinks} />
          </CollapseSection>
        </div>
        <div className="w-full bg-darkBlue xl:w-1/3 h-[800px] xl:-mt-32 xl:max-w-[316px]">
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
