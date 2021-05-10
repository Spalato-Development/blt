import { gql } from '@apollo/client';

export const TourOpeatorFragment = gql`
  fragment TourOpeatorFragment on TourOpeator {
    title
  }
`;
