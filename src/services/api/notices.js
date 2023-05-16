import axios from 'axios';

export const getAllNotices = async () => {
    const { data } = await axios.get('/pets');
    console.log(data);
    return data;
};

// export const deleteNotice = async id => {
//     const res = await axios.delete(`/pets/${id}`);
//     console.log(res);
// };

export const getNoticeById = async id => {
    const { data } = await axios.get(`/pets/${id}`);
    console.log(data);
    return data;
};

export const getSellNotices = async (query, gender) => {
    console.log(gender);
    const { data } = await axios.get(`/pets/sell`, {
        params: {
            query,
            gender,
        },
    });
    console.log(data);
    return data;
};

export const getInGoodHandsNotices = async (query, gender) => {
    const { data } = await axios.get(`/pets/inGoodHands`, {
        params: {
            query,
            gender,
        },
    });
    console.log(data);
    return data;
};

export const getLostNotices = async (query, gender) => {
    const { data } = await axios.get(`/pets/lost`, {
        params: {
            query,
            gender,
        },
    });
    console.log(data);
    return data;
};
