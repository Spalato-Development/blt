import { gql } from '@apollo/client';

export const ItineraryFragment = gql`
  fragment ItineraryFragment on Itinerary {
    title
  }
`;
