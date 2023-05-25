import styles from './addPetForm.module.scss';
import { useState } from 'react';

// external libraries
import clsx from 'clsx';

const PetTwoStepFormContent = ({ data, setData }) => {
    const [invalids, setInvalids] = useState([]);
    const handleChange = e => {
        const input = e.target.name;
        const value = e.target.value;

        setData(prev => ({ ...prev, [input]: value }));
    };

    const blurHandle = e => {
        console.log(data[e.target.name]);
        !data[e.target.name] && setInvalids(prevNames => [...prevNames, e.target.name]);
    };

    const focushandle = e => {
        invalids.includes(e.target.name) && setInvalids(prevNames => [...prevNames].pop(e.target.name));
    };

    return (
        <div className={styles.inputs}>
            {' '}
            {data.option !== 'pet' && (
                <label className={clsx(styles.label, { [styles.invalid]: invalids.includes('addTitle') })}>
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
                        onBlur={blurHandle}
                        onFocus={focushandle}
                    />
                </label>
            )}
            <label className={clsx(styles.label, { [styles.invalid]: invalids.includes('name') })}>
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
                    onBlur={blurHandle}
                    onFocus={focushandle}
                />
            </label>
            <label className={styles.label}>
                Date of birth
                <input
                    type="text"
                    value={data.birth ?? ''}
                    required
                    name="birth"
                    onChange={handleChange}
                    className={styles.secStepInput}
                    placeholder="Format  dd-mm-yyyy"
                />
            </label>
            <label className={styles.label}>
                Breed
                <input
                    type="text"
                    value={data.breed ?? ''}
                    required
                    name="breed"
                    onChange={handleChange}
                    className={styles.secStepInput}
                    placeholder=" Type breed"
                />
            </label>
        </div>
    );
};
export default PetTwoStepFormContent;
