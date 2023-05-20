import styles from './addPetForm.module.scss';

const PetThreeStepFormContent = ({ data, setData, fileInputRef }) => {
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
                <input
                    type="file"
                    required
                    value={data.photo}
                    ref={fileInputRef}
                    name="photo"
                    alt="pet`s photo"
                    onChange={handleChange}
                />
            </label>
            <label>
                Comments
                <input type="text" required value={data.comments} name="comments" onChange={handleChange} />
            </label>
        </div>
    );
};
export default PetThreeStepFormContent;
