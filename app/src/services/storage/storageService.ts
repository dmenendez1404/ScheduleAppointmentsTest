class LocalStorage {
    save = (key: string, value:any) => {
        localStorage.setItem(key, value);
    };
    get = (key: string) => {
        return localStorage.getItem(key);
    };
    checkExist = (key: string) => {
        return localStorage.getItem(key) !== null ? true : false;
    };
    clear = (key: string) => {
        localStorage.removeItem(key);
    };
    clearAll = () => {
        localStorage.clear();
    };
}

export default (new LocalStorage());