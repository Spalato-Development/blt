import { HEADER_DATA_QUERY, FOOTER_DATA_QUERY } from './queries';
import { getApolloClient } from '@wpengine/headless';

export const appGetStaticProps = async (context) => {
  const client = getApolloClient(context);
  const headerData = await client.query({
    query: HEADER_DATA_QUERY,
  });
  const footerData = await client.query({
    query: FOOTER_DATA_QUERY,
  });

  return {
    headerData,
    footerData,
  };
};

export const getStaticProps = async (context) => {
  const props = await appGetStaticProps(context, {});
  return {
    props,
  };
};
