import axios from 'axios';

const Instance = axios.create({
        baseURL: 'https://hotelwishlist-86f4f.firebaseio.com/'
});

export default Instance;