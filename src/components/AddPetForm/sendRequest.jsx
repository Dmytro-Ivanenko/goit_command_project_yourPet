import axios from 'axios';

axios.defaults.baseURL = 'https://petprojectonrendercom.onrender.com/api';
// axios.defaults.baseURL = 'http://localhost:3000/api';

const sendRequest = async (endpoint, objToSend) => {
    console.log('in sendRequest');
    try {
        let response = await axios.postForm(endpoint, objToSend);
        console.log(response.data);
    } catch (err) {
        console.log(err);
    }
    return;
};
export default sendRequest;
