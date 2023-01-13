import myWebsite from "./projects/proj_myWebsite";
import printFast from "./projects/proj_printFast";
import aag from "./projects/proj_aag";

const loadProjects = () => {
    const projects = new Map();
    projects.set('printFast',  printFast());
    projects.set('aag', aag());
    projects.set('website', myWebsite())

    return projects;
};

export default loadProjects;