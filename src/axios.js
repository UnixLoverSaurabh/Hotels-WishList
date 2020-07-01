import axios from 'axios';

const Instance = axios.create({
        baseURL: 'https://oktrolly-ccbbd.firebaseio.com/'
});

export default Instance;