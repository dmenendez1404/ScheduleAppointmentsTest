import axios from 'axios';

export default class Http {
    private apiClient: any;
    constructor(route: string) {
        const url = process.env.REACT_APP_API_ENDPOINT;
        this.apiClient = axios.create({
            baseURL: `${url}${route}`,
            responseType: 'json',
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    getRequest(url:string, params:any, config = {}) {
        return this.apiClient.get(url, { params, ...config });
    }
    postRequest(url:string, data:any, config = {}) {
        return this.apiClient.post(url, data, config);
    }
    putRequest(url:string, data:any, config = {}) {
        return this.apiClient.put(url, data, config);
    }
    deleteRequest(url:string, params:any, config = {}) {
        return this.apiClient.delete(url, { params, ...config });
    }
}