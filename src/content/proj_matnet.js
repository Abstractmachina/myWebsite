import { Project } from "../Project"
import { createElementText } from "../util";

const matnet = () => {
    let proj = new Project("Material Networks", 2018, "London, UK");

    proj.addCategory("academic");
    proj.addCategory("additive manufacturing");
    proj.addCategory("design");
    proj.addCategory("code");

    proj.Subtitle = "Mass-customized Housing for Cohesive Communities"
    const introHeading = document.createElement('h3');
    introHeading.textContent = "Introduction";
    const intro = document.createElement('p');
    intro.textContent = 'Material Networks proposes a negotiated communal housing system that provides custom-tailored neighborhoods to cohesive communities tied by their shared cultures, economies and governance. Building-scale additive manufacturing is investigated as an automated fabrication technology that can deliver mass-customized, integrated dwellings through a generative AI framework.';
    proj.pushContents(introHeading, intro);

    //project structure
    const structureHeading = document.createElement('h3');
    structureHeading.textContent = "Project Structure";
    const struct0 = document.createElement('p');
    struct0.textContent = "The research is broken up into three levels of enquiry.";
    const struct1 = document.createElement('p');
    struct1.innerHTML = '<strong>Organization:</strong> On the organization level the research looks into constructing spatial configurations of social structure. Using a relational model, buildings are generated based on the social relationships in a community.';
    const struct2 = document.createElement('p');
    struct2.innerHTML = '<strong>Unit:</strong> On the next scale down, we are proposing a customization system where the housing configuration is defined as a matrix of parameters, allowing units to respond to the daily patterns of each individual in the network.'
    const struct3 = document.createElement('p');
    struct3.innerHTML = '<strong>Construction:</strong> Additive manufacturing in clay-like materials using industrial robots is investigated as a fabrication technology that can deliver mass-customized, integrated dwellings.'
    proj.pushContents(structureHeading, struct0, struct1, struct2, struct3);

    const featureList = document.createElement('ul');
    const p1 = document.createElement('li');
    p1.textContent = "Blending, boolean and plane trimming operations to manipulate field functions";
    const p2 = document.createElement('li');
    p2.textContent = "Multi-threading for calculation-intensive components";
    const p3 = document.createElement('li');
    p3.textContent = "Display components to visualize geometric output";
    featureList.append(p1,p2,p3);
    proj.pushContent(featureList);

    return proj;
};


export default matnet;