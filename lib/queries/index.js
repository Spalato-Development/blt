import { gql } from '@apollo/client';

const HEADER_DATA_QUERY = gql`
  query {
    menu(id: "primary", idType: NAME) {
      menuItems {
        nodes {
          label
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
export { HEADER_DATA_QUERY, FOOTER_DATA_QUERY };
