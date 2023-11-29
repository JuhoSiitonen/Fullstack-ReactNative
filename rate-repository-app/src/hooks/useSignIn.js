import { useMutation } from '@apollo/client';
import { AUTHENTICATE } from '../graphql/mutations';


const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHENTICATE);

  const signIn = async ({ username, password }) => {
    // call the mutate function here with the right arguments
    const response = await mutate({
        variables: {
          credentials: {
            password,
            username,
          },
        }});
    console.log(response)
    return response
  }

  return [signIn, result];

}

export default useSignIn