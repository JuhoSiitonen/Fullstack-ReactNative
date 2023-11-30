import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import Text from '../Text';
import RepoOwnerPic from './RepoOwnerPic';
import theme from "../../theme"
import StatisticsItem from './StatisticsItem';
import * as Linking from 'expo-linking';

const styles = StyleSheet.create({
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
    flexItem: {
        flexGrow: 1,
        flexShrink: 1,
        marginLeft: 24,
    },
    colorTextSecondary: {
        color: theme.colors.textSecondary,
        marginTop: 6,
    },
    textContainer: {
      margin: 5,
      paddingHorizontal: 5,
      paddingVertical: 3,
      borderWidth: 1,
      borderRadius: 9,
      borderColor: "#b6b6b6",
    },
    signButton: {
      backgroundColor: theme.colors.primary,
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 9,
    },
    textColor: {
      color: "white",
    }
})

const RepositoryItem = ({ item, ...props }) => {
    return (
    <View style={styles.parentContainer} testID="repositoryItem">
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
        {props.single && item.url ? (
          <Pressable onPress={() => Linking.openURL(item.url)}>
            <View style={[styles.textContainer, styles.signButton]}>
              <Text style={styles.textColor}>Open in GitHub</Text>
            </View>
          </Pressable>
        ) : (
          <></>
        )}
    </View>)

}
export default RepositoryItem;