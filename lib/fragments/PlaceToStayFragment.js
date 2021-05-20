import { gql } from '@apollo/client';
import {
  ImageFragment,
  TagFragment,
  CategoryFragment,
} from './CommonFragments';

const PlaceToStayFragment = gql`
  fragment PlaceToStayFragment on PlaceToStay {
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
      review {
        title
        content
      }
      country {
        name
      }
      standfirst
      continent
      country {
        name
        slug
      }
      imageGallery {
        ...ImageFragment
      }
    }
    customDataAttributes: ptsDataAttr {
      destinations {
        ... on Destination {
          title
          id
          slug
        }
      }
      writer {
        ... on Writer {
          title
          id
          slug
          uri
        }
      }

      address
      airportTransfers
      allInclusive
      beach
      brand
      city

      fdFeatures
      latitudeOfLocation1
      longitudeOfLocation1
      nearestAirport1
      nearestAirport2
      otherHotelFacilities
      parking
      pool
      priceCheckingLinks {
        url
        logo {
          altText
          sourceUrl
        }
      }
      pricePerNight
      region
      roomFeatures
      roomForFamilies
      roomType
      selfCatering
      setting
      isSkiHotel
      ski
      standard
      starRating
      website
      timeToAirport
      wifi
      type
      especiallyFor
    }
  }
  ${ImageFragment}
  ${TagFragment}
  ${CategoryFragment}
`;

const PlaceToStayListingFragment = gql`
  fragment PlaceToStayListingFragment on PlaceToStay {
    id
    title
    slug
    uri
    entityCategories {
      nodes {
        ...CategoryFragment
      }
    }
    tags {
      nodes {
        ...TagFragment
      }
    }
    commonDataAttributes {
      standfirst
    }
    customDataAttributes: ptsDataAttr {
      website
      starRating
      region
      city
      priceCheckingLinks {
        url
        logo {
          altText
          sourceUrl
        }
      }
    }
    featuredImage {
      node {
        ...ImageFragment
      }
    }
  }
  ${ImageFragment}
  ${TagFragment}
  ${CategoryFragment}
`;

export { PlaceToStayFragment, PlaceToStayListingFragment };
