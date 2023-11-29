import { useApolloClient, useMutation } from '@apollo/client';
import { AUTHENTICATE } from '../graphql/mutations';
import useAuthStorage from './useAuthStorage';


const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHENTICATE);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient()

  const signIn = async ({ username, password }) => {
    // call the mutate function here with the right arguments
    const response = await mutate({
        variables: {
          credentials: {
            password,
            username,
          },
        }});
    await authStorage.setAccessToken(response.data.authenticate.accessToken)
    console.log(response)
    apolloClient.resetStore();
    const token = await authStorage.getAccessToken()
    console.log(token, "accesss token")
    return response
  }

  return [signIn, result];

}

export default useSignIn