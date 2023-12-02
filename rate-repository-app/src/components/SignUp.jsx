import FormikTextInput from './FormikTextInput';
import { View, StyleSheet, Pressable } from 'react-native';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
    textContainer: {
      margin: 5,
      paddingHorizontal: 5,
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
    textColor: {
      color: "white",
    }
  })

const SignUp = ({ onSubmit }) => {

    return (
        <View style={styles.parentContainer}>
          <FormikTextInput 
            name="username" 
            placeholder="Username" 
            style={styles.textContainer}/>
          <FormikTextInput 
            name="password" 
            placeholder="Password" 
            style={styles.textContainer}/>
          <FormikTextInput
            name="passwordConfirmation"
            placeholder="Password confirmation"
            style={styles.textContainer}/>
          <Pressable onPress={onSubmit}>
              <View style={[styles.textContainer, styles.signButton]}>
                <Text style={styles.textColor}>Sign up</Text>
              </View>
          </Pressable>
        </View>
    )
}

export default SignUp