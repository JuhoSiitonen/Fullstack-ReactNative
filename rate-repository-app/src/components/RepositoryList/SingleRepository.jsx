import RepositoryItem from "./RepositoryItem"
import { useParams } from "react-router-native";
import { useQuery } from "@apollo/client";
import { SINGLE_REPOSITORY } from "../../graphql/queries";
import Text from "../Text";
import { View } from "react-native";


const SingleRepository = () => {
    let { id } = useParams();
    const repositoryId = id
    const { data, error, loading } = useQuery(SINGLE_REPOSITORY, {
        variables: { repositoryId },
        fetchPolicy: "cache-and-network",
    })

    if (loading) {
        return (
            <View>
              <Text>Loading</Text>
            </View>
        )
    }
    const item = data?.repository

    return (
        <RepositoryItem item={item} single={true}/>
    )
}

export default SingleRepository