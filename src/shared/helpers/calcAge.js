export const calcAge = birthdate => {
    const birthDate = new Date(birthdate.split('-').reverse().join('-'));
    const currentDate = new Date();
    const yearsDiff = currentDate.getFullYear() - birthDate.getFullYear();
    const monthsDiff = currentDate.getMonth() - birthDate.getMonth();
    const totalMonths = yearsDiff * 12 + monthsDiff;

    if (totalMonths < 12) {
        return `${totalMonths} m`;
    }

    if (totalMonths >= 12 && totalMonths < 24) {
        return `1 year`;
    }

    return `${yearsDiff} years`;
};
