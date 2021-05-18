import { getApolloClient } from '@wpengine/headless';
import { GET_DESTINATION } from 'lib/queries';
import { appGetStaticProps } from 'lib/appGetStaticProps';
import { getNextStaticPaths } from '@wpengine/headless/next';
import { CollapseSection, IntroText } from 'components/ui-components';
import {
  About,
  Newsletter,
  TitleContent,
  PageLayout,
  Listing,
} from 'components';

const Destination = ({ destinationData = {} }) => {
  const { destination } = destinationData.data || {};
  console.log('destination!', destination);

  const {
    title,
    modified,
    commonDataAttributes: { imageGallery, review, about },
    customDataAttributes: {
      writer,
      bestMonthFrom1,
      bestMonthFrom2,
      bestMonthTo1,
      bestMonthTo2,
      culture,
      foodDrink,
      gettingAround,
      gettingThere,
      healthSafety,
      latitudeOfLocation1,
      longitudeOfLocation1,
      nearestAirport1,
      nearestAirport2,
      nearestAirport3,
      orientation,
      profile,
      region,
      setting,
      whenToGo,
      whereToEat,
      whereToShop,
      whereToStay,
      additionalSections,
      placesToStay,
      tourOperators,
      experiences,
      affiliatedTours,
      destinationGuides,
    },
  } = destination || {};
  console.log('exp', destinationGuides);

  const bucketListExperiences = experiences?.filter(
    (exp) => exp.customDataAttributes.isBucketList === 'yes',
  );
  const otherExperiences = experiences?.filter(
    (exp) => exp.customDataAttributes.isBucketList === 'no',
  );

  const allExperiences = [
    {
      title: 'Bucket list experiences',
      experiences: bucketListExperiences,
      id: 'experiences',
    },
    { title: 'Other experiences', experiences: otherExperiences },
    { title: 'Destination tickets & tours', experiences: affiliatedTours },
  ];

  const tabs = [
    { name: 'our review' },
    { name: 'experiences' },
    { name: 'where to stay' },
    { name: 'logistics' },
    { name: 'who to go with' },
    { name: 'map' },
  ];
  return (
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
          about={about}
          text="Know someone who would like this place to stay? Why not let them know…">
          <TitleContent title="Orientation" content={orientation} />
          <TitleContent title="Culture & Customs" content={culture} />
          <TitleContent title="Food & Drink" content={foodDrink} />
          {additionalSections?.map((section, i) => {
            const { title, content } = section;
            return <TitleContent key={i} title={title} content={content} />;
          })}
        </About>
      </CollapseSection>

      {/* Experiences */}
      {experiences &&
        allExperiences?.map((exp) => {
          const { title, experiences, id } = exp;
          return (
            <CollapseSection
              title={title}
              number={experiences?.length}
              id={id}
              listings>
              <div className="mt-5">
                {experiences?.map((item) => {
                  return (
                    <Listing
                      item={item}
                      key={item.id}
                      className="mx-4 sm:mx-7"
                    />
                  );
                })}
              </div>
            </CollapseSection>
          );
        })}

      {/* Where to stay */}
      {placesToStay && (
        <CollapseSection
          title="Where to stay"
          number={placesToStay?.length}
          id="where-to-stay"
          listings
          className="">
          <IntroText content={whereToStay} />
          <div className="">
            {placesToStay?.map((item) => {
              return (
                <Listing item={item} key={item.id} className="mx-4 sm:mx-7" />
              );
            })}
          </div>
        </CollapseSection>
      )}

      {/* Travel advice */}
      <CollapseSection title="Travel advice">
        <TitleContent title="When to go" content={whenToGo} />
        <TitleContent title="Getting there and away" content={gettingThere} />
        <TitleContent title="Getting around" content={gettingAround} />

        <TitleContent title="Where to eat or drink" content={whereToEat} />
        <TitleContent title="Where to shop" content={whereToShop} />
        <TitleContent title="Health & Safety" content={healthSafety} />
      </CollapseSection>

      {/* Tour operators */}
      {tourOperators && (
        <CollapseSection
          title="Who to go with: tour operators"
          number={tourOperators?.length}
          id="who-to-go-with"
          listings>
          <div className="mt-5">
            {tourOperators?.map((item) => {
              return (
                <Listing
                  item={item}
                  key={item.id}
                  className="mx-4 sm:mx-7"
                  noBl
                />
              );
            })}
          </div>
        </CollapseSection>
      )}
      {/* Destination guides */}
      {destinationGuides && (
        <CollapseSection
          title="Destination guides"
          number={destinationGuides.length}
          listings>
          <div className="mt-5">
            {destinationGuides?.map((item) => {
              return (
                <Listing
                  item={item}
                  key={item.id}
                  className="mx-4 sm:mx-7"
                  destinationGuide
                  noBl
                />
              );
            })}
          </div>
        </CollapseSection>
      )}
    </PageLayout>
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
