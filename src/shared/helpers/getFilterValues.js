export const getFilterValues = searchParams => {
    return Array.from(searchParams.entries()).reduce((acc, entry) => {
        if (entry[0] !== 'query' && entry[0] !== 'page') {
            acc.push(entry[1]);
        }

        return acc;
    }, []);
};
