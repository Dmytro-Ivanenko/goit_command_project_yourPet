import styles from './addPetForm.module.scss';

const PetThreeStepFormContent = ({ data, setData }) => {
    const handleChange = e => {
        const input = e.target.name;
        const value = e.target.value;

        setData(prev => ({ ...prev, [input]: value }));

        console.log(e.target.value);
    };

    return (
        <div className={styles.inputs}>
            <label>
                Add photo
                <input type="file" required value={data.photo} name="photo" alt="pet`s photo" onChange={handleChange} />
            </label>
            <label>
                Comments
                <input type="text" required value={data.comments} name="comments" onChange={handleChange} />
            </label>
        </div>
    );
};
export default PetThreeStepFormContent;
