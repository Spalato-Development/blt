import { gql } from '@apollo/client';

const ImageFragment = gql`
  fragment ImageFragment on MediaItem {
    altText
    sourceUrl
    id
    caption
    description
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

const AuthorFragment = gql`
  fragment AuthorFragment on User {
    id
    slug
    name
  }
`;

export { ImageFragment, TagFragment, CategoryFragment, AuthorFragment };
