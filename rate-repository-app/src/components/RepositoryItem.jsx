import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';
import RepoOwnerPic from './RepoOwnerPic';
import theme from "../theme"
import StatisticsItem from './StatisticsItem';

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
        marginTop: 24,
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
            <StatisticsItem digit={item.stargazersCount} text={"Stars"}/>
            <StatisticsItem digit={item.forksCount} text={"Forks"}/>
            <StatisticsItem digit={item.reviewCount} text={"Reviews"}/>
            <StatisticsItem digit={item.ratingAverage} text={"Rating"}/>
        </View>
    </View>)

}
export default RepositoryItem;