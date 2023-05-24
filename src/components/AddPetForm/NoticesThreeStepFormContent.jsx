import styles from './addPetForm.module.scss';
import { ReactComponent as MaleIcon } from 'images/icons/male.svg';
import { ReactComponent as FemaleIcon } from 'images/icons/female.svg';
import { ReactComponent as PlusIcon } from 'images/icons/photo-plus.svg';

const NoticesThreeStepFormContent = ({ data, setData, fileInputRef }) => {
    // const photoInput = fileInputRef.current;
    const handleChange = e => {
        // console.log('fileInputRef', fileInputRef.current.files[0]);
        const input = e.target.name;
        const value = e.target.value;

        input ? setData(prev => ({ ...prev, [input]: value })) : setData(prev => ({ ...prev, sex: value }));
    };

    const getphotoURL = () => URL.createObjectURL(fileInputRef.current.files[0]);

    return (
        <div className={styles.flexContainer}>
            <div className={styles.sexRadioBtns}>
                <h3 className={styles.radioBtnsTitle}>The sex</h3>
                <label className={styles.sexRadioLabel} style={{ fontWeight: data.sex === 'female' ? '500' : '400' }}>
                    <FemaleIcon
                        className={styles.sexIcon}
                        style={{ stroke: '#F43F5E', fill: data.sex === 'female' ? '#F43F5E' : 'none' }}
                    />
                    <input
                        type="radio"
                        checked={data.sex === 'female'}
                        value="female"
                        onChange={handleChange}
                        className={styles.sexRadioInput}
                    />
                    Female
                </label>
                <label className={styles.sexRadioLabel} style={{ fontWeight: data.sex === 'male' ? '500' : '400' }}>
                    <MaleIcon
                        className={styles.sexIcon}
                        style={{ stroke: '#54ADFF', fill: data.sex === 'male' ? '#54ADFF' : 'none' }}
                    />
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
                        value={data.photo ?? ''}
                        name="photo"
                        alt="pet`s photo"
                        onChange={handleChange}
                        className={styles.photoInput}
                    />
                    {fileInputRef.current?.files[0] && (
                        <img className={styles.photoPreview} src={getphotoURL()} alt="pet preview"></img>
                    )}
                </label>
            </div>
            <div className={styles.inputs}>
                <label className={styles.label}>
                    Location
                    <input
                        type="text"
                        required
                        value={data.location ?? ''}
                        name="location"
                        onChange={handleChange}
                        className={styles.secStepInput}
                        placeholder="Type place of your living"
                    />
                </label>
                {data.option === 'sell' && (
                    <label className={styles.label}>
                        Price
                        <input
                            type="text"
                            required
                            value={data.price ?? ''}
                            name="price"
                            onChange={handleChange}
                            className={styles.textInput}
                            placeholder="How much does your pet cost?"
                        />
                    </label>
                )}
                <label className={styles.label}>
                    Comments
                    <textarea
                        type="text"
                        required
                        value={data.comments ?? ''}
                        name="comments"
                        onChange={handleChange}
                        className={styles.textArea}
                        placeholder="No less than 8 characters is required"
                    />
                </label>
            </div>
        </div>
    );
};
export default NoticesThreeStepFormContent;
