import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logIn } from 'redux/auth/operations';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import loginSchema from './Yup';

import styles from './LoginForm.module.scss';

const LoginForm = () => {
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(loginSchema),
    });
    const onSubmit = data => {
        dispatch(logIn(data));
        reset();
    };

    return (
        <div>
            <h2>Login</h2>
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
                    Login
                </button>
                <p className={styles.authScreenNavigation}>
                    Don`t have an account?{' '}
                    <NavLink to="/register" className={styles.authScreenNavigationLink}>
                        Register
                    </NavLink>
                </p>
            </form>
        </div>
    );
};

export default LoginForm;
