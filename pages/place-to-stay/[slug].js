import { getApolloClient } from '@wpengine/headless';
import { GET_PTS } from 'lib/queries';
import { appGetStaticProps } from 'lib/appGetStaticProps';
import { getNextStaticPaths } from '@wpengine/headless/next';
import {
  Title,
  Tabs,
  Gallery,
  CollapseSection,
  TravelQuote,
} from 'components/ui-components';
import { About, Price, HotelFeatures, Feature, FeatureRow } from 'components';

const PlaceToStay = ({ ptsData = {} }) => {
  const { placeToStay: pts } = ptsData.data;
  const {
    title,
    date,
    commonDataAttributes: { imageGallery, about, standfirst },
    ptsDataAttr: {
      writer,
      priceCheckingLinks,
      airportTransfers,
      beach,
      roomFeatures,
      fdFeatures,
      otherHotelFacilities,
      pool,
      parking,
      wifi,
      starRating,
    },
  } = pts;
  const hf = otherHotelFacilities?.map((item) => item.toLowerCase());
  const poolFeatures = pool?.map((item) => item.toLowerCase());
  const fd = fdFeatures?.map((item) => item.toLowerCase());

  const tabs = [
    { name: 'our review' },
    { name: 'price' },
    { name: 'key amenities' },
    { name: 'experiences nearby' },
    { name: 'map' },
  ];

  return (
    <>
      <Title
        title={title}
        stars={parseInt(starRating)}
        intro="Recommended place to stay:"
      />
      <div className="container justify-center block px-5 md:px-0 xl:flex">
        <div className="w-full mr-16 xl:w-3/4 mb-7 xl:mb-0 max-w-[940px] ">
          <Tabs tabs={tabs} className="mb-4" />
          <Gallery images={imageGallery} />

          {/* Review */}
          <CollapseSection title="Our review" id="our-review">
            <About
              writer={writer[0]}
              date={date}
              text="Know someone who would like this place to stay? Why not let them know…">
              <div dangerouslySetInnerHTML={{ __html: about }} />
            </About>
          </CollapseSection>

          {/* Price */}
          <CollapseSection title="Price" id="price">
            <Price priceCheckingLinks={priceCheckingLinks} />
          </CollapseSection>

          {/* General Amenities */}
          <CollapseSection title="General amenities" id="key-amenities">
            {/* Key facilities */}
            <HotelFeatures title="Key facilities">
              <FeatureRow>
                <Feature>Airport transfers: {airportTransfers} </Feature>
                <Feature>Beach: {airportTransfers} </Feature>
                <Feature disabled={!hf.includes('creche')}>creche</Feature>
                <Feature disabled={!hf.includes('itness center')}>
                  Fitness centre
                </Feature>
              </FeatureRow>

              <FeatureRow>
                <Feature disabled={!hf.includes('fitness classes')}>
                  Fitness classes
                </Feature>
                <Feature disabled={!hf.includes('golf course')}>
                  Golf course
                </Feature>
                <Feature disabled={!hf.includes('hot tub')}>Hot tub</Feature>
                <Feature>Parking: {parking[0]}</Feature>
              </FeatureRow>

              <FeatureRow>
                <Feature disabled={!poolFeatures.includes('adults only')}>
                  Pool (adults only)
                </Feature>
                <Feature disabled={!poolFeatures.includes('indoor')}>
                  Pool (indoor)
                </Feature>
                <Feature disabled={!poolFeatures.includes('outdoor')}>
                  Pool (outdoor)
                </Feature>
                <Feature disabled={!poolFeatures.includes('kids')}>
                  Pool (kids)
                </Feature>
              </FeatureRow>

              <FeatureRow>
                <Feature disabled={!hf.includes('spa')}>Spa</Feature>
                <Feature disabled={!hf.includes('tennis courts')}>
                  Tennis courts
                </Feature>
                <Feature>WiFi: {wifi}</Feature>
                <Feature disabled={!hf.includes('yoga')}>Yoga</Feature>
              </FeatureRow>
            </HotelFeatures>

            {/* Food and drinks */}
            <HotelFeatures title="Food & drink">
              <FeatureRow>
                <Feature>All inclusive</Feature>
                <Feature disabled={!fd.includes('kids menu')}>
                  Kids menu
                </Feature>
                <Feature disabled={!fd.includes('restaurant on-site')}>
                  Restaurant on-site
                </Feature>
                <Feature>Self catering</Feature>
              </FeatureRow>
            </HotelFeatures>
          </CollapseSection>
        </div>
        <div className="w-full bg-darkBlue xl:w-1/3 h-[800px] xl:-mt-32 xl:max-w-[316px]">
          sidebar
        </div>
      </div>

      {/* Quote */}
      <TravelQuote author="Michael Palin">
        “Once the travel bug bites there is no known antidote, and I know that I
        shall be happily infected until the end of my life”
      </TravelQuote>
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
