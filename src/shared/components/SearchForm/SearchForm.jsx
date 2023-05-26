import { useState } from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as CrossIcon } from 'images/icons/cross-small.svg';
import { ReactComponent as SearchIcon } from 'images/icons/search.svg';

import styles from './search-form.module.scss';

const initialState = {
    query: '',
};

const SearchForm = ({ onSubmit, onClear }) => {
    const [state, setState] = useState({ ...initialState });

    const handleChange = e => {
        const { name, value } = e.target;

        if (!value) {
            handleClear();
            return;
        }

        setState(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleClear = () => {
        setState({ ...initialState });

        onClear({ ...initialState });
    };

    const handleSubmit = e => {
        e.preventDefault();

        if (state.query.trim() === '') {
            setState({ ...initialState });
            return;
        }

        onSubmit({ ...state });
    };

    const { query } = state;

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input
                type="text"
                name="query"
                required
                value={query}
                className={styles.input}
                onChange={handleChange}
                placeholder="Search"
            />

            <button
                type="submit"
                className={query ? `${styles.submitBtn} ${styles.active}` : styles.submitBtn}
                aria-label="submit"
            >
                <SearchIcon className={styles.icon} width={24} height={24} />
            </button>
            {query && (
                <button type="button" className={styles.clearBtn} onClick={handleClear} aria-label="clear">
                    <CrossIcon className={styles.clearBtnIcon} width={24} height={24} />
                </button>
            )}
        </form>
    );
};

SearchForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired,
};

export default SearchForm;
