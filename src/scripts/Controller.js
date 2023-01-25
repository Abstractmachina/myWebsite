import Model from './Model.js';
import GUI from './GUI.js'
import loadProjects from "../projects/loadProjects";

export class Controller{
    _model = null;
    _view = null;
    _projectIndex = null;

    constructor() {
        this._model = new Model(loadProjects());
        this._view = new GUI(this._model.ProjectIndex);

        this._view.bindCallProjectPages(this.onProjectPageCalled);
        this._view.bindHoverProjects(this.onProjectHovered);
    }

    onProjectPageCalled = (id) => {
        const project = this._model.getProject(id);
        this._view.displayProject(project.HtmlContent);
    }

    onProjectHovered = (id) => {
        return this._model.getProject(id).Categories;
    }
}