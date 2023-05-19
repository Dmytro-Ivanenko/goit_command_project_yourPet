import { useState } from 'react';
import styles from './addPetForm.module.scss';

const PetTwoStepFormContent = ({ getValue }) => {
    const [name, setName] = useState('');
    const [birth, setbirth] = useState('');
    const [breed, setBreed] = useState('');

    const handleChange = e => {
        const input = e.target.name;
        const value = e.target.value;

        switch (input) {
            case 'name':
                setName(value);
                break;
            case 'birth':
                setbirth(value);
                break;
            case 'breed':
                setBreed(value);
        }

        // getValue({ option: e.target.value });
        console.log('input Name', e.target.name);
        console.log(e.target.value);
    };

    const handleBlur = () => {
        getValue({ name, birth, breed });
    };

    return (
        <div className={styles.inputs} onChange={handleChange} onBlur={handleBlur}>
            <label>
                Pet's name
                <input autoFocus type="text" value={name} name="name" />
            </label>
            <label>
                Date of birth
                <input type="text" value={birth} name="birth" />
            </label>
            <label>
                Breed
                <input type="text" value={breed} name="breed" />
            </label>
        </div>
    );
};
export default PetTwoStepFormContent;
