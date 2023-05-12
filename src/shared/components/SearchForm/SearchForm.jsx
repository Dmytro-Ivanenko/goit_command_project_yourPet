import { useState } from 'react';

import { ReactComponent as CrossIcon } from 'images/icons/cross-small.svg';
import { ReactComponent as SearchIcon } from 'images/icons/search.svg';

import styles from './search-form.module.scss';

const initialState = {
    query: '',
};

const SearchForm = ({ onSubmit }) => {
    const [state, setState] = useState({ ...initialState });

    const handleChange = e => {
        const { name, value } = e.target;

        setState(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleClear = () => {
        setState({ ...initialState });
    };

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit({ ...state });
        setState({ ...initialState });
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

            <button type="submit" className={query ? `${styles.submitBtn} ${styles.active}` : styles.submitBtn}>
                <SearchIcon width={24} height={24} />
            </button>
            {query && (
                <button type="button" className={styles.clearBtn} onClick={handleClear}>
                    <CrossIcon className={styles.clearBtnIcon} width={24} height={24} />
                </button>
            )}
        </form>
    );
};

export default SearchForm;
