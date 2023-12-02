import { Formik } from "formik";
import { useNavigate } from "react-router-native";
import * as yup from "yup"
import useSignIn from "../hooks/useSignIn";
import { CREATE_USER } from "../graphql/mutations";
import { useMutation } from "@apollo/client";
import SignUp from "./SignUp";
import { Alert } from "react-native";

const validationSchema = yup.object().shape({
    username: yup
      .string()
      .min(5, "username must be more than 5 characters")
      .max(30, "username can be up to 30 characters")
      .required("Username is required"),
    password: yup
      .string()
      .min(5, "Password must be more than 5 characters")
      .max(50, "password can be only up to 50 characters")
      .required("Password is required"),
    passwordConfirmation: yup
      .string()
      .min(5, "Password must be more than 5 characters")
      .max(50, "max 50 characters")
      .required("Password confirmation is required")
      .oneOf([yup.ref("password"), null], "Password confirmation is not the same"),
  })


const SignUpScreen = () => {
    const navigate = useNavigate()
    const [signIn] = useSignIn()
    const [mutate, result] = useMutation(CREATE_USER);


    const onSubmit = async ({ username, password }) => {
        try {
          await mutate({
            variables: {
              user: {
              username,
              password,
          },
        }})
        await signIn({ username, password })
        navigate("/")
        } catch (error) {
          Alert.alert(error.message)
        }
    }

    return (
        <Formik 
        initialValues={{ 
            username: '', 
            password: '',
            passwordConfirmation: '',
         }} 
        onSubmit={onSubmit}
        validationSchema={validationSchema}>
        {({ handleSubmit }) => 
          <SignUp onSubmit={handleSubmit} />}
    </Formik>
    )
}

export default SignUpScreen