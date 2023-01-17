import myWebsite from "./content/proj_myWebsite";
import printFast from "./content/proj_printFast";
import aag from "./content/proj_aag";
import matnet from './content/proj_matnet';

const loadProjects = () => {
    const projects = new Map();
    projects.set('printFast',  printFast());
    projects.set('aag', aag());
    projects.set('website', myWebsite())
    projects.set('matnet', matnet());

    return projects;
};

export default loadProjects;