import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import Constants from 'expo-constants';
import { setContext } from '@apollo/client/link/context';

const apolloURI = Constants.manifest.extra.APOLLO_URI

const httpLink = createHttpLink({
  // Replace the IP address part with your own IP address!
  uri: apolloURI,
});

const createApolloClient = (authStorage) => {
    const authLink = setContext(async (_, { headers }) => {
      try {
        const accessToken = await authStorage.getAccessToken();
        return {
          headers: {
            ...headers,
            authorization: accessToken ? `Bearer ${accessToken}` : '',
          },
        };
      } catch (e) {
        console.log(e);
        return {
          headers,
        };
      }
    });
    return new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache(),
    });
  };

export default createApolloClient;