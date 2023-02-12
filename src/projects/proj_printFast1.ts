import Project from "../types/Project"
import React, {ReactElement} from 'react';
// import { createElementText, createFigure } from "../scripts/util";

//media
import cat0 from '../assets/printFast1/catalog0.jpg';
import cat1 from '../assets/printFast1/catalog1.jpg';
import cat2 from '../assets/printFast1/catalog2.jpg';
import cat3 from '../assets/printFast1/catalog3.jpg';
import dia0 from '../assets/printFast1/diagram00.jpg';
import dia1 from '../assets/printFast1/diagram01.jpg';
import print0 from '../assets/printFast1/print0.jpg';
import print1 from '../assets/printFast1/print1.jpg';
import ContentElement from "../types/ContentElement";

const printFast1 = () => {
    let proj = new Project("Print Fast, Pile High V1!", 2018, "Shanghai, China");
    proj.Subtitle = "2.5D Modeling Technique for Designing 3D-Printable Structures";

    proj.addCategory("academic");
    proj.addCategory("teaching");
    proj.addCategory("additive manufacturing");
    proj.addCategory("design");
    proj.addCategory("code");

    proj.pushContents(
        new ContentElement("h1", proj.Title, false),
        new ContentElement('h2', proj.Subtitle, false),
        new ContentElement('h5', 'Project Year: ' + proj.Year, false),
        new ContentElement('h5', 'Project Location: ' + proj.Location, false),
        new ContentElement('h5', 
            '<a href=https://github.com/Abstractmachina/PrintFastPileHigh_V2>Github</a>', 
            true),
        new ContentElement('p', 
            '<strong>Team:</strong> Shajay Bhooshan, Taole Chen, Federico Borello, Xuexin (Snow) Duan<br><strong>Assistants:</strong> Yifan Zhou, Ce Li<br>', 
            true),
        new ContentElement(
            "img", 
            '', 
            false, 
            { attributes: {"src": cat0}}
        )
    );

    //INTRODUCTION
    proj.pushContents(
        new ContentElement('h3', 
            "Introduction", 
            false),
        new ContentElement('p', 
            "Print Fast Pile High was a series of workshops initiated by the ZHCode team to develop design methodologies for 3D printing applications, more specifically the workshops served as a way to combine principles found in unreinforced masonry and imaging techniques gleaned from the medical imaging field. A novel technique using function-representation (Frep) to generate 3D printable shapes is applied to clay printing. The students were given the challenge to print fast and stack high, thus giving them a fun constraint to test their designs on. The first workshop was held in Shanghai, China at Tongji University for the occasion of the Digital Futures Conference where leaders from various disciplines come together to explore the implications of digital technologies.", 
            false),
        new ContentElement('p',
            "Students were encouraged to iterate fast and fail fast, building an intuitive understanding of the design space in the process. A custom toolkit connecting design with fabrication developed specifically for this workshop took out the need for the students to learn the non-essential details and get to designing from day 1.",
            false),
        new ContentElement('div', 
            '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/792779095?h=c1320e9415&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Print Fast Pile High - Clay 3D printing failures"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
            true,
            {
                attributes: {className: 'projectVideoContainer'}
            }
        ),
        new ContentElement('figure', 
            '',
            false,
            {
                children: [
                    new ContentElement("img", '', false, {
                        attributes: {src: print0}
                    }),
                    new ContentElement('figcaption', 'fig: Students operating robot', false)
                ]
            }
        )
    );

    // const figure = document.createElement('figure');
    // const img = new Image();
    // img.src = source;
    // const capt = document.createElement('figcaption');
    // capt.textContent = 'fig: ' + caption;
    // figure.append(img, capt);
            
        // const img_print0 = createFigure(print0, "Students operating robot")
        // const img_print1 = createFigure(print1, "students working around the lab");
        // const img_cat1 = createFigure(cat1, 'print failures. Accidental beauty is sometimes also found');
        // const img_cat2 = createFigure(cat2, 'Successful prints. Over time, failures turn to sucesses, turn to refined objects');
        // const  img_cat3 = createFigure(cat3, 'Quantity in iterative design trumps quality');
    
        // proj.pushContents(introHeading, intro0, intro1, vid_failures,img_print0, img_print1, img_cat1, img_cat2,img_cat3);

        // //Intro

    // proj.pushContents(introHeading, intro0, intro1, vid_failures,img_print0, img_print1, img_cat1, img_cat2,img_cat3);



    // //FEATURES
    // const featureHeading = createElementText('h2', 
    //     "Features");
    // const feature = document.createElement('p');
    // feature.innerHTML = 
    //     "The plugin implements the SDF function approach to generate 3D-printable forms outlined in the paper <em>Function Representation for Robotic 3D Printed Concrete</em> (Bhooshan 2018).";

    // const featureList = document.createElement('ul');
    // const p1 = document.createElement('li');
    // p1.textContent = "Blending, boolean and plane trimming operations to manipulate field functions";
    // const p2 = document.createElement('li');
    // p2.textContent = "Robotic kinematic simulation and GCode Generation for direct fabrication link";
    // const p3 = document.createElement('li');
    // p3.textContent = "Display components to visualize geometric output";
    // featureList.append(p1,p2,p3);

    // const img_diagram0 = createFigure(dia0, 'Summary diagram');
    // const img_diagram1 = createFigure(dia1, 'Basic principle of Frep-modeling');

    // proj.pushContents(featureHeading, feature, img_diagram0, img_diagram1, featureList);

    // //TECHNOLOGIES
    // const techHeading = createElementText('h2', 'Technologies');
    // const tech = document.createElement('ul');
    // const tech1 = createElementText('li', 'C#');
    // const tech2 = createElementText('li', 'KukaPRC for robotic kinematic simulation and GCode generation');
    // const tech3 = createElementText('li', 'SpatialSlur');
    // const tech4 = createElementText('li', '2.5D data matrix implementation in Grasshopper');
    // tech.append(tech1, tech2, tech3,tech4);

    return proj;
};


export default printFast1;