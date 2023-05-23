import PropTypes from 'prop-types';
import styles from './page-title.module.scss';

const PageTitle = ({ text }) => {
    return <h1 className={styles.title}>{text}</h1>;
};

PageTitle.propTypes = {
    text: PropTypes.string.isRequired,
};

export default PageTitle;
