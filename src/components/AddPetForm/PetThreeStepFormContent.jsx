import { useState } from 'react';
import styles from './addPetForm.module.scss';

const PetThreeStepFormContent = ({ getValue }) => {
    const [photo, setphoto] = useState('');
    const [comments, setComments] = useState('');

    const handleChange = e => {
        const input = e.target.name;
        const value = e.target.value;

        input === 'comments' ? setComments(value) : setphoto(value);

        console.log('input Name', e.target.name);
        console.log(e.target.value);
    };

    const handleBlur = () => {
        getValue({ photo, comments });
    };

    return (
        <form className={styles.inputs} onChange={handleChange} onBlur={handleBlur}>
            <label>
                Add photo
                <input type="file" value={photo} name="photo" alt="pet`s photo" />
            </label>
            <label>
                Comments
                <input type="text" value={comments} name="comments" />
            </label>
        </form>
    );
};
export default PetThreeStepFormContent;
