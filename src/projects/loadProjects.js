import myWebsite from "./proj_myWebsite";
import printFast1 from "./proj_printFast1";
import printFast2 from "./proj_printFast2";
import aag from "./proj_aag";
import matnet from './proj_matnet';
import drones from './proj_drones';
import nlp4ms from "./proj_nlp4ms";
import organic from "./proj_organic";
import londonBldg from "./proj_londonB";
import gaudi from "./proj_gaudi";

const loadProjects = () => {
    const projects = new Map();
    projects.set('printFast1',  printFast1());
    projects.set('printFast2',  printFast2());
    projects.set('aag', aag());
    projects.set('website', myWebsite());
    projects.set('matnet', matnet());
    projects.set('drones', drones());
    projects.set('nlp4ms', nlp4ms());
    projects.set('organic', organic());
    projects.set('londonB', londonBldg());
    projects.set('gaudi', gaudi());

    return projects;
};

export default loadProjects;