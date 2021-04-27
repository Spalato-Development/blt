import { gql } from '@apollo/client';

export const WriterFragment = gql`
  fragment WriterFragment on Writer {
    title
  }
`;
