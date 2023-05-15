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
