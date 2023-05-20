import { getSellNotices, getLostNotices, getInGoodHandsNotices, getOwnNotices } from 'services/api/notices';
import { getFavoriteNotices } from 'services/api/favorites';

export const getNotices = async (category, query, gender, page, limit) => {
    if (category === 'sell') {
        return await getSellNotices(query, gender, page, limit);
    } else if (category === 'lost-found') {
        return await getLostNotices(query, gender, page, limit);
    } else if (category === 'for-free') {
        return await getInGoodHandsNotices(query, gender, page, limit);
    } else if (category === 'favorite') {
        return await getFavoriteNotices(query, gender, page, limit);
    } else if (category === 'own') {
        return await getOwnNotices(query, gender, page, limit);
    } else {
        return [];
    }
};
