import { getSellNotices, getLostNotices, getInGoodHandsNotices, getOwnNotices } from 'services/api/notices';
import { getFavoriteNotices } from 'services/api/favorites';

export const getNotices = async params => {
    params.age = getAgeParam(params.age);

    switch (params.category) {
        case 'sell':
            return await getSellNotices(params);

        case 'lost-found':
            return await getLostNotices(params);

        case 'for-free':
            return await getInGoodHandsNotices(params);

        case 'favorite':
            return await getFavoriteNotices(params);

        case 'own':
            return await getOwnNotices(params);

        default:
            return [];
    }
};

const getAgeParam = age => {
    switch (age) {
        case '0-12 m':
            return 12;

        case '1 year':
            return 24;

        case '2 years +':
            return 25;

        default:
            return;
    }
};
