/* import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: `${process.env.BACKEND_URL}/graphql`,
});
const client = new ApolloClient({
  cache,
  link,
});

export default client;
 */
// ./apollo-client.js

import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: `${process.env.BACKEND_URL}/graphql`,
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      fetchPolicy: "no-cache",
    },
  },
});

export default client;
