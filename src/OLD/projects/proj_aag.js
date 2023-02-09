import { Project } from "../scripts/Project";
import { createElementText, createFigure} from "../scripts/util";

//media
import aag_cover from '../assets/aag/aag_cover.jpg';
import processDiagram from '../assets/aag/diagram_process.png';
import testPrints from '../assets/aag/tests.jpg';
import ws0 from '../assets/aag/workshop00.jpg';
import ws1 from '../assets/aag/workshop01.jpg';
import exhibit0 from '../assets/aag/exhibition00.jpg';
import exhibit1 from '../assets/aag/exhibition01.jpg';

const aag = () => {
    let proj = new Project(
        "Formwork-Free and Mortar-Free Shell Assembly", 
        2018, 
        "Gothenburg Sweden");
    proj.Subtitle = "Building Design Intution Through Tight-Loop Prototyping";

    proj.addCategory("design");
    proj.addCategory("academic");
    proj.addCategory("teaching");
    proj.addCategory("fabrication");
    proj.addCategory("code");



    const ti = createElementText('h1', proj.Title);
    const subtitle = createElementText('h2', proj.Subtitle);
    const year = createElementText('h5', 'Project Year: ' + proj.Year);
    const location = createElementText('h5', 'Project Location: ' + proj.Location);


    const introheading = document.createElement("h2");
    introheading.textContent = "Introduction";
    const img_cover = new Image();
    img_cover.src = aag_cover;
    //INTRO
    const intro1 = document.createElement("p");
    intro1.textContent = "Formwork-Free and Mortar-Free Shell Assembly is a workshop I led in Gothenburg, Sweden, for the Advances in Architectural Geometry Conference in 2018.";
    const intro2 = document.createElement("p");
    intro2.textContent = "The objective was to demonstrate to students the workings and benefits of the computational design paradigm that allows seamless integration between design, fabrication and assembly in settings where many complex constraints come together, thus making it unsuitable for conventional, analog design methodologies. Pedagogically, the students experienced it firsthand by designing funicular shell structures that hold together without formwork assembly and mortar through a parametric model that embeds fabrication data, subsequently sending their design elements to a robotic arm for hotwire fabrication. This results in a tight feedback loop where students were able to see the effects of their design decisions in a real-world prototype with a minimal delay and adapt their design in the next iteration."; 

    const vid_fab = document.createElement('div');
    vid_fab.classList.add('projectVideoContainer');
    vid_fab.innerHTML = '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/792684368?h=bf02f19b1f&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="AAG - Shells - Fabrication Clip"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>';

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
    const tech = document.createElement('ul');
    const tech1 = createElementText('li', 'C#');
    const tech2 = createElementText('li', 'KukaPRC for robotic kinematic simulation and GCode generation');
    const tech3 = createElementText('li', 'SpatialSlur');
    const tech4 = createElementText('li', 'Half-edge mesh structure to faciliate geometric operations and force simulation');
    tech.append(tech1, tech2, tech3,tech4);


    const img_process = createFigure(processDiagram, 'Process diagram');
    const img_tests = createFigure(testPrints, "Small scale test prints of different interlock designs")
    const img_ws0 = createFigure(ws0, "Class tutorials to introduce tools.")
    const img_ws1 = createFigure(ws1, "Robot workshop for the students")
    const img_exhibit0 = createFigure(exhibit0, "Our spot in the final exhibition")
    const img_exhibit1 = createFigure(exhibit1, "Final exhibition space")

    proj.pushContents(
        ti, subtitle, year, location,
        img_cover, introheading, intro1, 
        img_ws0, img_ws1, intro2, vid_fab, img_exhibit0, img_exhibit1,
        featuresHeading, features, img_process, img_tests, techHeading, tech);

    return proj;
}

export default aag;