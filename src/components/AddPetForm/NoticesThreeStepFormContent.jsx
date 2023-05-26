import styles from './addPetForm.module.scss';
import { useEffect, useRef } from 'react';
import { ReactComponent as MaleIcon } from 'images/icons/male.svg';
import { ReactComponent as FemaleIcon } from 'images/icons/female.svg';
import { ReactComponent as PlusIcon } from 'images/icons/photo-plus.svg';

const NoticesThreeStepFormContent = ({ data, setData, fileInputRef, fileRef }) => {
    const firstRender = useRef(true);

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
            return;
        }

        let input = document.querySelector('#photo');
        input.classList.contains('notValidNoticePhoto') && input.classList.remove('notValidNoticePhoto');
    }, [fileRef]);

    const handleChange = e => {
        const input = e.target.name;
        const value = e.target.value;

        input !== 'sex' ? setData(prev => ({ ...prev, [input]: value })) : setData(prev => ({ ...prev, sex: value }));
    };

    const focusHandle = e => {
        let input = document.querySelector(`#${e.target.name}`);
        input.classList.contains('notValid') && input.classList.remove('notValid');
        input.classList.contains('notValidSex') && input.classList.remove('notValidSex');
        input.classList.contains('notValidComment') && input.classList.remove('notValidComment');
    };

    const getphotoURL = () => URL.createObjectURL(fileInputRef.current.files[0]);

    return (
        <div className={styles.flexContainer}>
            <div className={styles.sexRadioBtns}>
                <h3 className={styles.radioBtnsTitle}>The sex</h3>
                <label
                    id="sex"
                    className={styles.sexRadioLabel}
                    style={{ fontWeight: data.sex === 'female' ? '500' : '400' }}
                >
                    <FemaleIcon
                        className={styles.sexIcon}
                        style={{ stroke: '#F43F5E', fill: data.sex === 'female' ? '#F43F5E' : 'none' }}
                    />
                    <input
                        name="sex"
                        type="radio"
                        checked={data.sex === 'female'}
                        value="female"
                        onChange={handleChange}
                        className={styles.sexRadioInput}
                        onFocus={focusHandle}
                    />
                    Female
                </label>
                <label
                    id="sex"
                    className={styles.sexRadioLabel}
                    style={{ fontWeight: data.sex === 'male' ? '500' : '400' }}
                >
                    <MaleIcon
                        className={styles.sexIcon}
                        style={{ stroke: '#54ADFF', fill: data.sex === 'male' ? '#54ADFF' : 'none' }}
                    />
                    <input
                        name="sex"
                        type="radio"
                        checked={data.sex === 'male'}
                        value="male"
                        onChange={handleChange}
                        className={styles.sexRadioInput}
                        onFocus={focusHandle}
                    />
                    Male
                </label>

                <label id="photo" className={styles.photoLabel}>
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
                        onFocus={focusHandle}
                        accept="image/jpeg, image/png, image/webp, image/gif"
                    />
                    {fileInputRef.current?.files[0] && (
                        <img className={styles.photoPreview} src={getphotoURL()} alt="pet preview"></img>
                    )}
                </label>
            </div>
            <div className={styles.inputs}>
                <label id="location" className={styles.label}>
                    Location
                    <input
                        type="text"
                        required
                        value={data.location ?? ''}
                        name="location"
                        onChange={handleChange}
                        className={styles.secStepInput}
                        placeholder="Type place of your living"
                        onFocus={focusHandle}
                    />
                </label>
                {data.option === 'sell' && (
                    <label id="price" className={styles.label}>
                        Price
                        <input
                            type="text"
                            required
                            value={data.price ?? ''}
                            name="price"
                            onChange={handleChange}
                            className={styles.textInput}
                            placeholder="How much does your pet cost?"
                            onFocus={focusHandle}
                        />
                    </label>
                )}
                <label id="comments" className={styles.label}>
                    Comments
                    <textarea
                        type="text"
                        required
                        value={data.comments ?? ''}
                        name="comments"
                        onChange={handleChange}
                        className={styles.textArea}
                        placeholder="Field is required"
                        onFocus={focusHandle}
                    />
                </label>
            </div>
        </div>
    );
};
export default NoticesThreeStepFormContent;
