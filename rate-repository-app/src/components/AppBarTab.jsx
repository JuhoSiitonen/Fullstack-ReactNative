import { View, StyleSheet, Pressable } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
    tabStyles: {
        color: "white",
        borderRadius: 10,
        marginHorizontal: 10,
        paddingVertical: 10,
    }
  // ...
});

const AppBarTab = ({ link }) => {
  return <View>
    <Pressable onPress={() => null}>
        <Text style={styles.tabStyles}>{link}</Text>
    </Pressable>
  </View>;
};

export default AppBarTab;