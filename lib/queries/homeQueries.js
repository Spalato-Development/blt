import { gql } from '@apollo/client';

const HOME_QUERY = gql`
  query {
    page(id: "home", idType: URI) {
      title
      homeHero {
        heroTitle
        topSentences {
          sentence
        }
        heroImage {
          altText
          id
          sourceUrl
        }
      }
      whatWeOffer {
        wwoTextBelow
        wwoTitle
        wwoItems {
          content
        }
      }
    }
  }
`;

export { HOME_QUERY };
