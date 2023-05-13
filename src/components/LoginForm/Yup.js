import * as yup from 'yup';

const loginSchema = yup
    .object({
        email: yup.string().email().required('Enter a valid Email').trim(),
        password: yup.string().min(5).required().trim(),
    })
    .required();

export default loginSchema;
