import axios from 'axios';

export const getFavoriteNotices = async (query, gender, page, limit) => {
    const { data } = await axios.get(`/notice/favorites`, {
        params: {
            query,
            gender,
            page,
            limit,
        },
    });
    console.log(data);
    return data;
};

export const addFavoriteNotice = async id => {
    const { data } = await axios.post(`/notice/favorites/${id}`);
    console.log(data);
    return data;
};

export const deleteFavoriteNotice = async id => {
    const { data } = await axios.delete(`/notice/favorites/${id}`);
    console.log(data);
    return data;
};
