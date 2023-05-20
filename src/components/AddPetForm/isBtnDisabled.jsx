const isBtnDisabled = (step, data) => {
    const fullInputs = Object.values(data).filter(el => !!el).length;
    let disabled = false;

    if (step === 2) {
        if ((data.option === 'pet' && fullInputs < 4) || (data.option !== 'pet' && fullInputs < 5)) disabled = true;
    } else if (step === 3) {
        if (
            (data.option === 'pet' && fullInputs < 6) ||
            (data.option === 'sell' && fullInputs < 10) ||
            (data.option === 'hands' && fullInputs < 9) ||
            (data.option === 'lostFound' && fullInputs < 9)
        )
            disabled = true;
    }
    return disabled;
};
export default isBtnDisabled;
