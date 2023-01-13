class Model {

    _projects = null;

    constructor() {
        this._projects = new Map();
    }

    addProject(key, project) {
        this._projects.set(key, project);
    }


    addProjects = (newProjects) => {
        if (!newProjects instanceof Map) throw "Must be a map";
        if (this._projects.size > 0) {
            var merged = new Map([this._projects, newProjects]);
            this._projects = merged;
            return;
        }

        this._projects = newProjects;

    }



    /**
     * get relevant information from each project to build an index table,
    //returns an array of objects
     */
    get ProjectIndex() {
        if (this._projects === null) throw 'No projects added!';

        // console.log("dasdfasdf")
        // console.log(this._projects);

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

    getProject(id) {
        return this._projects.get(id);
    }

    get ProjectCount() {
        return this._projects.size;
    }

    get Ids() {
        return this._projects.keys();
    }

}

export default Model