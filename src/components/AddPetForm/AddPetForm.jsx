import styles from './addPetForm.module.scss';
import btnStyle from './buttons.module.scss';
//import { ReactComponent as PawprintIcon } from 'images/icons/pawprint.svg';
import getFormInsideBasedOnStep from './getFormInsideBasedOnStep';
import isBtnDisabled from './isBtnDisabled';
import getFormTitle from './getFormTitle';
import React, { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import serverRequest from './serverRequest';

const AddPetForm = () => {
    const location = useLocation();
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
                // console.log('DATA ON SUBMITTTT: ', data);
                // console.log(fileInputRef.current.files[0]);
                serverRequest(data, fileInputRef);
                break;
            case 'Back':
                setStep(prev => prev - 1);
             break;
            default:
                return;
        }
        console.log('fileInputRef', fileInputRef.current);
    };

    const title = getFormTitle(data);
    const backPage = step === 1 ? location.state?.from ?? '/user' : '';

    return (
        <form className={styles.form} onClick={onClick}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.stepTitleContainer}>
                <span className={styles.stepTitle}>
                    Choose option{' '}
                    <span
                        className={clsx(
                            styles.stepOneTitleAfter,
                            { [styles.oneSelected]: step === 1 },
                            { [styles.passed]: step > 1 }
                        )}
                    ></span>
                </span>

                <span className={styles.stepTitle}>
                    Personal details
                    <span
                        className={clsx(
                            styles.stepTwoTitleAfter,
                            { [styles.twoSelected]: step === 2 },
                            { [styles.passed]: step > 2 }
                        )}
                    ></span>
                </span>
                <span className={styles.stepTitle}>
                    More info
                    <span className={clsx(styles.stepThreeTitleAfter, { [styles.threeSelected]: step === 3 })}></span>
                </span>
            </div>
            {getFormInsideBasedOnStep(step, data, setData, fileInputRef)}
            <div className={btnStyle.buttonsContainer}>
                <Link to={backPage}>
                    <button type="button" className={styles.backButton}>
                        {step === 1 ? 'Cancel' : 'Back'}
                    </button>
                </Link>

                <button
                    type={data.comments ? 'submit' : 'button'}
                    disabled={isBtnDisabled(step, data)}
                    className={btnStyle.btnLearn}
                >
                    {step === 3 ? 'Done' : 'Next'}
                    {/* <PawprintIcon className={btnStyle.btnLearnIcon} width={24} height={24} /> */}
                </button>
            </div>
        </form>
    );
};
export default AddPetForm;
