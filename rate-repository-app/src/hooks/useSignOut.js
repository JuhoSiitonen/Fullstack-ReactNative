import { useApolloClient, useQuery } from '@apollo/client';
import useAuthStorage from './useAuthStorage';
import { ME } from '../graphql/queries';

const useSignOut = () => {
    const authStorage = useAuthStorage();
    const { data, error, loading } = useQuery(ME)
    const client = useApolloClient()

    const signOut = async () => {
        await authStorage.removeAccessToken()
        client.resetStore()
        console.log("logged out")
    }
    return { signOut, data, error, loading }
}

export default useSignOut