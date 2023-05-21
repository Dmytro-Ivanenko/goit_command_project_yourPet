import { getSellNotices, getLostNotices, getInGoodHandsNotices, getOwnNotices } from 'services/api/notices';
import { getFavoriteNotices } from 'services/api/favorites';

export const getNotices = async (category, query, gender, page, limit) => {
    switch (category) {
        case 'sell':
            return await getSellNotices(query, gender, page, limit);

        case 'lost-found':
            return await getLostNotices(query, gender, page, limit);

        case 'for-free':
            return await getInGoodHandsNotices(query, gender, page, limit);

        case 'favorite':
            return await getFavoriteNotices(query, gender, page, limit);

        case 'own':
            return await getOwnNotices(query, gender, page, limit);

        default:
            return [];
    }
};
