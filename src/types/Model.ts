import Project from "./Project";

class Model {
    private _projects: Map<string, Project> | null;

    constructor(projects: Map<string, Project>) {
        this._projects = projects;
    }

    public GetUniqueCategories() : string[] | null {
        let categories = new Set<string>();
        if (this._projects === null) return null; //return null if there are no projects

        this._projects.forEach(p => {
            let projectCategories =  p.Categories;
            projectCategories.forEach(c => {
                categories.add(c);
            })
        })
        return Array.from(categories);
    }

    get Projects() : Map<string, Project> | null {
        return this._projects;
    }

    // constructor() {
    //     this._projects = new Map();
    // }

    // constructor(projects) {
    //     this.addProjects(projects);
    // }

    // addProject(key, project) {
    //     this._projects.set(key, project);
    // }


    // addProjects = (newProjects) => {
    //     if (!newProjects instanceof Map) throw "Must be a map";
    //     if (this._projects !== null && this._projects.size > 0) {
    //         var merged = new Map([this._projects, newProjects]);
    //         this._projects = merged;
    //         return;
    //     }
    //     if (this._projects === null)
    //     this._projects = newProjects;

    // }



    // /**
    //  * get relevant information from each project to build an index table,
    // //returns an array of objects
    //  */
    // get ProjectIndex() {
    //     if (this._projects === null) throw 'No projects added!';

    //     let entries = [];
    //     for (let [key, project] of this._projects.entries()) {
    //         const entry = {
    //             id: key.toString(),
    //             title: project.Title,
    //             year: project.Year,
    //             location: project.Location,
    //             categories: project.Categories
    //         }
    //         entries.push(entry);
    //     }

    //     return entries;

    // }

    // getProject(id) {
    //     return this._projects.get(id);
    // }

    // get ProjectCount() {
    //     return this._projects.size;
    // }

    // get Ids() {
    //     return this._projects.keys();
    // }

}

export default Model