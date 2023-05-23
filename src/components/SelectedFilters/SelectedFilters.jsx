import PropTypes from 'prop-types';

import { ReactComponent as CrossIcon } from 'images/icons/cross-small.svg';
import styles from './selected-filters.module.scss';

const SelectedFilters = ({ filters, handleReset }) => {
    return (
        <div className={styles.filters}>
            <ul className={styles.filtersList}>
                {filters.map(filter => (
                    <li key={filter}>
                        <button className={styles.selectedBtn} type="button" onClick={() => handleReset(filter)}>
                            <span className={styles.selectedLabel}>{filter}</span>
                            <CrossIcon className={styles.selectedIcon} width={16} height={16} />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

SelectedFilters.propTypes = {
    filters: PropTypes.arrayOf(PropTypes.string),
    handleReset: PropTypes.func.isRequired,
};

export default SelectedFilters;
