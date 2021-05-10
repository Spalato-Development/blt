import { gql } from '@apollo/client';
import {
  DestinationFragment,
  ExperienceFragment,
  PlaceToStayFragment,
  RoundUpFragment,
  WriterFragment,
  ItineraryFragment,
  TourOperatorFragment,
} from 'lib/fragments';

const PRIMARY_MENU_QUERY = gql`
  query {
    menu(id: "primary", idType: NAME) {
      menuItems {
        nodes {
          label
          path
          id
          cssClasses
        }
      }
    }
  }
`;

const FOOTER_DATA_QUERY = gql`
  query {
    menu(id: "footer", idType: NAME) {
      menuItems {
        nodes {
          label
          path
          id
        }
      }
    }
    options {
      footerData {
        companyNumber
        facebook
        instagram
        vatNumber
      }
    }
  }
`;

const GET_ALL_ENTITIES = gql`
  query {
    placesToStay {
      nodes {
        ...PlaceToStayFragment
      }
    }
    experiences {
      nodes {
        ...ExperienceFragment
      }
    }
    destinations {
      nodes {
        ...DestinationFragment
      }
    }
    writers {
      nodes {
        ...WriterFragment
      }
    }
    roundUps {
      nodes {
        ...RoundUpFragment
      }
    }
    itineraries {
      nodes {
        ...ItineraryFragment
      }
    }
    # tourOperators {
    #   nodes {
    #     ...TourOperatorFragment
    #   }
    # }
  }
  ${PlaceToStayFragment}
  ${ExperienceFragment}
  ${DestinationFragment}
  ${WriterFragment}
  ${RoundUpFragment}
  ${ItineraryFragment}
`;

export { PRIMARY_MENU_QUERY, FOOTER_DATA_QUERY, GET_ALL_ENTITIES };
