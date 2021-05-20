import {
    ApolloLink,
    createHttpLink
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';

const GRAPHQL_URL = `${process.env.NEXT_PUBLIC_WORDPRESS_URL}graphql`

/**
 * Handle errors.
 */
const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors)
        graphQLErrors.forEach(({ message, debugMessage, locations, path }) =>
            console.error(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path} \n\t DebugMessage: ${debugMessage} \n\n`,
            ),
        );
    if (networkError) console.error(`[Network error]: ${networkError}`);
    return forward(operation)
});

/**
 * Handle HTTP requests.
 */
const httpLink = createHttpLink({
    uri: GRAPHQL_URL,
});


export const link = ApolloLink.from([
    errorLink,
    httpLink
]);