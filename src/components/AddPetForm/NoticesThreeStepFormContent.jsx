import styles from './addPetForm.module.scss';
import { ReactComponent as MaleIcon } from 'images/icons/male.svg';
import { ReactComponent as FemaleIcon } from 'images/icons/female.svg';
import { ReactComponent as PlusIcon } from 'images/icons/photo-plus.svg';

const NoticesThreeStepFormContent = ({ data, setData, fileInputRef }) => {
    const handleChange = e => {
        const input = e.target.name;
        const value = e.target.value;

        input ? setData(prev => ({ ...prev, [input]: value })) : setData(prev => ({ ...prev, sex: value }));
    };

    // console.log(viewPortWidth);
    return (
        <div className={styles.flexContainer}>
            <div className={styles.sexRadioBtns}>
                <h3 className={styles.radioBtnsTitle}>The sex</h3>
                <label className={styles.sexRadioLabel}>
                    <FemaleIcon className={styles.sexIcon} style={{ stroke: '#F43F5E' }} />
                    <input
                        type="radio"
                        checked={data.sex === 'female'}
                        value="female"
                        onChange={handleChange}
                        className={styles.sexRadioInput}
                    />
                    Female
                </label>
                <label className={styles.sexRadioLabel}>
                    <MaleIcon className={styles.sexIcon} style={{ stroke: '#54ADFF' }} />
                    <input
                        type="radio"
                        checked={data.sex === 'male'}
                        value="male"
                        onChange={handleChange}
                        className={styles.sexRadioInput}
                    />
                    Male
                </label>

                <label className={styles.photoLabel}>
                    {window.innerWidth < 768 ? 'Add photo' : 'Load the pet`s image'}
                    <PlusIcon className={styles.photoPlusIcon} />
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
                <label className={styles.label}>
                    Location
                    <input
                        type="text"
                        required
                        value={data.location}
                        name="location"
                        onChange={handleChange}
                        className={styles.secStepInput}
                    />
                </label>
                {data.option === 'sell' && (
                    <label className={styles.label}>
                        Price
                        <input
                            type="text"
                            required
                            value={data.price}
                            name="price"
                            onChange={handleChange}
                            className={styles.secStepInput}
                        />
                    </label>
                )}
                <label className={styles.label}>
                    Comments
                    <input
                        type="text"
                        required
                        value={data.comments}
                        name="comments"
                        onChange={handleChange}
                        className={styles.textInput}
                    />
                </label>
            </div>
        </div>
    );
};
export default NoticesThreeStepFormContent;
