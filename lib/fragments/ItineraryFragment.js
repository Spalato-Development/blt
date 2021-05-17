import { gql } from '@apollo/client';
import {
  ImageFragment,
  TagFragment,
  CategoryFragment,
} from './CommonFragments';
import {
  PlaceToStayListingFragment,
  ExperienceListingFragment,
  DestinationListingFragment,
} from 'lib/fragments';

const ItineraryFragment = gql`
  fragment ItineraryFragment on Itinerary {
    id
    slug
    title
    uri
    modified
    author {
      node {
        name
        slug
      }
    }

    commonDataAttributes {
      about
      standfirst
    }
    customDataAttributes: itineraryDataAttributes {
      days {
        about
        title
        links {
          ... on Experience {
            ...ExperienceListingFragment
          }
          ... on PlaceToStay {
            ...PlaceToStayListingFragment
          }
          ... on Destination {
            ...DestinationListingFragment
          }
        }
      }
    }
  }

  ${PlaceToStayListingFragment}
  ${ExperienceListingFragment}
  ${DestinationListingFragment}
`;

export { ItineraryFragment };
