// icons
import { ReactComponent as PawprintIcon } from 'images/icons/pawprint.svg';
import { ReactComponent as BackBtn } from 'images/icons/arrow-left.svg';

// scss modules
import styles from './addPetForm.module.scss';
import btnStyle from './buttons.module.scss';

// helpers
import getFormInsideBasedOnStep from './getFormInsideBasedOnStep';
import isBtnDisabled from './isBtnDisabled';
import getFormTitle from './getFormTitle';
import serverRequestHandler from './serverRequestHandler';

// Components
import StepTitles from './StepTitles';

// react / react-dom
import React, { useState, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';

const AddPetForm = () => {
    const location = useLocation();
    const fileInputRef = useRef(null);

    const [step, setStep] = useState(1);
    const [data, setData] = useState({ option: 'pet' });

    const onClick = e => {
        const btn = e.target.innerHTML;
        // console.log(e.target);
        let allFields;
        if (btn.includes('Next')) {
            // console.log('clic');
            let fullFields = Object.keys(data);
            if (step === 1) return setStep(2);

            allFields = ['addTitle', 'name', 'birth', 'breed'];
            data.option === 'pet' && allFields.shift('addTitle');

            let notCompletedFields = allFields.filter(key => !fullFields.includes(key));
            console.log(notCompletedFields);
            for (const key of notCompletedFields) {
                let input = document.querySelector(`#${key}`);
                input.classList.add('notValid');
            }

            console.log(Boolean(notCompletedFields.length));
            !Boolean(notCompletedFields.length) && setStep(3);
        } else if (btn.includes('Done')) {
            e.preventDefault();
            console.log('click on Done');
            let fullFields = Object.keys(data);
            allFields = ['sex', 'photo', 'location', 'price', 'comments'];
            data.option === 'sell' && allFields.shift('price');

            let notCompletedFields = allFields.filter(key => !fullFields.includes(key));
            console.log(notCompletedFields);
            for (const key of notCompletedFields) {
                let input = document.querySelector(`#${key}`);
                input.classList.add('notValid');
            }

            !Boolean(notCompletedFields.length) && serverRequestHandler(data, fileInputRef);
            return;
        } else if (btn.includes('Back')) {
            return setStep(prev => prev - 1);
        } else {
            console.log('no btns from list were clicked');
            return;
        }

        // console.log('fileInputRef', fileInputRef.current);
    };

    const clickHandle = e => {
        console.log('hhhhhhhhhh');
        // console.log(e.target);
    };

    const title = getFormTitle(data);
    const backPage = step === 1 ? location.state?.from ?? '/user' : '';

    return (
        <form className={styles.form} onClick={onClick}>
            <div className="upperFormPart">
                <h2 className={styles.title}>{title}</h2>
                <StepTitles step={step} />
            </div>

            {getFormInsideBasedOnStep(step, data, setData, fileInputRef)}

            <div className={btnStyle.buttonsContainer}>
                <div onClick={clickHandle}>
                    <button
                        type={data.comments ? 'submit' : 'button'}
                        // disabled={isBtnDisabled(step, data)}

                        className={btnStyle.btnLearn}
                    >
                        {step === 3 ? 'Done' : 'Next'}
                        <PawprintIcon className={btnStyle.btnLearnIcon} width={24} height={24} />
                    </button>
                </div>

                <Link className={btnStyle.backBtnLink} to={backPage}>
                    <button type="button" className={btnStyle.backButton}>
                        <BackBtn className={btnStyle.backIcon} />
                        {step === 1 ? 'Cancel' : 'Back'}
                    </button>
                </Link>
            </div>
        </form>
    );
};
export default AddPetForm;
