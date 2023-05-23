import axios from 'axios';
axios.defaults.baseURL = 'https://petprojectonrendercom.onrender.com/api';
// axios.defaults.baseURL = 'http://localhost:3000/api';

const serverRequest = async (data, fileInputRef) => {
    const { birth, breed, comments, name } = data;

    if (data.option !== 'pet') {
        try {
            console.log('after submit, not pet');
            const { addTitle, location, option, price, sex } = data;

            if (data.option === 'sell') {
                let response = await axios.postForm('/notice', {
                    name,
                    breed,
                    sex,
                    price,
                    location,
                    comments,
                    date: birth,
                    title: addTitle,
                    category: option,
                    image: fileInputRef.current.files[0],
                });
                return console.log(response.data);
            }
            let response = await axios.postForm('/notice', {
                name,
                breed,
                sex,
                location,
                comments,
                date: birth,
                title: addTitle,
                category: option,
                image: fileInputRef.current.files[0],
            });

            return console.log(response.data);
        } catch (err) {
            console.log(err);
        }
    } else {
        console.log('pet to Server');
        try {
            let response = await axios.postForm('/yourPets', {
                comments,
                breed,
                name,
                birthDate: birth,
                petsAvatar: fileInputRef.current.files[0],
            });

            return console.log(response.data);
        } catch (err) {
            console.log(err);
        }
    }
};
export default serverRequest;
