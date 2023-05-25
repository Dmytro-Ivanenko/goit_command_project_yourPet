import styles from './addPetForm.module.scss';
import React, { useState } from 'react';

// external libraries
import clsx from 'clsx';

const PetTwoStepFormContent = ({ data, setData }) => {
    const [invalids] = useState([]);

    const handleChange = e => {
        const input = e.target.name;
        const value = e.target.value;

        setData(prev => ({ ...prev, [input]: value }));
    };

    const focusHandle = e => {
        let input = document.querySelector(`#${e.target.name}`);
        input.classList.contains('notValid') && input.classList.remove('notValid');
    };

    return (
        <div className={styles.inputs}>
            {' '}
            {data.option !== 'pet' && (
                <label
                    id="addTitle"
                    className={clsx(styles.label, { [styles.invalid]: invalids.includes('addTitle') })}
                >
                    Title of add
                    <input
                        autoFocus
                        type="text"
                        required
                        value={data.addTitle ?? ''}
                        name="addTitle"
                        onChange={handleChange}
                        className={clsx(styles.secStepInput)}
                        placeholder=" Title of add"
                        onFocus={focusHandle}
                    />
                </label>
            )}
            <label id="name" className={clsx(styles.label, { [styles.invalid]: invalids.includes('name') })}>
                Pet's name
                <input
                    autoFocus={data.option !== 'pet' ? false : true}
                    type="text"
                    required
                    value={data.name ?? ''}
                    name="name"
                    onChange={handleChange}
                    className={styles.secStepInput}
                    placeholder="No symbols and no numbers"
                    onFocus={focusHandle}
                />
            </label>
            <label id="birth" className={clsx(styles.label, { [styles.invalid]: invalids.includes('birth') })}>
                Date of birth
                <input
                    type="text"
                    value={data.birth ?? ''}
                    required
                    name="birth"
                    onChange={handleChange}
                    className={styles.secStepInput}
                    placeholder="Format  dd-mm-yyyy"
                    onFocus={focusHandle}
                />
            </label>
            <label id="breed" className={clsx(styles.label, { [styles.invalid]: invalids.includes('breed') })}>
                Breed
                <input
                    type="text"
                    value={data.breed ?? ''}
                    required
                    name="breed"
                    onChange={handleChange}
                    className={styles.secStepInput}
                    placeholder=" Type breed"
                    onFocus={focusHandle}
                />
            </label>
        </div>
    );
};
export default PetTwoStepFormContent;
