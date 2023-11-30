import { View, StyleSheet } from "react-native"
import Text from "../Text"
import theme from "../../theme"
import { format } from 'date-fns';

const styles = StyleSheet.create({
    container: {
        marginLeft: 24,
        flexGrow: 1,
        flexShrink: 1,
      },
    containerImageAndText: {
        display: "flex",
        flexDirection: "row",
    },
    containerStatistics: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 15,
        marginLeft: 100,
        alignItems: "center"
      },
    parentContainer: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: "white",
      marginHorizontal: 16,
      padding: 24,
    },
    text: {
      color: "white",
    },
    itemMargin: {
      marginBottom: 10,
    },
    flexItem: {
        flexGrow: 1,
        flexShrink: 1,
        marginLeft: 24,
    },
    colorTextSecondary: {
        color: theme.colors.textSecondary,
        marginTop: 6,
    },
    rating: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: "blue",
        alignItems: "center",
        justifyContent: "center",
        flexGrow: 0,
    },
    ratingColor: {
        color: "blue"
    }
})

const ReviewItem = ({ review }) => {
    const dateObject = new Date(review.createdAt);
    const formattedDate = format(dateObject, 'dd.MM.yyyy');

    return (
        <View style={styles.parentContainer}>
            <View style={styles.containerImageAndText}>
                <View style={[styles.container, styles.flexItem, styles.rating]}>
                    <Text style={styles.ratingColor}>{review.rating}</Text>
                </View>
                <View style={styles.flexItem}>
                    <Text fontWeight='bold' style={styles.itemMargin}>{review.user.username}</Text>
                    <Text>{formattedDate}</Text>
                </View>
            </View>
            <View style={styles.containerStatistics}>
              <Text>{review.text}</Text>
            </View> 
        </View>
    )
}

export default ReviewItem