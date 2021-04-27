import { gql } from '@apollo/client';

export const ExperienceFragment = gql`
  fragment ExperienceFragment on Experience {
    title
  }
`;
