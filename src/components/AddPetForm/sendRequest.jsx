import axios from 'axios';

axios.defaults.baseURL = 'https://petprojectonrendercom.onrender.com/api';
// axios.defaults.baseURL = 'http://localhost:3000/api';

const config = {
    headers: {
        'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
};

const sendRequest = async (endpoint, objToSend) => {
    console.log('in sendRequest');
    try {
        let response = await axios.postForm(endpoint, objToSend, config);
        console.log(response.data);
    } catch (err) {
        console.log(err);
    }
    return;
};
export default sendRequest;
