import { getApolloClient } from '@wpengine/headless';
import { GET_ITINERARY } from 'lib/queries';
import { appGetStaticProps } from 'lib/appGetStaticProps';
import { getNextStaticPaths } from '@wpengine/headless/next';
import clsx from 'clsx';

import {
  About,
  Newsletter,
  TitleContent,
  PageLayout,
  Listing,
  CollapseSection,
  IntroText,
} from 'components';

const Itinerary = ({ itineraryData = {} }) => {
  console.log('data', itineraryData);
  const { itinerary } = itineraryData.data || {};
  const {
    id,
    modified,
    uri,
    title,
    author,
    commonDataAttributes: { about },
    customDataAttributes: { days },
  } = itinerary || {};
  console.log('days', days);
  return (
    <PageLayout
      title={title}
      intro="Recommended itinerary:"
      sidebar={
        <>
          <Newsletter />
        </>
      }>
      <section
        className={clsx(
          'py-5 sm:py-8 my-3 sm:my-base2 px-4 sm:px-7',
          'bg-white border shadow-section border-grey2',
        )}>
        <About
          author={author.node}
          date={modified}
          text="Know someone who would like this itinerary? Why not let them know…"
          about={about}
        />
      </section>
      {days?.map((day, index) => {
        const { about, links } = day;
        console.log('links', links);
        const expLinks = links.filter(
          (link) => link.__typename === 'Experience',
        );
        const ptsLinks = links.filter(
          (link) => link.__typename === 'PlaceToStay',
        );
        return (
          <CollapseSection
            key={index}
            title={`Day ${index + 1}${day.title ? ': ' + day.title : ''}`}
            listings>
            <IntroText content={about} />
            <div>
              {expLinks?.map((item) => {
                return (
                  <Listing item={item} key={item.id} className="mx-4 sm:mx-7" />
                );
              })}
              {ptsLinks?.map((item) => {
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
        );
      })}
    </PageLayout>
  );
};

export default Itinerary;

export const getStaticProps = async (context) => {
  const client = getApolloClient(context);
  const globalData = await appGetStaticProps(context);
  const itineraryData = await client.query({
    query: GET_ITINERARY,
    variables: {
      id: context.params.slug,
    },
    errorPolicy: 'all',
  });

  return {
    props: {
      itineraryData,
      globalData,
    },
  };
};

export function getStaticPaths() {
  return getNextStaticPaths();
}
