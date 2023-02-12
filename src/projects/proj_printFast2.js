import { Project } from "../scripts/Project"
import { createCompositeFigure, createElementText, createFigure, createImage} from "../scripts/util";

import cita0 from '../assets/printFast2/cita0.jpg';
import cita1 from '../assets/printFast2/cita1.jpg';
import cita2 from '../assets/printFast2/cita2.jpg';
import cita3 from '../assets/printFast2/cita3.jpg';
import cita4 from '../assets/printFast2/cita4.jpg';
import cita5 from '../assets/printFast2/cita5.jpg';
import cita6 from '../assets/printFast2/cita6.jpg';
import cita7 from '../assets/printFast2/cita7.jpg';
import cita8 from '../assets/printFast2/cita8.jpg';
import cita9 from '../assets/printFast2/cita9.jpg';

const printFast2 = () => {
    let proj = new Project("Print Fast, Pile High V2!", 2019, "Copenhagen, Denmark");

    proj.Subtitle = "Refining the approach & more printing";

    proj.addCategory("academic");
    proj.addCategory("teaching");
    proj.addCategory("additive manufacturing");
    proj.addCategory("design");
    proj.addCategory("code");

    const title = createElementText('h1', proj.Title);
    const subtitle = createElementText('h2', proj.Subtitle);
    const year = createElementText('h5', 'Project Year: ' + proj.Year);
    const location = createElementText('h5', 'Project Location: ' + proj.Location);

    const git = document.createElement('h5');
    git.innerHTML = '<a href=https://github.com/Abstractmachina/PrintFastPileHigh_V2>Github</a>'

    const team = document.createElement('p');
    team.innerHTML = 
        '<strong>Team:</strong>Taole Chen, Federico Borello, Gabriella Rossi';
  
    const img_cover = new Image();
    img_cover.src = cita5;
    proj.pushContents(title, subtitle, year, location, git, img_cover, team);
    
    //Intro
    const introHeading = createElementText('h3', 
        "Introduction");
    const intro0 = createElementText('p', 
        "In the second iteration of the workshop, the toolkit was refined and implemented as a dedicated Grasshopper plugin. We had the chance to apply the toolkit to a different setup with different robots and different students. As a whole, the workshop ran much more smoothly and we were able to focus on the design exploration rather than technical troubleshooting, which gave us some interesting results. E.g. one group tried to print interlocking pieces with a dowel-like system which was unexpected.");

    const img0 = createImage(cita0);
        const img1 = createFigure(cita4, "Printing to fail is the desired approach in iterative design")
    const img2 = createFigure(cita3, 
        "Experimentation with toolpath modulation");
    const img3 = createImage(cita6);
    const img4 = createFigure(cita8, "Student outcome");
    const img5 = createFigure(cita7, 'Exhibit at the final jury review');
    const img6 = createImage(cita2); 
    const img7 = createFigure(cita9, "Students working in teams, learning from each other");

    proj.pushContents(introHeading, intro0,img0, img1, img2, img3, img4, img5, img6, img7);

    //FEATURES
    const featureHeading = createElementText('h2', 
        "Features");
    const feature = document.createElement('p');
    feature.innerHTML = 
        "In terms of features, the toolkit is roughly the same. A main difference is the implementation as a GH plugin and the addition of concurrent computing, making it more robust and much faster.";

    proj.pushContents(featureHeading, feature);

    //TECHNOLOGIES
    const techHeading = createElementText('h2', 'Technologies');
    const tech = document.createElement('ul');
    const tech1 = createElementText('li', 'C#');
    const tech2 = createElementText('li', 'KukaPRC for robotic kinematic simulation and GCode generation');
    const tech3 = createElementText('li', 'SpatialSlur');
    const tech4 = createElementText('li', '2.5D data matrix implementation in Grasshopper');
    tech.append(tech1, tech2, tech3,tech4);

    return proj;
};


export default printFast2;