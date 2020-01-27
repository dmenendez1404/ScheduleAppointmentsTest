import axios from 'axios';
import {AppActions, Store} from "../../store";

export class Http {
    private apiClient: any;
    private store;
    constructor(route: string, baseUrl?: string) {

        let url;
        if(!baseUrl)
            url = process.env.REACT_APP_API_ENDPOINT;
        else{
            url = baseUrl
        }

        this.apiClient = axios.create({
            baseURL: `${url}${route}`,
            responseType: 'json',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        setTimeout(()=> {
            this.initInterceptors()
        },1000);
    }

    getRequest(url: string, params: any, config = {}) {
        return this.apiClient.get(url, {params, ...config});
    }

    postRequest(url: string, data: any, config = {}) {
        return this.apiClient.post(url, data, config);
    }

    putRequest(url: string, data: any, config = {}) {
        delete data._id
        return this.apiClient.patch(url, data, config);
    }

    deleteRequest(url: string, params: any, config = {}) {
        return this.apiClient.delete(url, {params, ...config});
    }

    initInterceptors = () => {
        this.store = Store;
        const {dispatch} = this.store;
        this.apiClient.interceptors.request.use( (config:any) => {
            dispatch(AppActions.setLoading(true));
            return config;
        }, function (error:any) {
            return Promise.reject(error);
        });

        this.apiClient.interceptors.response.use((response: any) => {
            dispatch(AppActions.setLoading(false));
            if (response.data.statusCode >= 200 && response.data.statusCode < 300) {
                if (!!response.data.message)
                    dispatch(AppActions.setNotifier({type: 'success', open: true, message: response.data.message}))
            } else if(!!response.data.message){
                dispatch(AppActions.setNotifier({type: 'danger', open: true, message: response.data.message}))
            }
            if(!response.data.data)
                return response;
            return response.data;
        }, function (error: any) {
            console.log('REJECTED')
            dispatch(AppActions.setLoading(false));
            dispatch(AppActions.setNotifier({type: 'danger', open: true, message: 'Something went wrong!'}));
            return Promise.reject(error);
        });
    };
}