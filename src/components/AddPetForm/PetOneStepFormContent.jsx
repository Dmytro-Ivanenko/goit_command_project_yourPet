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
            <label>
                your pet
                <input type="radio" checked={option === 'pet'} value="pet" onChange={handleChange} />
            </label>
            <label>
                sell
                <input type="radio" checked={option === 'sell'} value="sell" onChange={handleChange} />
            </label>
            <label>
                lost/found
                <input type="radio" checked={option === 'lostFound'} value="lostFound" onChange={handleChange} />
            </label>
            <label>
                in good hands <input type="radio" checked={option === 'hands'} value="hands" onChange={handleChange} />
            </label>
        </div>
    );
};
export default PetOneStepFormContent;
