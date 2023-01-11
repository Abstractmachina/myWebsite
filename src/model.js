class Model {

    _projects = null;

    constructor() {
        this._projects = new Map();
    }

    addProject(key, project) {
        this._projects.set(key, project);
    }


    //get relevant information from each project to build an index table,
    //returns an array of entry objects
    get ProjectIndex() {

        let entries = [];
        for (let [key, project] of this._projects.entries()) {
            const entry = {
                id: key.toString(),
                title: project.Title,
                year: project.Year,
                location: project.Location,
                categories: project.Categories
            }
            entries.push(entry);
        }

        return entries;

    }

    get ProjectCount() {
        return this._projects.size;
    }

}

export default Model