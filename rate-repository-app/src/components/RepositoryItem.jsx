import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';
import RepoOwnerPic from './RepoOwnerPic';
import theme from "../theme"

const styles = StyleSheet.create({
    container: {
      // display: "flex",
      // flexDirection: "column",
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
        // alignContent: "center",
        // marginBottom: 16,
        marginTop: 24,
      },
    parentContainer: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: "white",
      padding: 24,
    },
    text: {
      color: "white",
    },
    itemMargin: {
      marginBottom: 10,
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    flexItem: {
        flexGrow: 1,
        flexShrink: 1,
        marginLeft: 24,
    },
    statisticItem: {
        // marginHorizontal: 16,
        alignItems: "center",
      },
    colorTextSecondary: {
        color: theme.colors.textSecondary,
        marginTop: 6,
    },
})

const RepositoryItem = ({ item }) => {
        
    return (
    <View style={styles.parentContainer}>
        <View style={styles.containerImageAndText}>
            <RepoOwnerPic ownerAvatarUrl={item.ownerAvatarUrl}/>
            <View style={styles.flexItem}>
                <Text fontWeight='bold' style={styles.itemMargin}>{item.fullName}</Text>
                <Text style={styles.itemMargin}>{item.description}</Text>
                <Text style={styles.itemMargin}>{item.language}</Text>
            </View>
        </View>
        <View style={styles.containerStatistics}>
            <View style={styles.statisticItem}>
                <Text fontWeight="bold">{item.stargazersCount}</Text>
                <Text style={styles.colorTextSecondary}>Stars</Text>
            </View>
            <View style={styles.statisticItem}>
                <Text fontWeight="bold">{item.forksCount}</Text>
                <Text style={styles.colorTextSecondary}>Forks</Text>
            </View>
            <View style={styles.statisticItem}>
                <Text fontWeight="bold">{item.reviewCount}</Text>
                <Text style={styles.colorTextSecondary}>Reviews</Text>
            </View>
            <View style={styles.statisticItem}>
                <Text fontWeight="bold"> {item.ratingAverage}</Text>
                <Text style={styles.colorTextSecondary}>Rating</Text>
            </View>
        </View>
    </View>)

}
export default RepositoryItem;