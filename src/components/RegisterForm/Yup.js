import * as yup from 'yup';

const registerSchema = yup.object().shape({
    email: yup.string().email().required('Email is required'),
    password1: yup
        .string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters')
        .max(16, 'Password must be at most 16 characters')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,16}$/,
            'Password must contain at least one uppercase letter, one lowercase letter, and one digit'
        ),
    password2: yup
        .string()
        .oneOf([yup.ref('password1'), null], 'Passwords must match')
        .required('Confirm password is required'),
});

export default registerSchema;
