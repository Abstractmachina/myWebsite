import { Project } from "../Project";
import { createElementText } from "../util";
import aag_cover from '../assets/aag/aag_cover.jpg'

const aag = () => {
    let proj = new Project(
        "Formwork-Free and Mortar-Free Shell Assembly", 
        2018, 
        "Gothenburg Sweden");

    proj.addCategory("design");
    proj.addCategory("academic");
    proj.addCategory("teaching");
    proj.addCategory("fabrication");
    proj.addCategory("code");



    const ti = createElementText('h1', proj.Title);
    const introheading = document.createElement("h2");
    introheading.textContent = "Introduction";
    const img_cover = new Image();
    img_cover.src = aag_cover;
    //INTRO
    const intro1 = document.createElement("p");
    intro1.textContent = "Formwork-Free and Mortar-Free Shell Assembly is a workshop I led in Gothenburg, Sweden, for the Advances in Architectural Geometry Conference in 2018.";
    const intro2 = document.createElement("p");
    intro2.textContent = "The objective was to demonstrate to students the workings and benefits of the computational design paradigm that allows seamless integration between design, fabrication and assembly in settings where many complex constraints come together, thus making it unsuitable for conventional, analog design methodologies. Pedagogically, the students experienced it firsthand by designing funicular shell structures that hold together without formwork assembly and mortar through a parametric model that embeds fabrication data, subsequently sending their design elements to a robotic arm for hotwire fabrication. This results in a tight feedback loop where students were able to see the effects of their design decisions in a real-world prototype with a minimal delay and adapt their design in the next iteration."; 
    //Features
    const featuresHeading = createElementText("h2", 'Features');
    const features = document.createElement("ul");
    const feat1 = createElementText("li", 'Bespoke Grasshopper plugin providing functionality for the creation of shell segments ready for fabrication');
    const feat2 = createElementText("li", 'Integrates SpatialSlur, a geometric data manipulation library');
    const feat3 = createElementText("li", 'Shell structural evaluation implementing thrust network analysis on half-edge mesh structures');
    const feat4 = createElementText("li", 'Integration with custom-made robotic hotwire-cutter');
    features.append(feat1, feat2,feat3, feat4);
    //Technologies
    const techHeading = createElementText('h2', 'Technologies');
    const tech = document.createElement('div');
    const tech1 = createElementText('li', 'C#');
    const tech2 = createElementText('li', 'KukaPRC for robotic kinematic simulation and GCode generation');
    const tech3 = createElementText('li', 'SpatialSlur');
    const tech4 = createElementText('li', 'Half-edge mesh structure to faciliate geometric operations and force simulation');
    tech.append(tech1, tech2, tech3,tech4);

    proj.pushContents(ti, img_cover, introheading, intro1, intro2, 
        featuresHeading, features, techHeading, tech);

    return proj;
}

export default aag;