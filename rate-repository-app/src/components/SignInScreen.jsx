import { Formik } from "formik";
import SignIn from "./SignIn";

const SignInScreen = () => {
    const onSubmit = values => {
        console.log('Form values:', values);
        // Add your form submission logic here
      };
    
      return (
        <Formik initialValues={{ username: '', password: '' }} onSubmit={onSubmit}>
          {({ handleSubmit }) => (
            <SignIn onSubmit={handleSubmit} />
          )}
        </Formik>
      );
}

export default SignInScreen;