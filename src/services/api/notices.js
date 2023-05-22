import axios from 'axios';

export const getNoticeById = async id => {
    const { data } = await axios.get(`/notice/${id}`);
    console.log(data);
    return data;
};

export const deleteNoticeById = async id => {
    const { data } = await axios.delete(`/notice/${id}`);
    console.log(data);
    return data;
};

export const getSellNotices = async (query, gender, page, limit) => {
    const { data } = await axios.get(`/notice/sell`, {
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

export const getInGoodHandsNotices = async (query, gender, page, limit) => {
    const { data } = await axios.get(`/notice/inGoodHands`, {
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

export const getLostNotices = async (query, gender, page, limit) => {
    const { data } = await axios.get(`/notice/lost`, {
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

export const getOwnNotices = async (query, gender, page, limit) => {
    const { data } = await axios.get(`/notice/myAdds`, {
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
