import axios from 'axios';

export const getAllNotices = async () => {
    const { data } = await axios.get('/notice');
    console.log(data);
    return data;
};

// export const deleteNotice = async id => {
//     const res = await axios.delete(`/pets/${id}`);
//     console.log(res);
// };

export const getNoticeById = async id => {
    const { data } = await axios.get(`/notice/${id}`);
    console.log(data);
    return data;
};

export const getSellNotices = async (query, gender) => {
    const { data } = await axios.get(`/notice/sell`, {
        params: {
            query,
            gender,
        },
    });
    console.log(data);
    return data;
};

export const getInGoodHandsNotices = async (query, gender) => {
    const { data } = await axios.get(`/notice/inGoodHands`, {
        params: {
            query,
            gender,
        },
    });
    console.log(data);
    return data;
};

export const getLostNotices = async (query, gender) => {
    const { data } = await axios.get(`/notice/lost`, {
        params: {
            query,
            gender,
        },
    });
    console.log(data);
    return data;
};
