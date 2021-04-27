import { gql } from '@apollo/client';
import {
  DestinationFragment,
  ExperienceFragment,
  PlaceToStayFragment,
  RoundUpFragment,
  WriterFragment,
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
  }
  ${PlaceToStayFragment}
`;

export { PRIMARY_MENU_QUERY, FOOTER_DATA_QUERY, GET_ALL_ENTITIES };
