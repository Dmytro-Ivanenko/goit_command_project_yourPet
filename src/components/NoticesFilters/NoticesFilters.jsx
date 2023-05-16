import { useState } from 'react';
import { ReactComponent as FiltersIcon } from 'images/icons/filters.svg';
import { ReactComponent as ChevronUpIcon } from 'images/icons/chevron-up.svg';
import { ReactComponent as ChevronDownIcon } from 'images/icons/chevron-down.svg';

import styles from './notices-filters.module.scss';

const NoticesFilters = ({ onFilter, filters }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [ageOpen, setAgeOpen] = useState(false);
    const [genderOpen, setGenderOpen] = useState(false);

    const handleBtnClick = () => {
        setIsOpen(prevState => !prevState);
    };

    const handleAgeClick = () => {
        setAgeOpen(prevState => !prevState);
    };

    const handleGenderClick = () => {
        setGenderOpen(prevState => !prevState);
    };

    const handleCheckboxChange = e => {
        onFilter(e.target);
    };

    return (
        <div className={styles.wrapper}>
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
                                            name="ageYoung"
                                            value="3-12 m"
                                            checked={filters.includes('3-12 m')}
                                        />
                                        3-12 m
                                    </label>
                                    <label className={styles.label}>
                                        <input
                                            className={styles.input}
                                            onChange={handleCheckboxChange}
                                            type="checkbox"
                                            name="ageMed"
                                            value="1 year"
                                            checked={filters.includes('1 year')}
                                        />
                                        1 year
                                    </label>
                                    <label className={styles.label}>
                                        <input
                                            className={styles.input}
                                            onChange={handleCheckboxChange}
                                            type="checkbox"
                                            name="ageOld"
                                            value="2 years +"
                                            checked={filters.includes('2 years +')}
                                        />
                                        2 year +
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
                                            name="male"
                                            value="male"
                                            checked={filters.includes('male')}
                                        />
                                        male
                                    </label>
                                    <label className={styles.label}>
                                        <input
                                            onChange={handleCheckboxChange}
                                            className={styles.input}
                                            type="checkbox"
                                            name="female"
                                            value="female"
                                            checked={filters.includes('female')}
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
