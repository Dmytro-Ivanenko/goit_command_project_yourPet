import { useState } from 'react';
import styles from './addPetForm.module.scss';

const PetOneStepFormContent = ({ getValue }) => {
    const [chosenOpt, setChosenOpt] = useState('pet');

    const handleChange = e => {
        setChosenOpt(e.target.value);
        getValue({ option: e.target.value });
    };

    return (
        <div className={styles.radios} onChange={handleChange}>
            <label>
                your pet
                <input type="radio" checked={chosenOpt === 'pet'} value="pet" />
            </label>
            <label>
                sell
                <input type="radio" checked={chosenOpt === 'sell'} value="sell" />
            </label>
            <label>
                lost/found
                <input type="radio" checked={chosenOpt === 'lostFound'} value="lostFound" />
            </label>
            <label>
                in good hands <input type="radio" checked={chosenOpt === 'hands'} value="hands" />
            </label>
        </div>
    );
};
export default PetOneStepFormContent;
