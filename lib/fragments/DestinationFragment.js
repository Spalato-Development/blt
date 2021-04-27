import { gql } from '@apollo/client';

export const DestinationFragment = gql`
  fragment DestinationFragment on Destination {
    title
  }
`;
