import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
    name: Yup.string()
        .max(30, 'Name should be less than 30 characters.')
        .matches(/^[A-Za-z]+$/, 'Please, enter valid name!'),
    email: Yup.string().matches(/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/, 'Please, enter valid email!'),
    birthday: Yup.string().matches(
        /^(0[1-9]|[12][0-9]|3[01])\.[0-1][0-9]\.(20[0-1][0-9]|19[0-9][0-9])$/,
        'Please, enter valid birthday!'
    ),
    phone: Yup.string().matches(
        /(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?/,
        'Please, enter valid phone number!'
    ),
    city: Yup.string()
        .max(30, 'Please, enter valid city!')
        .matches(/^[A-Za-z]+$/, 'Please, enter valid city!'),
});
