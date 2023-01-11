import './style.css';
import Model from './model.js';
import GUI from './GUI.js'
import printFast from "./projects/proj_printFast";
import aag from './projects/proj_aag';
import { LinkedList } from './LinkedList';


const model = new Model();

model.addProject(printFast);
model.addProject(aag);


const gui = new GUI();


const test = document.createElement('div');
test.classList.add('test');

let curr = aag()._content._head;

while (curr !== null) {
    console.log(curr.value);
    test.appendChild(curr.value);
    curr = curr.next;
}


const root = document.querySelector('.root');
root.appendChild(test);

// const body = document.querySelector('body');
// const projectsContainer = document.querySelector('#projectsContainer');
// body.addEventListener('scroll', () => {
    
// })