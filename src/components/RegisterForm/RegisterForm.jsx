import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { registration } from 'redux/auth/operations';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import registerSchema from './Yup';

import styles from './RegisterForm.module.scss';

const RegisterForm = () => {
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(registerSchema),
    });
    const onSubmit = data => {
        dispatch(registration(data));
        reset();
    };

    return (
        <div>
            <h2>Registration form</h2>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <label>
                    <input placeholder="Email" {...register('email')} />
                    {errors.email && <p className={styles.errorsMassage}>{errors.email.message}</p>}
                </label>
                <label>
                    <input placeholder="Password" {...register('password')} />
                    {errors.password && <p className={styles.errorsMassage}>{errors.password.message}</p>}
                </label>
                <button className={styles.authBtn} type="submit">
                    Register
                </button>
                <p className={styles.authScreenNavigation}>
                    Have an account? <NavLink to="/login"> LogIn</NavLink>
                </p>
            </form>
        </div>
    );
};

export default RegisterForm;
