import { useState } from 'react';
import { ReactComponent as FiltersIcon } from 'images/icons/filters.svg';
import { ReactComponent as ChevronUpIcon } from 'images/icons/chevron-up.svg';
import { ReactComponent as ChevronDownIcon } from 'images/icons/chevron-down.svg';

import styles from './notices-filters.module.scss';

const initialState = {
    ageLow: false,
    ageMed: false,
    ageHigh: false,
    genderFemale: false,
    genderMale: false,
};

const NoticesFilters = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [ageOpen, setAgeOpen] = useState(false);
    const [genderOpen, setGenderOpen] = useState(false);
    const [state, setState] = useState({ ...initialState });

    const handleBtnClick = () => {
        setIsOpen(!isOpen);
    };

    const handleAgeClick = () => {
        setAgeOpen(!ageOpen);
    };

    const handleGenderClick = () => {
        setGenderOpen(!genderOpen);
    };

    const handleCheckboxChange = e => {
        const { name, value, type, checked } = e.target;

        // console.log(e.target);
        setState(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const { ageLow, ageMed, ageHigh, genderFemale, genderMale } = state;

    return (
        <div className={isOpen ? `${styles.wrapper} ${styles.open}` : styles.wrapper}>
            <button className={styles.openBtn} type="button" onClick={handleBtnClick}>
                <span className={styles.openBtnLabel}>Filter</span>
                <FiltersIcon className={styles.openBtnIcon} width={24} height={24} />
            </button>
            {isOpen && (
                <div className={styles.dropdownContainer}>
                    <div className={styles.dropdown}>
                        <p className={styles.text}>Filters</p>
                        <div className={styles.submenu}>
                            <button className={styles.filterBtn} type="button" onClick={handleAgeClick}>
                                {ageOpen ? (
                                    <ChevronUpIcon className={styles.icon} width={24} height={24} />
                                ) : (
                                    <ChevronDownIcon className={styles.icon} width={24} height={24} />
                                )}
                                <span className={styles.btnLabel}>By age</span>
                            </button>
                            {ageOpen && (
                                <form className={styles.form}>
                                    <label className={styles.label}>
                                        <input
                                            onChange={handleCheckboxChange}
                                            className={styles.input}
                                            type="checkbox"
                                            name="ageLow"
                                            checked={ageLow}
                                        />
                                        3-12 m
                                    </label>
                                    <label className={styles.label}>
                                        <input
                                            className={styles.input}
                                            onChange={handleCheckboxChange}
                                            type="checkbox"
                                            name="ageMed"
                                            checked={ageMed}
                                        />
                                        1 year
                                    </label>
                                    <label className={styles.label}>
                                        <input
                                            className={styles.input}
                                            onChange={handleCheckboxChange}
                                            type="checkbox"
                                            name="ageHigh"
                                            checked={ageHigh}
                                        />
                                        2 year
                                    </label>
                                </form>
                            )}
                        </div>
                        <div className={styles.submenu}>
                            <button className={styles.filterBtn} type="button" onClick={handleGenderClick}>
                                {genderOpen ? (
                                    <ChevronUpIcon className={styles.icon} width={24} height={24} />
                                ) : (
                                    <ChevronDownIcon className={styles.icon} width={24} height={24} />
                                )}
                                <span className={styles.btnLabel}>By gender</span>
                            </button>
                            {genderOpen && (
                                <form className={styles.form}>
                                    <label className={styles.label}>
                                        <input
                                            onChange={handleCheckboxChange}
                                            className={styles.input}
                                            type="checkbox"
                                            name="genderMale"
                                            checked={genderMale}
                                        />
                                        male
                                    </label>
                                    <label className={styles.label}>
                                        <input
                                            onChange={handleCheckboxChange}
                                            className={styles.input}
                                            type="checkbox"
                                            name="genderFemale"
                                            checked={genderFemale}
                                        />
                                        female
                                    </label>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NoticesFilters;
