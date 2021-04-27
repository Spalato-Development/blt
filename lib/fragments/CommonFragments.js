import { gql } from '@apollo/client';

const ImageFragment = gql`
  fragment ImageFragment on MediaItem {
    altText
    sourceUrl
    id
    caption
  }
`;

const TagFragment = gql`
  fragment TagFragment on Tag {
    id
    slug
    name
  }
`;

const CategoryFragment = gql`
  fragment CategoryFragment on EntityCategory {
    id
    slug
    name
  }
`;

export { ImageFragment, TagFragment, CategoryFragment };
