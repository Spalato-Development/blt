import { gql } from '@apollo/client';

const FILTERS_QUERY = gql`
  query {
    options {
      commonFilters {
        filterSet {
          title
          radio
          filters {
            item
          }
        }
      }
    }
  }
`;

export { FILTERS_QUERY };
