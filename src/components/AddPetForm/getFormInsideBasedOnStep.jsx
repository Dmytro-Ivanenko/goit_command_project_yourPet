import PetOneStepFormContent from './PetOneStepFormContent';
import PetTwoStepFormContent from './PetTwoStepFormContent';
import PetThreeStepFormContent from './PetThreeStepFormContent';
import NoticesThreeStepFormContent from './NoticesThreeStepFormContent';

const getFormInsideBasedOnStep = (step, data, setData, fileInputRef, fileRef) => {
    let formInsideBasedOnStep;

    switch (step) {
        case 2:
            formInsideBasedOnStep = <PetTwoStepFormContent data={data} setData={setData} />;
            break;
        case 3:
            if (data.option !== 'pet') {
                formInsideBasedOnStep = (
                    <NoticesThreeStepFormContent
                        fileInputRef={fileInputRef}
                        data={data}
                        setData={setData}
                        fileRef={fileRef}
                    />
                );
            } else {
                formInsideBasedOnStep = (
                    <PetThreeStepFormContent
                        data={data}
                        setData={setData}
                        fileInputRef={fileInputRef}
                        fileRef={fileRef}
                    />
                );
            }
            break;

        default:
            formInsideBasedOnStep = <PetOneStepFormContent data={data} setData={setData} />;
    }
    return formInsideBasedOnStep;
};
export default getFormInsideBasedOnStep;
