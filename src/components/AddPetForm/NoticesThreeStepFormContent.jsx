import styles from './addPetForm.module.scss';

const NoticesThreeStepFormContent = ({ data, setData, fileInputRef }) => {
    const handleChange = e => {
        const input = e.target.name;
        const value = e.target.value;

        input ? setData(prev => ({ ...prev, [input]: value })) : setData(prev => ({ ...prev, sex: value }));

        console.log(e.target.value);
    };

    return (
        <div className={styles.flexContainer}>
            <div className={styles.sexRadioBtns}>
                <h3 className={styles.radioBtnsTitle}>The sex</h3>
                <label className={styles.sexRadioLabel}>
                    <input type="radio" checked={data.sex === 'female'} value="female" onChange={handleChange} />
                    Female
                </label>
                <label className={styles.sexRadioLabel}>
                    <input type="radio" checked={data.sex === 'male'} value="male" onChange={handleChange} />
                    Male
                </label>

                <label>
                    Add photo
                    <input
                        type="file"
                        ref={fileInputRef}
                        required
                        value={data.photo}
                        name="photo"
                        alt="pet`s photo"
                        onChange={handleChange}
                        className={styles.photoInput}
                    />
                </label>
            </div>
            <div className={styles.inputs}>
                <label>
                    Location
                    <input
                        type="text"
                        required
                        value={data.location}
                        name="location"
                        onChange={handleChange}
                        className={styles.input}
                    />
                </label>
                {data.option === 'sell' && (
                    <label>
                        Price
                        <input
                            type="text"
                            required
                            value={data.price}
                            name="price"
                            onChange={handleChange}
                            className={styles.input}
                        />
                    </label>
                )}
                <label>
                    Comments
                    <input
                        type="text"
                        required
                        value={data.comments}
                        name="comments"
                        onChange={handleChange}
                        className={styles.input}
                    />
                </label>
            </div>
        </div>
    );
};
export default NoticesThreeStepFormContent;
