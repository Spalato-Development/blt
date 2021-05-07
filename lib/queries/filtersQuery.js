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
      experiencesFilters {
        filterSet: experiencesFilterSet {
          filters {
            item
          }
          radio
          title
        }
      }
      destinationsFilters {
        filterSet: destinationsFilterSet {
          filters {
            item
          }
          radio
          title
        }
      }
      itinerariesFilters {
        filterSet: itinerariesFilterSet {
          filters {
            item
          }
          radio
          title
        }
      }
      roundupsFilters {
        filterSet: roundupsFilterSet {
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
