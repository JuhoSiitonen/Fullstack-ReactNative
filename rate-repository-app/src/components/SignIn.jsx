import FormikTextInput from './FormikTextInput';
import { View, StyleSheet, Pressable } from 'react-native';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  textContainer: {
    margin: 10,
    paddingHorizontal: 9,
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
  parentContainer: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
  },
})

const SignIn = ({ onSubmit }) => {
  
  return (
    <View style={styles.parentContainer}>
      <FormikTextInput 
        name="username" 
        placeholder="Username" 
        style={styles.textContainer}/>
      <FormikTextInput 
        name="password" 
        placeholder="Password" 
        secureTextEntry={true}
        style={styles.textContainer}/>
        <Pressable onPress={onSubmit}>
          <View style={[styles.textContainer, styles.signButton]}>
            <Text>Sign-in</Text>
          </View>
        </Pressable>
    </View>
  )
};

export default SignIn;