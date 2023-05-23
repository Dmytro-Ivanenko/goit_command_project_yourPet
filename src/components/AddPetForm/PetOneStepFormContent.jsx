import styles from './addPetForm.module.scss';

const PetOneStepFormContent = ({ data, setData }) => {
    // const handleChange = e => {
    //     getValue({ option: e.target.value });
    //     setChosenOpt(e.target.value);
    // };
    const handleChange = e => {
        const value = e.target.value;
        setData(prev => ({ ...prev, option: value }));
    };
    const { option } = data;
    return (
        <div className={styles.radios}>
            <label className={styles.oneStepRadioLabel}>
                your pet
                <input
                    type="radio"
                    checked={option === 'pet'}
                    value="pet"
                    onChange={handleChange}
                    className={styles.oneStepRadioBtn}
                />
            </label>
            <label className={styles.oneStepRadioLabel}>
                sell
                <input
                    type="radio"
                    checked={option === 'sell'}
                    value="sell"
                    onChange={handleChange}
                    className={styles.oneStepRadioBtn}
                />
            </label>
            <label className={styles.oneStepRadioLabel}>
                lost/found
                <input
                    type="radio"
                    checked={option === 'lostFound'}
                    value="lostFound"
                    onChange={handleChange}
                    className={styles.oneStepRadioBtn}
                />
            </label>
            <label className={styles.oneStepRadioLabel}>
                in good hands{' '}
                <input
                    type="radio"
                    checked={option === 'hands'}
                    value="hands"
                    onChange={handleChange}
                    className={styles.oneStepRadioBtn}
                />
            </label>
        </div>
    );
};
export default PetOneStepFormContent;
