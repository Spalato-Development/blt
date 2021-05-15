import { gql } from '@apollo/client';
import {
  ImageFragment,
  TagFragment,
  CategoryFragment,
} from './CommonFragments';
import { PlaceToStayListingFragment } from './PlaceToStayFragment';

export const DestinationFragment = gql`
  fragment DestinationFragment on Destination {
    title
    uri
    slug
    id
    date
    modified
    featuredImage {
      node {
        ...ImageFragment
      }
    }
    tags {
      nodes {
        ...TagFragment
      }
    }
    entityCategories {
      nodes {
        ...CategoryFragment
      }
    }
    commonDataAttributes {
      about
      standfirst
      continent
      review {
        title
        content
      }
      country {
        name
        slug
      }
      imageGallery {
        ...ImageFragment
      }
    }
    customDataAttributes: destinationDataAttributes {
      bestMonthFrom1
      bestMonthFrom2
      bestMonthTo1
      bestMonthTo2
      culture
      foodDrink
      gettingAround
      gettingThere
      healthSafety
      latitudeOfLocation1
      longitudeOfLocation1
      nearestAirport1
      nearestAirport2
      nearestAirport3
      orientation
      profile
      region
      setting
      whenToGo
      whereToEat
      whereToShop
      whereToStay
      additionalSections {
        title
        content
      }
      writer {
        ... on Writer {
          title
          id
          slug
          uri
        }
      }
      tourOperators {
        ... on TourOperator {
          id
          title
          slug

          commonDataAttributes {
            standfirst
          }
          customDataAttributes: tourOperatorDataAttributes {
            website
          }
          featuredImage {
            node {
              ...ImageFragment
            }
          }
        }
      }
      placesToStay {
        ... on PlaceToStay {
          ...PlaceToStayListingFragment
        }
      }
    }
  }
  ${ImageFragment}
  ${TagFragment}
  ${CategoryFragment}
  ${PlaceToStayListingFragment}
`;
