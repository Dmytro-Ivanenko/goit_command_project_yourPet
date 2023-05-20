import styles from './addPetForm.module.scss';

const PetTwoStepFormContent = ({ data, setData }) => {
    const handleChange = e => {
        const input = e.target.name;
        const value = e.target.value;

        setData(prev => ({ ...prev, [input]: value }));
    };

    return (
        <div className={styles.inputs}>
            {data.option !== 'pet' && (
                <label>
                    Title of add
                    <input
                        autoFocus
                        type="text"
                        required
                        value={data.addTitle}
                        name="addTitle"
                        onChange={handleChange}
                    />
                </label>
            )}
            <label>
                Pet's name
                <input
                    autoFocus={data.option !== 'pet' ? false : true}
                    type="text"
                    required
                    value={data.name}
                    name="name"
                    onChange={handleChange}
                />
            </label>
            <label>
                Date of birth
                <input type="text" value={data.birth} required name="birth" onChange={handleChange} />
            </label>
            <label>
                Breed
                <input type="text" value={data.breed} required name="breed" onChange={handleChange} />
            </label>
        </div>
    );
};
export default PetTwoStepFormContent;
