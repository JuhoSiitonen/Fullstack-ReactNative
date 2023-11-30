import { View, StyleSheet } from 'react-native';
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

const AppBarTab = ({ link, ...props}) => {
  let pagelink = `/${link}`
  return (<View>
      <Link to={pagelink}>
        <Text style={styles.tabStyles} {...props}>{link}</Text>
      </Link>
  </View>);
};

export default AppBarTab;