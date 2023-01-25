import { Project } from "../scripts/Project"
import { createElementText, createFigure} from "../scripts/util";

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
        "In the second iteration of the workshop, the toolkit was refined and implemented as a dedicated Grasshopper Plugin. We had the chance to apply the toolkit to a different setup with different robots and different students and it was enlightening to see how much ");
    const intro1 = createElementText('p', 
        "Students were encouraged to iterate fast and fail fast, building an intuitive understanding of the design space in the process. A custom toolkit connecting design with fabrication developed specifically for this workshop took out the need for the students to learn the non-essential details and get to designing from day 1.")
    
    const vid_failures = document.createElement('div');
    vid_failures.classList.add('projectVideoContainer');
    vid_failures.innerHTML = 
        '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/792779095?h=c1320e9415&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Print Fast Pile High - Clay 3D printing failures"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>';


    const img_print0 = createFigure(print0, "Students operating robot")
    const img_print1 = createFigure(print1, "students working around the lab");
    const img_cat1 = createFigure(cat1, 'print failures. Accidental beauty is sometimes also found');
    const img_cat2 = createFigure(cat2, 'Successful prints. Over time, failures turn to sucesses, turn to refined objects');
    const  img_cat3 = createFigure(cat3, 'Quantity in iterative design trumps quality');

    proj.pushContents(introHeading, intro0, intro1, vid_failures,img_print0, img_print1, img_cat1, img_cat2,img_cat3);



    //FEATURES
    const featureHeading = createElementText('h2', 
        "Features");
    const feature = document.createElement('p');
    feature.innerHTML = 
        "The plugin implements the SDF function approach to generate 3D-printable forms outlined in the paper <em>Function Representation for Robotic 3D Printed Concrete</em> (Bhooshan 2018).";

    const featureList = document.createElement('ul');
    const p1 = document.createElement('li');
    p1.textContent = "Blending, boolean and plane trimming operations to manipulate field functions";
    const p2 = document.createElement('li');
    p2.textContent = "Robotic kinematic simulation and GCode Generation for direct fabrication link";
    const p3 = document.createElement('li');
    p3.textContent = "Display components to visualize geometric output";
    featureList.append(p1,p2,p3);

    const img_diagram0 = createFigure(dia0, 'Summary diagram');
    const img_diagram1 = createFigure(dia1, 'Basic principle of Frep-modeling');

    proj.pushContents(featureHeading, feature, img_diagram0, img_diagram1, featureList);

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