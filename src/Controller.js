import printFast from "./projects/proj_printFast";
import aag from "./projects/proj_aag";
import Model from './Model.js';
import GUI from './GUI.js'

export class Controller{
    _model = null;
    _view = null;

    constructor(model, view) {
        this._model = new Model();
        this._view = new GUI();

        this._model.addProject('printFast',  printFast());
        this._model.addProject('aag', aag());

        const test = document.createElement('div');
        test.classList.add('test');

        let curr = aag()._content._head;

        while (curr !== null) {
            test.appendChild(curr.value);
            curr = curr.next;
        }


        const root = document.querySelector('.root');
        root.appendChild(test);

        this._view.bindCallProjectIndex(this.onProjectIndexCalled);
    }

    //need to use arrow function as otherwise this will unbind itself!
    onProjectIndexCalled = () => {
        const v = this._model.ProjectIndex;
        console.log(v);
        // this._model.ProjectIndex.forEach(element => {
        //     console.log(element);
        // });
    }
}