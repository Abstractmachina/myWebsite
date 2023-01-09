import { LinkedList } from "./LinkedList";



class Model {

    _projects = null;

    constructor() {
        this._projects = new LinkedList();
    }

    addProject(project) {
        this._projects.push(project);
    }




}

export default Model