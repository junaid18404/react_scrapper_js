import axios from'axios';
export default class Services {

    baseUrl = 'https://www.reddit.com';

    get = async (url) => {
        return axios.get(this.baseUrl+ url);
    }
}