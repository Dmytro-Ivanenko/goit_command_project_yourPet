import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logIn } from 'redux/auth/operations';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import loginSchema from './Yup';

// Icons
import { ReactComponent as EyeOpen } from 'images/icons/eye-open.svg';
import { ReactComponent as EyeClosed } from 'images/icons/eye-closed.svg';

import styles from './LoginForm.module.scss';

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false); // стан для показу / приховування пароля

    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        reset,
        watch,
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
            <h2 className={styles.formTitle}>Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.formLabelConteiner}>
                    <label className={styles.formLabel}>
                        <input
                            className={`${styles.formInput} ${errors.email ? styles.error : ''} ${
                                watch('email') && !errors.email ? styles.success : ''
                            }`}
                            placeholder="Email"
                            {...register('email')}
                            type="email"
                        />
                        {errors.email && <p className={styles.errorsMassage}>{errors.email.message}</p>}
                    </label>
                    <label className={styles.formLabel}>
                        <div className={styles.formLabelPasswordConteiner}>
                            <input
                                className={`${styles.formInput} ${errors.password ? styles.error : ''} ${
                                    watch('password') && !errors.password ? styles.success : ''
                                }`}
                                placeholder="Password"
                                {...register('password')}
                                type={showPassword ? 'text' : 'password'} // Встановлюємо тип як "password" або "text", залежно від стану
                            />
                            <button
                                className={styles.showPasswordButton}
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? (
                                    <EyeClosed className={styles.passwordIcon} />
                                ) : (
                                    <EyeOpen className={styles.passwordIcon} />
                                )}
                            </button>
                        </div>
                        {errors.password && <p className={styles.errorsMassage}>{errors.password.message}</p>}
                    </label>
                </div>
                <button className={styles.authBtn} type="submit">
                    Login
                </button>
                <p className={styles.authScreenNavigation}>
                    Don't have an account?&nbsp;
                    <NavLink to="/register" className={styles.authScreenNavigationLink}>
                        Register
                    </NavLink>
                </p>
            </form>
        </div>
    );
};

export default LoginForm;
