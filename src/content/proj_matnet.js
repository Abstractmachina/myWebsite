import { Project } from "../Project"
import { createElementText } from "../util";

const matnet = () => {
    let proj = new Project("Material Networks", 2018, "London, UK");

    proj.addCategory("academic");
    proj.addCategory("additive manufacturing");
    proj.addCategory("design");
    proj.addCategory("code");

    proj.Subtitle = "Mass-customized Housing for Cohesive Communities"
    const introHeading = createElementText('h3', 
        "Introduction");
    const intro = createElementText('p', 
        'Material Networks proposes a negotiated communal housing system that provides custom-tailored neighborhoods to cohesive communities tied by their shared cultures, economies and governance. Building-scale additive manufacturing is investigated as an automated fabrication technology that can deliver mass-customized, integrated dwellings through a generative AI framework.');
    proj.pushContents(introHeading, intro);

    //level 0 neighborhood
    const neighHead = createElementText('h3', "Level 0 Neighborhood");
    const neighsubHead = createElementText('h4', 'The Building as a Network')
    const neigh0 = createElementText('p', 
        "Co-opting techniques from complex network analysis, at the neighborhood level, the research looks into developing an operational tool for extracting meaningful spatial relationship from the social network of a community.");
    const neigh1 = createElementText('p', 
        'The social relationships of a given community are captured in a relational roster in the form of an encoded data matrix, allowing computers to easily read and process the information. The data matrix is subsequently used to construct a network graph. The graph is useful because it captures multi-scalar information in a single, cohesive data structure, opening up computational ways of engaging with the information.');
    const neigh2 = createElementText('p', 
        'The graph is given agency by deploying a rule-based growth algorithm on the project site. A path-finding logic is used to generate schemes, with specific rule determining the resulting character of the neighborhood while ensuring the computed spatial relationships are maintained. The decoupling of formal agency from the hands of the human designer signifies a crucial step towards a fully autonomous construction framework. Yet, with the rule-based system, designers are still given control without the possibility to resort to the sculpting of form, thus prioritizing a logic-driven approach, rather than aesthetics.');
    proj.pushContents(neighHead, neighsubHead, neigh0, neigh1, neigh2);

    //level 1 home
    const unitHead = createElementText('h3', 
        "Level 1 Home");
    const unitSubHead = createElementText('h4', 
        'Home Is What You Do')
    const unit0 = createElementText('p', 
        'On the next scale down, a customisation system for the individual home allows the architecture to respond to the daily patterns of each member of the community.');
    const unit1 = createElementText('p', 
        'The actual units on site are a negotiated result where site constraints, unit requirements and shared activities come together. Using a relational model allows the unit to adapt to the site while still maintaining its important connections.');
    const unit2 = createElementText('p', 
        'Level of details (LOD) are gradually added to the raw space distribution from the growth algorithm, turning abstract space into concrete architecture.');
    proj.pushContents(unitHead, unitSubHead, unit0, unit1, unit2);

    //level 2 tectonics
    const tectoHead = createElementText('h3', "Level 2 Tectonics");
    const tectoSubHead = createElementText('h4', 'Home Is What You Do')
    const tecto0 = createElementText('p', 
        'On the next scale down, a customisation system for the individual home allows the architecture to respond to the daily patterns of each member of the community.');




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