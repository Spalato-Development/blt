import { gql } from '@apollo/client';
import { PlaceToStayFragment } from '../fragments';

const GET_PTS = gql`
  query($id: ID!) {
    placeToStay(id: $id, idType: SLUG) {
      ...PlaceToStayFragment
    }
  }
  ${PlaceToStayFragment}
`;

export { GET_PTS };
