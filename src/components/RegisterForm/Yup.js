import * as yup from 'yup';

const registerSchema = yup.object().shape({
    email: yup.string().email().required(),
    password1: yup.string().required().min(5, 'Password must be at least 5 characters'),
    // .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{5,}$/),
    password2: yup
        .string()
        .oneOf([yup.ref('password1'), null], 'Passwords must match')
        .required(),
});

export default registerSchema;
