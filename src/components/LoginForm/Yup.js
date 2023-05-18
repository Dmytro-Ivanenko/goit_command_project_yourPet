import * as yup from 'yup';

const loginSchema = yup.object().shape({
    email: yup.string().email('Enter a valid Email').required('Email is required').trim(),
    password: yup
        .string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters')
        .max(16, 'Password must be at most 16 characters')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,16}$/,
            'Password must contain at least one uppercase letter, one lowercase letter, and one digit'
        )
        .trim(),
});

export default loginSchema;
