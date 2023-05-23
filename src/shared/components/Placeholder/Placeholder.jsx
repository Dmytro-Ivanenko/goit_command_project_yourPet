import styles from './placeholder.module.scss';

const Placeholder = ({ text }) => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.img} />
                <span className={styles.text}>{text}</span>
            </div>
        </div>
    );
};

export default Placeholder;
