import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#24292e",
    height: 75,
    justifyContent: "space-around",
    alignItems: "center",
    paddingLeft: 15,
    flexDirection: "row",
  },
  // ...
});

const AppBar = () => {
  return <View style={styles.container}>
    <AppBarTab link={"Repositories"}></AppBarTab>
  </View>;
};

export default AppBar;