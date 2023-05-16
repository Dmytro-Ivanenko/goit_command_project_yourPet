import styles from './loader.module.scss';

const Loader = () => {
    return (
        <div className={styles.spinnerLoader}>
            <span className={styles.spinnerLoaderBounceLeft} />
            <span className={styles.spinnerLoaderBounceCenter} />
            <span className={styles.spinnerLoaderBounce} />
        </div>
    );
};

export default Loader;
