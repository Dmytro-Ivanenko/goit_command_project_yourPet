import * as yup from 'yup';

const registerSchema = yup
  .object({
    name: yup.string().min(4).required().trim(),
    email: yup.string().email().required().trim(),
    password: yup.string().min(5).required().trim(),
  })
  .required();

export default registerSchema;
