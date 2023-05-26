import axios from 'axios';

const sendRequest = async (endpoint, objToSend) => {
    try {
        await axios.postForm(endpoint, objToSend);
    } catch (err) {
        console.log(err);
    }
    return;
};
export default sendRequest;
