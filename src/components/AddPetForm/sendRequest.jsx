import axios from 'axios';

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
