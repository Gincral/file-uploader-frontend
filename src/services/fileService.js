import HttpService from './HttpService';

class FileService {

    constructor() {
        this.httpService = new HttpService();
    }

    getFile(_id) {
        const url = process.env.REACT_APP_API + '/task';
        const params = { _id: id };
        return this.httpService.getRequest(url, {}, params);
    }

    getAllFiles() {
        const url = process.env.REACT_APP_API + '/task';
        const params = { _id: id };
        return this.httpService.getRequest(url, {}, params);
    }

    postFile(name, description, groups, days, user_id){
        const url = process.env.REACT_APP_API + '/task';
        const body = {
            name: name,
            description: description,
            groups: groups,
            days: days,
            user_id: user_id
        }
        return this.httpService.postRequest(url, {}, {}, body);
    }

    deleteFile(_id){
        const url = process.env.REACT_APP_API + '/task';
        const params = { _id: taskId };
        return this.httpService.deleteRequest(url, {}, params, {});
    }
}

export default FileService;