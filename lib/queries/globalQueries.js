import { gql } from '@apollo/client';

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

export { PRIMARY_MENU_QUERY, FOOTER_DATA_QUERY };
