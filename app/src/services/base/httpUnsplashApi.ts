import Http from "./http";

class HttpUnsplashApi {
    http: any;

    constructor() {
        this.http = new Http('photos/random', process.env.REACT_APP_API_UNSPLASH_ENDPOINT);
    }

    getRandomPhoto = () => {
        return this.http.getRequest('?client_id='+process.env.REACT_APP_API_UNSPLASH_ACCESS_KEY+';?orientation=landscape,');
    }
}

export default (new HttpUnsplashApi())