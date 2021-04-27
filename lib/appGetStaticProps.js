import {
  PRIMARY_MENU_QUERY,
  FOOTER_DATA_QUERY,
  GET_ALL_ENTITIES,
} from './queries';
import { getApolloClient } from '@wpengine/headless';

export const appGetStaticProps = async (context) => {
  const client = getApolloClient(context);
  const primaryMenuData = await client.query({
    query: PRIMARY_MENU_QUERY,
  });
  const footerData = await client.query({
    query: FOOTER_DATA_QUERY,
  });
  const allEntitiesData = await client.query({
    query: GET_ALL_ENTITIES,
  });

  return {
    primaryMenuData,
    footerData,
    allEntitiesData,
  };
};

export const getStaticProps = async (context) => {
  const props = await appGetStaticProps(context, {});
  return {
    props,
  };
};
