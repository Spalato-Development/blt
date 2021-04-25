import { gql } from '@apollo/client';

const HOME_QUERY = gql`
  query {
    page(id: "home", idType: URI) {
      title
      homeHero {
        title
        topSentences {
          sentence
        }
        image {
          altText
          id
          sourceUrl
        }
      }
      whatWeOffer {
        textBelow
        title
        items {
          content
        }
      }
    }
  }
`;

export { HOME_QUERY };
