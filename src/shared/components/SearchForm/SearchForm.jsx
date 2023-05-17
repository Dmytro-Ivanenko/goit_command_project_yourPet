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

        // Change variation
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
        onSubmit({ ...initialState });
    };

    // Blur variation
    // const handleBlur = e => {
    //     const { value } = e.target;
    //     if (!value) {
    //         handleClear();
    //     }
    // };

    const handleSubmit = e => {
        e.preventDefault();

        if (state.query.trim() === '') {
            // Notification for empty string
            console.log('empty');
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
                // onBlur={handleBlur}
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
