import { Formik } from "formik";
import * as yup from "yup"
import { useMutation } from '@apollo/client';
import { CREATE_REVIEW } from "../../graphql/mutations";
import ReviewForm from "./ReviewForm";
import { useNavigate } from "react-router-native";


const validationSchema = yup.object().shape({
    ownerName: yup
      .string()
      .required("Repository owner name is required"),
    repositoryName: yup
      .string()
      .required("Repository name is required"),
    rating: yup
      .number()
      .typeError("Rating must be a number")
      .min(0, "Rating can't be less than zero")
      .max(100, "Rating can't be higher than 100")
      .required("Rating is required"),
    review: yup
      .string(),
  })

const CreateReview = () => {
    const navigate = useNavigate();
    const [mutate, result] = useMutation(CREATE_REVIEW);

    const onSubmit = async ({ 
        ownerName, 
        repositoryName,
        rating,
        text
         }) => {
        
        try {
            const response = await mutate({
                variables: {
                  review: {
                  ownerName,
                  repositoryName,
                  rating: +rating,
                  text
              },
            }})
            navigate(`/repository/${response.data?.createReview.repositoryId}`)
        } catch (error) {
            console.log("error", error)
          }
        };

    return (
        <Formik 
        initialValues={{ 
            ownerName: '', 
            repositoryName: '',
            rating: '',
            text: ''
         }} 
        onSubmit={onSubmit}
        validationSchema={validationSchema}>
        {({ handleSubmit }) => 
          <ReviewForm onSubmit={handleSubmit} />}
    </Formik>
    )
}

export default CreateReview