import LoginForm from 'components/LoginForm/LoginForm';

import styles from './LoginPage.module.scss';

const LoginPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.subContainer}>
                <LoginForm />
            </div>
        </div>
    );
};

export default LoginPage;
