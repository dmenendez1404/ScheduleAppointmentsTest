import {Http} from "./http";

export class HttpBase {
    http: any;

    constructor(route: string) {
        this.http = new Http(route);
    }

    getById = (id: string) => {
        return this.http.getRequest('/' + id);
    }

    getAll = () => {
        return this.http.getRequest('/');
    }

    save = (data: any) => {
        return this.http.postRequest('/', data);
    }

    update = (data: any) => {
        return this.http.putRequest('/' + data._id, data);
    }

    delete = (id: string) => {
        return this.http.deleteRequest('/' + id);
    }
}
