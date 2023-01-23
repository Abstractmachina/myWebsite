import myWebsite from "./projects/proj_myWebsite";
import printFast from "./projects/proj_printFast";
import aag from "./projects/proj_aag";
import matnet from './projects/proj_matnet';
import drones from './projects/proj_drones';
import nlp4ms from "./projects/proj_nlp4ms";
import organic from "./projects/proj_organic";

const loadProjects = () => {
    const projects = new Map();
    projects.set('printFast',  printFast());
    projects.set('aag', aag());
    projects.set('website', myWebsite());
    projects.set('matnet', matnet());
    projects.set('drones', drones());
    projects.set('nlp4ms', nlp4ms());
    projects.set('organic', organic());

    return projects;
};

export default loadProjects;