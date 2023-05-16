export const calcAge = birthdate => {
    const birthDate = new Date(birthdate.split('-').reverse().join('-'));
    const currentDate = new Date();
    const yearsDiff = currentDate.getFullYear() - birthDate.getFullYear();
    const monthsDiff = currentDate.getMonth() - birthDate.getMonth();
    const totalMonths = yearsDiff * 12 + monthsDiff;

    if (totalMonths >= 3 && totalMonths < 12) {
        return `${totalMonths} m`;
    }

    if (totalMonths >= 12) {
        const fullYears = Math.floor(totalMonths / 12);
        return `${fullYears} year`;
    }
};
