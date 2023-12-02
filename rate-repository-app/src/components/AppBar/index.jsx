import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import useSignOut from '../../hooks/useSignOut';

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
  const { signOut, data, loading, error} = useSignOut()

  return (
  <View style={styles.container}>
    <ScrollView horizontal>
      <AppBarTab link={"Repositories"}></AppBarTab>
      { !loading && data.me ? (
        <>
          <AppBarTab link={"Review"}></AppBarTab>
          <AppBarTab link={"SignOut"} onPress={signOut}></AppBarTab>
        </>
      ) : (
        <>
          <AppBarTab link={"SignIn"}></AppBarTab>
          <AppBarTab link={"SignUp"}></AppBarTab>
        </>
      )}
    </ScrollView>
  </View>);
};

export default AppBar;