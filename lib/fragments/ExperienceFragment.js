import { gql } from '@apollo/client';
import {
  ImageFragment,
  TagFragment,
  CategoryFragment,
} from './CommonFragments';
import {
  PlaceToStayListingFragment,
  ItineraryListingFragment,
  DestinationListingFragment,
  TourOperatorFragment,
} from 'lib/fragments';

const ExperienceListingFragment = gql`
  fragment ExperienceListingFragment on Experience {
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
    experienceTypes {
      nodes {
        slug
      }
    }
    customDataAttributes: experienceDataAttr {
      address
      city
      duration
      minAge
      isAffiliateTour
      isBucketList
      profile
      priceFrom
      region
      type
      website
      specificDate
      specificDay
      specificMonth
      specificTime
      whenIsIt
      bestMonthFrom1
      bestMonthFrom2
      ageBestSuitedFrom
      whenToDoIt
      gettingThere
    }
  }

  ${ImageFragment}
  ${TagFragment}
  ${CategoryFragment}
`;

const ExperienceFragment = gql`
  fragment ExperienceFragment on Experience {
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
    customDataAttributes: experienceDataAttr {
      activitySubType
      address
      ageBestSuitedFrom
      attractionSubType
      availableMonthFrom1
      availableMonthFrom2
      availableMonthTo1
      availableMonthTo2
      bestMonthFrom1
      bestMonthFrom2
      bestMonthTo1
      bestMonthTo2
      city
      # destination {
      #   ... on Destination {
      #     # ...DestinationListingFragment
      #     title
      #   }
      # }
      duration
      eventSubType
      gettingThere
      isAffiliateTour
      isBucketList
      isGenericRecommendation
      latitudeOfLocation1
      latitudeOfLocation2
      latitudeOfLocation3
      longitudeOfLocation1
      longitudeOfLocation2
      longitudeOfLocation3
      minAge
      nearestAirport1
      nearestAirport2
      priceFrom
      profile
      recurringFrequency
      region
      setting
      specificDate
      specificDay
      specificMonth
      specificTime
      startTime
      suitableFor
      theme
      tourOperator {
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
      tourSubType
      type
      website
      whenIsIt
      recommendations {
        __typename
        ... on Experience {
          # ...ExperienceListingFragment
          title
        }
        ... on PlaceToStay {
          title
        }
      }
      whereToStay {
        ... on PlaceToStay {
          # ...PlaceToStayListingFragment
          title
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
    }
  }
  ${ImageFragment}
  ${TagFragment}
  ${CategoryFragment}
`;

export { ExperienceFragment, ExperienceListingFragment };
