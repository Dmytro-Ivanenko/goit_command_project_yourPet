import axios from 'axios';

export const getFavoriteNotices = async ({ query, gender, age }) => {
    const { data } = await axios.get(`/notice/favorites/list`, {
        params: {
            query,
            gender,
            age,
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
