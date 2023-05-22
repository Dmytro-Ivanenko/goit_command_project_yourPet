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

export const getSellNotices = async params => {
    const { data } = await axios.get(`/notice/sell`, {
        params,
    });
    console.log(data);
    return data;
};

export const getInGoodHandsNotices = async params => {
    const { data } = await axios.get(`/notice/inGoodHands`, {
        params,
    });
    console.log(data);
    return data;
};

export const getLostNotices = async params => {
    const { data } = await axios.get(`/notice/lost`, {
        params,
    });
    console.log(data);
    return data;
};

export const getOwnNotices = async params => {
    const { data } = await axios.get(`/notice/myAdds`, {
        params,
    });
    console.log(data);
    return data;
};
