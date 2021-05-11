import { gql } from '@apollo/client';
import {
  PlaceToStayFragment,
  DestinationFragment,
  ExperienceFragment,
  WriterFragment,
  RoundUpFragment,
  ItineraryFragment,
  TourOperatorFragment,
} from '../fragments';

const GET_PTS = gql`
  query($id: ID!) {
    placeToStay(id: $id, idType: SLUG) {
      ...PlaceToStayFragment
    }
  }
  ${PlaceToStayFragment}
`;

const GET_EXPERIENCE = gql`
  query($id: ID!) {
    experience(id: $id, idType: SLUG) {
      ...ExperienceFragment
    }
  }
  ${ExperienceFragment}
`;

const GET_DESTINATION = gql`
  query($id: ID!) {
    destination(id: $id, idType: SLUG) {
      ...DestinationFragment
    }
  }
  ${DestinationFragment}
`;

const GET_WRITER = gql`
  query($id: ID!) {
    writer(id: $id, idType: SLUG) {
      ...WriterFragment
    }
  }
  ${WriterFragment}
`;

const GET_ROUNDUP = gql`
  query($id: ID!) {
    roundUp(id: $id, idType: SLUG) {
      ...RoundUpFragment
    }
  }
  ${RoundUpFragment}
`;

const GET_ITINERARY = gql`
  query($id: ID!) {
    itinerary(id: $id, idType: SLUG) {
      ...ItineraryFragment
    }
  }
  ${ItineraryFragment}
`;

const GET_TOUROPERATOR = gql`
  query($id: ID!) {
    tourOperator(id: $id, idType: SLUG) {
      ...TourOperatorFragment
    }
  }
  ${TourOperatorFragment}
`;
export {
  GET_PTS,
  GET_EXPERIENCE,
  GET_DESTINATION,
  GET_WRITER,
  GET_ROUNDUP,
  GET_ITINERARY,
  GET_TOUROPERATOR,
};
