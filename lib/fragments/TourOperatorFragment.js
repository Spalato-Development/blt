import { gql } from '@apollo/client';
import { ImageFragment, CategoryFragment } from './CommonFragments';

export const TourOperatorFragment = gql`
  fragment TourOperatorFragment on TourOpeator {
    title
    uri
    slug
    id

    featuredImage {
      node {
        ...ImageFragment
      }
    }

    entityCategories {
      nodes {
        ...CategoryFragment
      }
    }
    commonDataAttributes {
      standfirst
      continent

      country {
        name
        slug
      }
    }
    customDataAttributes: tourOperatorDataAttributes {
      address
      city
      email
      phone
      region
      website
    }
  }
  ${ImageFragment}
  ${CategoryFragment}
`;
