import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import Text from '../Text';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#24292e",
    height: 120,
    justifyContent: "space-around",
    alignItems: "center",
    paddingLeft: 15,
    flexDirection: "row",
  },
});

const AppBar = () => {
  return (<View style={styles.container}>
    <ScrollView horizontal>
      <AppBarTab link={"Repositories"}></AppBarTab>
      <AppBarTab link={"SignIn"}></AppBarTab>
    </ScrollView>
  </View>);
};

export default AppBar;