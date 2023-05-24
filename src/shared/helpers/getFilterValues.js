export const getFilterValues = searchParams => {
    return Array.from(searchParams.entries()).reduce((acc, entry) => {
        if (entry[0] !== 'query') {
            acc.push(entry[1]);
        }

        return acc;
    }, []);
};
