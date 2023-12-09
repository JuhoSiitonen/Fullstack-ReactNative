import { useQuery } from "@apollo/client"
import { FlatList, View, StyleSheet } from "react-native"
import MyReviewItem from "./MyReviewItem"
import { ME } from '../../graphql/queries';

const styles = StyleSheet.create({
    separator: {
      height: 10,
    },
    itemMargin: {
        marginTop: 10,
      },
  });

const ItemSeparator = () => <View style={styles.separator} />;

const MyReviews = () => {
    const { data, error, loading } = useQuery(ME, {
        fetchPolicy: "cache-and-network",
        variables: {
            includeReviews: true,
        }
    })
    const reviews = data?.me.reviews
    const userReviews = reviews
    ? reviews.edges.map(edge => edge.node)
    : [];

    return (
        <View style={styles.marginTop}>
            <FlatList
            data={userReviews}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({ item }) => <MyReviewItem review={item} />}
            keyExtractor={({ id }) => id}
            />
        </View>
    )
}

export default MyReviews