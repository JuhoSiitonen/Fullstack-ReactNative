import { Route, Routes, Navigate } from 'react-router-native';
import { Text, StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList/RepositoryList';
import AppBar from './AppBar';
import SignInScreen from './SignInScreen'
import SingleRepository from './RepositoryList/SingleRepository';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: "#e1e4e8",
     
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar/>
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/signin" element={<SignInScreen />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/repository/:id" element={<SingleRepository/>}/>
      </Routes>
    </View>
  );
};

export default Main;