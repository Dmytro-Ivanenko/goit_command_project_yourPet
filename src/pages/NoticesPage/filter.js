export const filterByAge = (notices, selectedFilters) => {
    return notices.filter(notice => {
        if (!selectedFilters) {
            return true;
        }

        if (selectedFilters.includes('3-12 m')) {
            return notice.date.includes('m');
        }

        if (selectedFilters.includes('1 year')) {
            return notice.date === '1 year';
        }

        if (selectedFilters.includes('2 years +')) {
            return notice.date.includes('years');
        }

        return true;
    });
};

export const getFilterValues = searchParams => {
    return Array.from(searchParams.entries()).reduce((acc, entry) => {
        if (entry[0] !== 'query') {
            acc.push(entry[1]);
        }

        return acc;
    }, []);
};
