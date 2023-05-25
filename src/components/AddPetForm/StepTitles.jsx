import styles from './addPetForm.module.scss';

// external libraries
import clsx from 'clsx';

const StepTitles = ({ step }) => {
    return (
        <div className={styles.stepTitleContainer}>
            <span
                className={clsx(
                    styles.stepTitle,
                    { [styles.oneSelectedColor]: step === 1 },
                    { [styles.passedColor]: step > 1 }
                )}
            >
                Choose option
                <span
                    className={clsx(
                        styles.stepOneTitleAfter,
                        { [styles.oneSelected]: step === 1 },
                        { [styles.passed]: step > 1 }
                    )}
                ></span>
            </span>

            <span
                className={clsx(
                    styles.stepTitle,
                    { [styles.twoSelectedColor]: step === 2 },
                    { [styles.passedColor]: step > 2 }
                )}
            >
                Personal details
                <span
                    className={clsx(
                        styles.stepTwoTitleAfter,
                        { [styles.twoSelected]: step === 2 },
                        { [styles.passed]: step > 2 }
                    )}
                ></span>
            </span>
            <span className={clsx(styles.stepTitle, { [styles.threeSelectedColor]: step === 3 })}>
                More info
                <span className={clsx(styles.stepThreeTitleAfter, { [styles.threeSelected]: step === 3 })}></span>
            </span>
        </div>
    );
};
export default StepTitles;
