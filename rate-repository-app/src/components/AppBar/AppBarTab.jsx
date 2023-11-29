import { View, StyleSheet, Pressable } from 'react-native';
import Text from '../Text';
import { Link } from "react-router-native";

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
  let pagelink = `/${link}`
  return (<View>
    <Pressable onPress={() => null}>
      <Link to={pagelink}>
        <Text style={styles.tabStyles}>{link}</Text>
      </Link>
    </Pressable>
  </View>);
};

export default AppBarTab;