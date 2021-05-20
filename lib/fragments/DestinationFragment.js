import { gql } from '@apollo/client';
import {
  ImageFragment,
  TagFragment,
  CategoryFragment,
} from './CommonFragments';
import {
  PlaceToStayListingFragment,
  ExperienceListingFragment,
  ItineraryListingFragment,
  // TourOperatorFragment,
} from 'lib/fragments';

const DestinationListingFragment = gql`
  fragment DestinationListingFragment on Destination {
    title
    uri
    slug
    id

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
      standfirst
      country {
        name
        slug
      }
    }

    customDataAttributes: destinationDataAttributes {
      region
      profile
      bestMonthFrom1
      bestMonthTo1
    }
  }

  ${ImageFragment}
  ${TagFragment}
  ${CategoryFragment}
`;

const DestinationFragment = gql`
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
      experiences {
        ... on Experience {
          ...ExperienceListingFragment
        }
      }
      affiliatedTours {
        ... on Experience {
          ...ExperienceListingFragment
        }
      }
      destinationGuides: destination {
        ... on Destination {
          ...DestinationListingFragment
        }
      }
      itineraries {
        ... on Itinerary {
          # ItineraryListingFragment
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
      }
      tourOperators {
        ... on TourOperator {
          # ...TourOperatorFragment
          title

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
  ${ExperienceListingFragment}
  ${DestinationListingFragment}
`;

export { DestinationListingFragment, DestinationFragment };
