import axios from 'axios';

const sendRequest = async () => {
    try {
        let response = await axios.get('/news/');

        return response.data;
    } catch (err) {
        console.log(err);
    }
    return;
};
export default sendRequest;
