import axios from 'axios';

export const getYourPets = async () => {
    const { data } = await axios.get('/yourPets');
    console.log(data);
    return data;
};

export const addYourPet = async () => {
    const { data } = await axios.post('/yourPets');
    console.log(data);
    return data;
};

export const deleteYourPet = async id => {
    const { data } = await axios.delete(`/yourPets/${id}`);
    console.log(data);
    return data;
};
