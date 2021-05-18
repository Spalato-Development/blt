import { gql } from '@apollo/client';
import {
  ImageFragment,
  TagFragment,
  CategoryFragment,
} from './CommonFragments';
import {
  PlaceToStayListingFragment,
  ExperienceListingFragment,
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
        }
      }
    }
  }

  ${PlaceToStayListingFragment}
  ${ExperienceListingFragment}
`;

const ItineraryListingFragment = gql`
  fragment ItineraryListingFragment on Itinerary {
    id
    slug
    title
    uri
    commonDataAttributes {
      standfirst
    }
    customDataAttributes: itineraryDataAttributes {
      duration
      minAge
      whenToDoIt
    }

    featuredImage {
      node {
        ...ImageFragment
      }
    }
  }

  ${ImageFragment}
`;
export { ItineraryFragment, ItineraryListingFragment };
