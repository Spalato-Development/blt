import { getApolloClient } from '@wpengine/headless';
import { GET_PTS } from 'lib/queries';
import { appGetStaticProps } from 'lib/appGetStaticProps';
import { getNextStaticPaths } from '@wpengine/headless/next';
import { CollapseSection, TravelQuote } from 'components/ui-components';
import {
  About,
  Price,
  HotelFeatures,
  Feature,
  FeatureRow,
  Newsletter,
  PageLayout,
} from 'components';

const PlaceToStay = ({ ptsData = {} }) => {
  const { placeToStay: pts } = ptsData.data || {};
  const {
    title,
    modified,
    entityCategories,
    commonDataAttributes: { imageGallery, about, standfirst, review },
    customDataAttributes: {
      writer,
      priceCheckingLinks,
      airportTransfers,
      beach,
      roomFeatures,
      roomType,
      roomForFamilies,
      fdFeatures,
      allInclusive,
      selfCatering,
      otherHotelFacilities,
      pool,
      parking,
      wifi,
      starRating,
      ski,
      isSkiHotel,
    },
  } = pts;
  const hf = otherHotelFacilities?.map((item) => item.toLowerCase());
  const poolFeatures = pool?.map((item) => item.toLowerCase());
  const fd = fdFeatures?.map((item) => item.toLowerCase());
  console.log('entcat', entityCategories);

  const tabs = [
    { name: 'our review' },
    { name: 'price' },
    { name: 'key amenities' },
    { name: 'experiences nearby' },
    { name: 'map' },
  ];

  return (
    <>
      <PageLayout
        title={title}
        stars={parseInt(starRating)}
        intro="Recommended place to stay:"
        tabs={tabs}
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
            review={review}
            text="Know someone who would like this place to stay? Why not let them know…"
          />
        </CollapseSection>

        {/* Price */}
        {priceCheckingLinks && (
          <CollapseSection title="Price" id="price">
            <Price priceCheckingLinks={priceCheckingLinks} />
          </CollapseSection>
        )}

        {/* General Amenities */}
        <CollapseSection title="General amenities" id="key-amenities">
          {/* Key facilities */}
          <HotelFeatures title="Key facilities">
            <FeatureRow>
              <Feature>Airport transfers: {airportTransfers} </Feature>
              <Feature>Beach: {airportTransfers} </Feature>
              <Feature disabled={!hf.includes('creche')}>creche</Feature>
              <Feature disabled={!hf.includes('fitness center')}>
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
              <Feature
                disabled={allInclusive === 'Not available'}
                optional={allInclusive === 'Optional'}>
                All inclusive
              </Feature>
              <Feature disabled={!fd.includes('kids menu')}>Kids menu</Feature>
              <Feature disabled={!fd.includes('restaurant on-site')}>
                Restaurant on-site
              </Feature>
              <Feature
                disabled={selfCatering === 'Not available'}
                optional={selfCatering === 'Optional'}>
                Self catering
              </Feature>
            </FeatureRow>
          </HotelFeatures>
          {isSkiHotel && (
            <HotelFeatures title="Ski facilities">
              <FeatureRow>
                <Feature disabled={!ski.includes('Ski in ski out')}>
                  Ski in ski out
                </Feature>
                <Feature disabled={!ski.includes('Shuttle to slopes')}>
                  Shuttle to slopes
                </Feature>
                <Feature disabled={!ski.includes('Ski rentals onsite')}>
                  Ski rentals onsite
                </Feature>
              </FeatureRow>
            </HotelFeatures>
          )}
        </CollapseSection>

        {/* Room amenities */}
        <CollapseSection title="Room amenities">
          <HotelFeatures title="Room types">
            <FeatureRow>
              <Feature disabled={!roomType.includes('Apartments')}>
                Apartments
              </Feature>
              <Feature disabled={!roomType.includes('Bedrooms')}>
                Bedrooms
              </Feature>
              <Feature disabled={!roomType.includes('Cabins')}>Cabins</Feature>
              <Feature disabled={!roomType.includes('Suites')}>Suites</Feature>
            </FeatureRow>
            <FeatureRow>
              <Feature disabled={!roomType.includes('Tents')}>Tents</Feature>
              <Feature disabled={!roomType.includes('Villas')}>Villas</Feature>
              <Feature disabled={!roomType.includes('Yurts')}>Yurts</Feature>
            </FeatureRow>
          </HotelFeatures>

          <HotelFeatures title="Room facilities">
            <FeatureRow>
              <Feature disabled={!roomFeatures.includes('Air conditioning')}>
                Air conditioning
              </Feature>
              <Feature disabled={!roomFeatures.includes('Flat screen TV')}>
                Flat screen TV
              </Feature>
              <Feature disabled={!roomFeatures.includes('Jacuzzi')}>
                Jacuzzi (private)
              </Feature>
              <Feature disabled={!roomFeatures.includes('Pool (private')}>
                Pool (private)
              </Feature>
            </FeatureRow>
            <FeatureRow>
              <Feature
                disabled={
                  !roomFeatures.includes('Tea & coffee making facilities')
                }>
                Tea & coffee making facilities
              </Feature>
              <Feature disabled={!roomFeatures.includes('WiFi')}>WiFi</Feature>
            </FeatureRow>
          </HotelFeatures>

          <HotelFeatures title="Family sleeping">
            <FeatureRow>
              <Feature disabled={!roomForFamilies.includes('Connecting rooms')}>
                Connecting rooms
              </Feature>

              <Feature disabled={!roomForFamilies.includes('Family rooms')}>
                Family rooms
              </Feature>
              <Feature disabled={!roomForFamilies.includes('Rollaway beds')}>
                Rollaway beds
              </Feature>
              <Feature
                disabled={!roomForFamilies.includes('Sectionable suites')}>
                Sectionable suites
              </Feature>
            </FeatureRow>
          </HotelFeatures>
        </CollapseSection>
      </PageLayout>

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
    errorPolicy: 'all',
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
