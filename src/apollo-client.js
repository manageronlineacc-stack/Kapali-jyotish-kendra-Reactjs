import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.REACT_APP_HYGRAPH_ENDPOINT,
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_HYGRAPH_TOKEN}`,
    },
  }),
  cache: new InMemoryCache(),
});

export default client;
