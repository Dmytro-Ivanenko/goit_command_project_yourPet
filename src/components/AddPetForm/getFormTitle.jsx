const getFormTitle = data => {
    let title = 'Add pet';
    switch (data.option) {
        case 'sell':
            title = `${title} for sell`;
            break;
        case 'lostFound':
            title = `${title} for 'lost/found'`;
            break;
        case 'hands':
            title = `${title} for 'in good hands'`;
            break;
        default:
            title = 'Add pet';
    }
    return title;
};

export default getFormTitle;
