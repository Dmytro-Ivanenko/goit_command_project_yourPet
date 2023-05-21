import moment from 'moment';

export const calcAge = birthdate => {
    const birthDate = moment(birthdate, 'DD-MM-YYYY');
    const currentDate = moment();

    const yearsDiff = currentDate.diff(birthDate, 'years');
    const monthsDiff = currentDate.diff(birthDate, 'month') % 12;
    const totalMonths = yearsDiff * 12 + monthsDiff;

    if (totalMonths < 12) {
        return `${totalMonths} m`;
    }

    if (totalMonths >= 12 && totalMonths < 24) {
        return `1 year`;
    }

    return `${yearsDiff} years`;
};
