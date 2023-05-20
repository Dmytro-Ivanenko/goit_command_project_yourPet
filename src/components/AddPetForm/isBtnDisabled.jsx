const isBtnDisabled = (step, data) => {
    const notEmptyField = Object.values(data).filter(el => !!el).length;
    let disabled = false;

    if (step === 2) {
        if ((data.option === 'pet' && notEmptyField < 4) || (data.option !== 'pet' && notEmptyField < 5))
            disabled = true;
    } else if (step === 3) {
        if (
            (data.option === 'pet' && notEmptyField < 8) ||
            (data.option === 'sell' && notEmptyField < 10) ||
            notEmptyField < 9
        )
            disabled = true;
    }
    return disabled;
};
export default isBtnDisabled;
