import myWebsite from "./content/proj_myWebsite";
import printFast from "./content/proj_printFast";
import aag from "./content/proj_aag";
import matnet from './content/proj_matnet';
import drones from './content/proj_drones';
import nlp4ms from "./content/proj_nlp4ms";
import organic from "./content/proj_organic";

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