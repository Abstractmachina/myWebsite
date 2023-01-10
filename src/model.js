import { LinkedList } from "./LinkedList";



class Model {

    _projects = null;

    constructor() {
        this._projects = new Map();
    }

    addProject(key, project) {
        this._projects.set(key, project);
    }




}

export default Model