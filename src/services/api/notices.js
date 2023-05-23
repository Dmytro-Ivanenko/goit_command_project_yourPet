import axios from 'axios';

export const getNoticeById = async id => {
    const { data } = await axios.get(`/notice/${id}`);
    console.log(data);
    return data;
};

export const deleteNoticeById = async id => {
    const res = await axios.delete(`/notice/${id}`);
    console.log(res);
    return res;
};

export const getSellNotices = async ({ page, limit, query, gender, age }) => {
    const { data } = await axios.get(`/notice/sell`, {
        params: {
            page,
            limit,
            query,
            gender,
            age,
        },
    });
    console.log(data);
    return data;
};

export const getInGoodHandsNotices = async ({ page, limit, query, gender, age }) => {
    const { data } = await axios.get(`/notice/inGoodHands`, {
        params: {
            page,
            limit,
            query,
            gender,
            age,
        },
    });
    console.log(data);
    return data;
};

export const getLostNotices = async ({ page, limit, query, gender, age }) => {
    const { data } = await axios.get(`/notice/lost`, {
        params: {
            page,
            limit,
            query,
            gender,
            age,
        },
    });
    console.log(data);
    return data;
};

export const getOwnNotices = async ({ page, limit, query, gender, age }) => {
    const { data } = await axios.get(`/notice/myAdds`, {
        params: {
            page,
            limit,
            query,
            gender,
            age,
        },
    });
    console.log(data);
    return data;
};
