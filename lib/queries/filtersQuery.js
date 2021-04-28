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
      placeToStayFilters {
        ptsFilterSet {
          filters {
            item
          }
          radio
          title
        }
      }
    }
  }
`;

export { FILTERS_QUERY };
