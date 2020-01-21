import axios from 'axios';
import {AppActions, Store} from "../../store";

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
        //this.initInterceptors();
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
        const {dispatch} = Store;
        this.apiClient.interceptors.request.use( (config:any) => {
            dispatch(AppActions.setLoading(true));
            return config;
        }, function (error:any) {
            return Promise.reject(error);
        });

        this.apiClient.interceptors.response.use((response: any) => {
            dispatch(AppActions.setLoading(false));
            if (response.statusCode >= 200 && response.statusCode < 300) {
                if (!!response.message)
                    dispatch(AppActions.setNotifier({type: 'success', open: true, message: response.message}))
                else
                    dispatch(AppActions.setNotifier({type: 'success', open: false, message: ''}))
            } else {
                dispatch(AppActions.setNotifier({type: 'danger', open: true, message: response.message}))
            }
            return response.data;
        }, function (error: any) {
            dispatch(AppActions.setLoading(false));
            dispatch(AppActions.setNotifier({type: 'danger', open: true, message: 'Something went wrong!'}));
            console.log(error);
            return Promise.reject(error);
        });
    };
}