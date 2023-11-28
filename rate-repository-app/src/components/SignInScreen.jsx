import { Formik } from "formik";
import SignIn from "./SignIn";
import * as yup from "yup"

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
    const onSubmit = values => {
        console.log('Form values:', values);
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