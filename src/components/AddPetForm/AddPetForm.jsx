// icons
import { ReactComponent as PawprintIcon } from 'images/icons/pawprint.svg';
import { ReactComponent as BackBtn } from 'images/icons/arrow-left.svg';

// scss modules
import styles from './addPetForm.module.scss';
import btnStyle from './buttons.module.scss';

// helpers
import getFormInsideBasedOnStep from './getFormInsideBasedOnStep';
import getFormTitle from './getFormTitle';
import serverRequestHandler from './serverRequestHandler';
import moment from 'moment';

// Components
import StepTitles from './StepTitles';

// react / react-dom
import React, { useState, useRef } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';

const AddPetForm = () => {
    const location = useLocation();
    const fileInputRef = useRef(null);
    const navigate = useNavigate();

    const [step, setStep] = useState(1);
    const [data, setData] = useState({ option: 'pet' });

    const onClick = async e => {
        const btn = e.target.innerHTML;
        let allFields;
        if (btn.includes('Next')) {
            let fullFields = Object.keys(data);
            if (step === 1) return setStep(2);

            allFields = ['addTitle', 'name', 'birth', 'breed'];
            data.option === 'pet' && allFields.shift('addTitle');

            let notCompletedFields = allFields.filter(key => !fullFields.includes(key));
            for (const key of notCompletedFields) {
                let input = document.querySelector(`#${key}`);
                input.classList.add('notValid');
            }

            let date = moment(data.birth, 'DD-MM-YYYY', true);
            if (!date.isValid()) {
                let input = document.querySelector('#birth');
                input.classList.add('notValid');
                return;
            }

            !Boolean(notCompletedFields.length) && setStep(3);
        } else if (btn.includes('Done')) {
            e.preventDefault();

            let fullFields = Object.keys(data);
            allFields = ['price', 'sex', 'photo', 'location', 'comments'];
            data.option !== 'sell' && allFields.shift('price');

            if (data.option === 'pet') {
                allFields = ['photo', 'comments'];
            }
            let notCompletedFields = allFields.filter(key => !fullFields.includes(key));
            for (const key of notCompletedFields) {
                let input = document.querySelector(`#${key}`);
                if (key === 'birth') {
                    input.classList.add('notValid');
                }
                if (key === 'photo') {
                    data.option !== 'pet' && input.classList.add('notValidNoticePhoto');
                    data.option === 'pet' && input.classList.add('notValidPhoto');
                    continue;
                }
                if (key === 'comments') {
                    input.classList.add('notValidComment');
                    continue;
                }
                if (key === 'sex') {
                    input.classList.add('notValidSex');
                    continue;
                }

                input.classList.add('notValid');
            }

            if (!Boolean(notCompletedFields.length)) {
                await serverRequestHandler(data, fileInputRef);
                data.option === 'pet' && navigate('/user');
                data.option === 'sell' && navigate('/notices/sell');
                data.option === 'lostFound' && navigate('/notices/lost-found');
                data.option === 'hands' && navigate('/notices/for-free');
            }

            return;
        } else if (btn.includes('Back')) {
            return setStep(prev => prev - 1);
        } else {
            return;
        }
    };

    const title = getFormTitle(data);
    const backPage = step === 1 ? location.state?.from ?? '/user' : '';

    return (
        <form className={styles.form} onClick={onClick}>
            <div className="upperFormPart">
                <h2 className={styles.title}>{title}</h2>
                <StepTitles step={step} />
            </div>

            {getFormInsideBasedOnStep(step, data, setData, fileInputRef, fileInputRef.current)}

            <div className={btnStyle.buttonsContainer}>
                <button type={data.comments ? 'submit' : 'button'} className={btnStyle.btnLearn}>
                    <span>{step === 3 ? 'Done' : 'Next'}</span>
                    <PawprintIcon className={btnStyle.btnLearnIcon} width={24} height={24} />
                </button>

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
