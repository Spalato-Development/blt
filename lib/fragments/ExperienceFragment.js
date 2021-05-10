import { gql } from '@apollo/client';

export const ExperienceFragment = gql`
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
      #     id
      #     title
      #     slug
      #     uri
      #     commonDataAttributes {
      #       standfirst
      #     }
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
      # tourOperator {
      #   ... on TourOperator {
      #     id
      #     title
      #     slug
      #     uri
      #     commonDataAttributes {
      #       standfirst
      #     }
      #   }
      # }
      tourSubType
      type
      website
      whenIsIt
      # recommendations {
      #   ... on Experience {
      #     id
      #     title
      #     uri
      #     slug
      #   }
      # }
      # whereToStay {
      #   ... on PlaceToStay {
      #     id
      #     slug
      #     uri
      #     title
      #   }
      # }
      # writer {
      #   ... on Writer {
      #     title
      #     id
      #     slug
      #     uri
      #   }
      # }
    }
  }
`;
