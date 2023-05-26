import axios from 'axios';

export const getNoticeById = async id => {
    const { data } = await axios.get(`/notice/${id}`);

    return data;
};

export const deleteNoticeById = async id => {
    const res = await axios.delete(`/notice/${id}`);

    return res;
};

export const getSellNotices = async ({ page = 1, limit = 12, query, gender, age }) => {
    const { data } = await axios.get(`/notice/sell`, {
        params: {
            page,
            limit,
            query,
            gender,
            age,
        },
    });

    return data;
};

export const getInGoodHandsNotices = async ({ page = 1, limit = 12, query, gender, age }) => {
    const { data } = await axios.get(`/notice/inGoodHands`, {
        params: {
            page,
            limit,
            query,
            gender,
            age,
        },
    });

    return data;
};

export const getLostNotices = async ({ page = 1, limit = 12, query, gender, age }) => {
    const { data } = await axios.get(`/notice/lost`, {
        params: {
            page,
            limit,
            query,
            gender,
            age,
        },
    });

    return data;
};

export const getOwnNotices = async ({ page = 1, limit = 12, query, gender, age }) => {
    const { data } = await axios.get(`/notice/myAdds`, {
        params: {
            page,
            limit,
            query,
            gender,
            age,
        },
    });

    return data;
};
