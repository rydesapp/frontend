import { ApolloClient, InMemoryCache } from "@apollo/client";

const GRAPHQL_ENDPOINT = "http://0.0.0.0:0000/TBD/graphql";

const client = new ApolloClient({
  uri: GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
});

export default client;
