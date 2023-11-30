import RepositoryItem from "./RepositoryItem"
import ReviewItem from "./ReviewItem";
import { useParams } from "react-router-native";
import { useQuery } from "@apollo/client";
import { SINGLE_REPOSITORY } from "../../graphql/queries";
import Text from "../Text";
import { View, StyleSheet, FlatList } from "react-native";

const styles = StyleSheet.create({
    separator: {
      height: 10,
    },
    itemMargin: {
        marginTop: 10,
      },
  });

const ItemSeparator = () => <View style={styles.separator} />;

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
    const reviews = data?.repository.reviews
    const repositoryReviews = reviews
    ? reviews.edges.map(edge => edge.node)
    : [];

    return (
        <View>
          <RepositoryItem item={item} single={true}/>
          <View style={styles.marginTop}>
            <FlatList
            data={repositoryReviews}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({ item }) => <ReviewItem review={item} />}
            keyExtractor={({ id }) => id}
            />
          </View>
        </View>
    )
}

export default SingleRepository