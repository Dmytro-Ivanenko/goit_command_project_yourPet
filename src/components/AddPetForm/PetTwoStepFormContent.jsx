import styles from './addPetForm.module.scss';

const PetTwoStepFormContent = ({ data, setData }) => {
    const handleChange = e => {
        const input = e.target.name;
        const value = e.target.value;

        setData(prev => ({ ...prev, [input]: value }));
    };

    return (
        <div className={styles.inputs}>
            {' '}
            {data.option !== 'pet' && (
                <label className={styles.label}>
                    Title of add
                    <input
                        autoFocus
                        type="text"
                        required
                        value={data.addTitle ?? ''}
                        name="addTitle"
                        onChange={handleChange}
                        className={styles.secStepInput}
                        placeholder=" Title of add"
                    />
                </label>
            )}
            <label className={styles.label}>
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
