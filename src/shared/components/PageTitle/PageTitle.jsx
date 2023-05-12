import styles from './page-title.module.scss';

const PageTitle = ({ text }) => {
    return <h1 className={styles.title}>{text}</h1>;
};

export default PageTitle;
