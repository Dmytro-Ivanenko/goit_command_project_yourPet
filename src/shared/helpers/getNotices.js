import { getSellNotices, getLostNotices, getInGoodHandsNotices } from 'services/api/notices';

export const getNotices = async (category, query, gender) => {
    if (category === 'sell') {
        return await getSellNotices(query, gender);
    } else if (category === 'lost-found') {
        return await getLostNotices(query, gender);
    } else if (category === 'for-free') {
        return await getInGoodHandsNotices(query, gender);
    } else {
        // temporary to fix infinite loading on private categories
        return [];
    }
};
