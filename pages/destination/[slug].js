import { getApolloClient } from '@wpengine/headless';
import { GET_DESTINATION } from 'lib/queries';
import { appGetStaticProps } from 'lib/appGetStaticProps';
import { getNextStaticPaths } from '@wpengine/headless/next';
import { CollapseSection, Typo } from 'components/ui-components';
import { About, Newsletter, TitleContent, PageLayout } from 'components';

const Destination = ({ destinationData = {} }) => {
  const { destination } = destinationData.data || {};
  console.log('destination', destination);

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
    },
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
            about={about}
            orientation={orientation}
            culture={culture}
            food={foodDrink}
            review={review}
            text="Know someone who would like this place to stay? Why not let them know…"
          />
        </CollapseSection>
        <CollapseSection title="Travel advice">
          <TitleContent title="When to go" content={whenToGo} />
          <TitleContent title="Getting there and away" content={gettingThere} />
          <TitleContent title="Getting around" content={gettingAround} />
          <TitleContent title="Where to stay" content={whereToStay} />
          <TitleContent title="Where to eat or drink" content={whereToEat} />
          <TitleContent title="Where to shop" content={whereToShop} />
          <TitleContent title="Health & Safety" content={healthSafety} />
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
