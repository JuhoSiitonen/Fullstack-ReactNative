import { Route, Routes, Navigate } from 'react-router-native';
import { Text, StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList/RepositoryList';
import AppBar from './AppBar';
import SignInScreen from './SignInScreen'
import SingleRepository from './RepositoryList/SingleRepository';
import CreateReview from './CreateReview/CreateReview';
import SignUpScreen from './SignUpScreen';

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
        <Route path="/review" element={<CreateReview/>}/>
        <Route path="/signup" element={<SignUpScreen/>}/>
      </Routes>
    </View>
  );
};

export default Main;