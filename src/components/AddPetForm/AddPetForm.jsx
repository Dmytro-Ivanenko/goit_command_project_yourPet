import styles from './addPetForm.module.scss';
import PetFirstStepFormContent from './PetOneStepFormContent';
import PetTwoStepFormContent from './PetTwoStepFormContent';
import PetThreeStepFormContent from './PetThreeStepFormContent';
import { useState } from 'react';

const AddPetForm = () => {
    const [step, setStep] = useState(1);
    const [data, setData] = useState({ option: 'pet' });
    let btnName = 'Next';

    const onClick = e => {
        const btn = e.target.innerHTML;

        if (btn === 'Next') {
            if (data.name || data.birth || data.breed) {
                setStep(3);
                // btnName = 'Done';
                e.target.type = 'submit';
                return;
            } else if (btn === 'Done') {
                console.log(step);
                // submithandle
            }
            setStep(2);
        }
    };

    const getValue = objWithValues => {
        console.log('objWithValues', objWithValues);
        setData(prevData => ({ ...prevData, ...objWithValues }));
        console.log('DDDAAATTTAA', data);
    };
    let thisStepContent;

    switch (step) {
        case 2:
            thisStepContent = <PetTwoStepFormContent getValue={getValue} />;
            break;
        case 3:
            thisStepContent = <PetThreeStepFormContent getValue={getValue} />;
            break;
        default:
            thisStepContent = <PetFirstStepFormContent getValue={getValue} />;
    }

    const onSubmit = e => {
        e.preventDefault();
        console.log('DATA ON SUBMITTTT: ', data);
    };
    return (
        <form className={styles.form} onClick={onClick} onSummit={onSubmit}>
            <h2 className={styles.title}>Add pet</h2>
            <div className={styles.stepTitleContainer}>
                <span className={styles.spepTitle}>Choose option</span>
                <span className={styles.spepTitle}>Personal details</span>
                <span className={styles.spepTitle}>More info</span>
            </div>
            {thisStepContent}
            <div className={styles.buttonsContainer}>
                <button type="button" className={styles.backButton}>
                    Cancel
                </button>

                <button type="button" className={styles.nextButton}>
                    {btnName}
                </button>
            </div>
        </form>
    );
};
export default AddPetForm;
