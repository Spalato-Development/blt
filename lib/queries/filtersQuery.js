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
      bottomCommonFilters {
        filterSet: bottomFilterSet {
          title
          radio
          hasInput
          filters {
            item
          }
        }
      }
      placeToStayFilters {
        filterSet: ptsFilterSet {
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
