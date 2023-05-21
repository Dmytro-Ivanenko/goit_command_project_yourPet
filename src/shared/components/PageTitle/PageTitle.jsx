import styles from './page-title.module.scss';
import PropTypes from 'prop-types';

const PageTitle = ({ text }) => {
    return <h1 className={styles.title}>{text}</h1>;
};

PageTitle.propTypes = {
    text: PropTypes.string.isRequired,
};

export default PageTitle;
