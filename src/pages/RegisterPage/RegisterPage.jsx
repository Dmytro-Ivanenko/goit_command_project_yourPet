import RegisterForm from 'components/RegisterForm/RegisterForm';

import styles from './RegisterPage.module.scss';

const RegisterPage = () => {
    return (
        <div className={styles.formContainer}>
            <RegisterForm />
        </div>
    );
};

export default RegisterPage;
