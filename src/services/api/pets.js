import axios from 'axios';

export const getYourPets = async () => {
    const { data } = await axios.get('/yourPets');

    return data;
};

export const addYourPet = async () => {
    const { data } = await axios.post('/yourPets');

    return data;
};

export const deleteYourPet = async id => {
    const { data } = await axios.delete(`/yourPets/${id}`);

    return data;
};
