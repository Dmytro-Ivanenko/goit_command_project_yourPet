export const filterNotices = (notices, selectedFilters) => {
    return notices.filter(notice => {
        if (selectedFilters.length === 0) {
            return true;
        }

        if (selectedFilters.includes('ageYoung')) {
            return notice.date.includes('m');
        }

        if (selectedFilters.includes('ageMed')) {
            return notice.date === '1 year';
        }

        if (selectedFilters.includes('ageOld')) {
            return notice.date.includes('years');
        }

        return true;
    });
};

export const getGender = filters => {
    if (filters.includes('male') && !filters.includes('female')) {
        return 'male';
    }

    if (!filters.includes('male') && filters.includes('female')) {
        return 'female';
    }

    return '';
};

// export default { filterNotices, getGender };
