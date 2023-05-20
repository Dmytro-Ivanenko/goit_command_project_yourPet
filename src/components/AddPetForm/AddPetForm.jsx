import styles from './addPetForm.module.scss';
import getFormInsideBasedOnStep from './getFormInsideBasedOnStep';
import isBtnDisabled from './isBtnDisabled';
import { useState } from 'react';

const AddPetForm = () => {
    const [step, setStep] = useState(1);
    const [data, setData] = useState({ option: 'pet' });

    const onClick = e => {
        const btn = e.target.innerHTML;

        switch (btn) {
            case 'Next':
                step === 2 ? setStep(3) : setStep(2);
                break;
            case 'Done':
                e.preventDefault();
                console.log('DATA ON SUBMITTTT: ', data);
                break;
            default:
                setStep(1);
        }
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

    return (
        <form className={styles.form} onClick={onClick}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.stepTitleContainer}>
                <span className={styles.spepTitle}>Choose option</span>
                <span className={styles.spepTitle}>Personal details</span>
                <span className={styles.spepTitle}>More info</span>
            </div>
            {getFormInsideBasedOnStep(step, data, setData)}
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
