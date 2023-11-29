import { Formik } from "formik";
import SignIn from "./SignIn";
import * as yup from "yup"
import { useNavigate } from "react-router-native"
import useSignIn from "../hooks/useSignIn"


const validationSchema = yup.object().shape({
    username: yup
      .string()
      .min(3, "Username can't be less than 3 characters")
      .required("Username is required"),
    password: yup
      .string()
      .min(3, "Password can't be less than 3 characters")
      .required("Password is required"),
  })

const SignInScreen = () => {
    const nav = useNavigate()
    const [signIn] = useSignIn()
    const onSubmit = async (values) => {
        const { username, password } = values
        try {
            const result = await signIn({ username, password })
            console.log("result", result.data)
            if (result.data.authenticate.accessToken) {
              nav("/")
            }
          } catch (error) {
            console.log("error", error)
          }
      };
    
      return (
        <Formik 
          initialValues={{ username: '', password: '' }} 
          onSubmit={onSubmit}
          validationSchema={validationSchema}>
          {({ handleSubmit }) => (
            <SignIn onSubmit={handleSubmit} />
          )}
        </Formik>
      );
}

export default SignInScreen;