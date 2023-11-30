import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      marginLeft: 24,
      flexGrow: 1,
      flexShrink: 1,
    },
    text: {
      color: "white",
    },
    itemMargin: {
      marginBottom: 4,
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    flexItem: {
        flexGrow: 0,
        borderRadius: 10,
    }
})

const RepoOwnerPic = ({ ownerAvatarUrl }) => {
    return (
        <View style={styles.container}> 
            <Image
            style={[styles.tinyLogo, styles.flexItem]}
            source={{ uri: ownerAvatarUrl }}
            />
        </View>
    )
}

export default RepoOwnerPic