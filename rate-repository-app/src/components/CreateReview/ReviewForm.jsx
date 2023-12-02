import FormikTextInput from '../FormikTextInput';
import { View, StyleSheet, Pressable } from 'react-native';
import Text from '../Text';
import theme from '../../theme';

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

const ReviewForm = ({ onSubmit }) => {

    return (
    <View style={styles.parentContainer}>
      <FormikTextInput 
        name="ownerName" 
        placeholder="Repository owner name" 
        style={styles.textContainer}/>
      <FormikTextInput 
        name="repositoryName" 
        placeholder="Repository name" 
        style={styles.textContainer}/>
      <FormikTextInput
        name="rating"
        placeholder="Rating between 0 and 100"
        style={styles.textContainer}/>
      <FormikTextInput
        name="text"
        placeholder="Review"
        style={styles.textContainer}
        multiline={true}/>
      <Pressable onPress={onSubmit}>
          <View style={[styles.textContainer, styles.signButton]}>
            <Text style={styles.textColor}>Create a review</Text>
          </View>
      </Pressable>
    </View>
    )
}

export default ReviewForm