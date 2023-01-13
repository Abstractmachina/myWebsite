import Model from './Model.js';
import GUI from './GUI.js'
import loadProjects from "./loadProjects";

export class Controller{
    _model = null;
    _view = null;
    _projectIndex = null;

    constructor(model, view) {
        this._model = new Model();
        this._view = new GUI();

        this._model.addProjects(loadProjects());

        this._view.bindCallProjectIndex(this.onProjectIndexCalled);
        this._view.bindCallProjectPages(this.onProjectPageCalled);
    }

    //need to use arrow function as otherwise this will unbind itself!
    onProjectIndexCalled = () => {
        if (this._projectIndex === null) {
            this._projectIndex = this._model.ProjectIndex;
        }

        this._view.displayProjectIndex(this._projectIndex);
    }

    onProjectPageCalled = (id) => {
        const project = this._model.getProject(id);
        this._view.displayProject(project.HtmlContent);
    }
}