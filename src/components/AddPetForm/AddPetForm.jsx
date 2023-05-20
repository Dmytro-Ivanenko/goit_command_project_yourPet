import styles from './addPetForm.module.scss';
import getFormInsideBasedOnStep from './getFormInsideBasedOnStep';
import isBtnDisabled from './isBtnDisabled';
import React, { useState, useRef } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://petprojectonrendercom.onrender.com/api';

const AddPetForm = () => {
    const fileInputRef = useRef(null);

    const [step, setStep] = useState(1);
    const [data, setData] = useState({ option: 'pet' });

    const onClick = async e => {
        const btn = e.target.innerHTML;
        console.log('BBTTTNNNNN', e.target);
        console.log('STTEEEP', step);
        switch (btn) {
            case 'Next':
                step === 2 ? setStep(3) : setStep(2);
                break;
            case 'Done':
                e.preventDefault();
                console.log('DATA ON SUBMITTTT: ', data);
                // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                // const inputWithFile = fileInputRef.current.files;
                const file = fileInputRef.current.files[0];
                const fileType = fileInputRef.current.files[0].type;
                const fileName = fileInputRef.current.files[0].name;

                // let imageBlob = await new Promise(resolve => fileInputRef.current.toBlob(resolve, fileType));

                let formData = new FormData();
                // formData.append('firstName', 'John');
                formData.append('photo', file, fileName);

                let response = await fetch('https://petprojectonrendercom.onrender.com/api/yourPets/', {
                    method: 'POST',
                    body: formData,
                });
                let result = await response.json();
                alert(result.message);

                // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

                break;
            default:
                return;
        }
        console.log('fileInputRef', fileInputRef.current);
    };

    let title = 'Add pet';
    switch (data.option) {
        case 'sell':
            title = `${title} for sell`;
            break;
        case 'lostFound':
            title = `${title} for lost/found category`;
            break;
        case 'hands':
            title = `${title} for in good hands category`;
            break;
        default:
            title = 'Add pet';
    }

    const submit = async () => {};

    return (
        <form className={styles.form} onClick={onClick}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.stepTitleContainer}>
                <span className={styles.spepTitle}>Choose option</span>
                <span className={styles.spepTitle}>Personal details</span>
                <span className={styles.spepTitle}>More info</span>
            </div>
            {getFormInsideBasedOnStep(step, data, setData, fileInputRef)}
            <div className={styles.buttonsContainer}>
                <button type="button" className={styles.backButton}>
                    Cancel
                </button>

                <button
                    type={data.comments ? 'submit' : 'button'}
                    disabled={isBtnDisabled(step, data)}
                    className={styles.nextButton}
                >
                    {step === 3 ? 'Done' : 'Next'}
                </button>
            </div>
        </form>
    );
};
export default AddPetForm;
