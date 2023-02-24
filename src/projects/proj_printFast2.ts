import Project from "../types/Project"; 
import {ContentElement as ce} from "../types/ContentElement";

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

const printFast2 = () : Project => {
    let proj = new Project("Print Fast, Pile High V2!", 2019, "Copenhagen, Denmark");

    proj.Subtitle = "Refining the approach & more printing";

    proj.addCategory("academic");
    proj.addCategory("teaching");
    proj.addCategory("additive manufacturing");
    proj.addCategory("design");
    proj.addCategory("code");

    //HEADING
    proj.pushContents(
        ce.H1( proj.Title),
        ce.H2( proj.Subtitle),
        ce.H5('Project Year: ' + proj.Year),
        ce.H5('Project Location: ' + proj.Location),
        new ce('h5',
            '<a href=https://github.com/Abstractmachina/PrintFastPileHigh_V2>Github</a>', true),
        new ce('p',
            '<strong>Team:</strong>Taole Chen, Federico Borello, Gabriella Rossi', true),
      ce.Image(cita5),

    );
    
    //Intro
    proj.pushContents(
        ce.H3("Introduction"),
        ce.P(
            "In the second iteration of the workshop, the toolkit was refined and implemented as a dedicated Grasshopper plugin. We had the chance to apply the toolkit to a different setup with different robots and different students. As a whole, the workshop ran much more smoothly and we were able to focus on the design exploration rather than technical troubleshooting, which gave us some interesting results. E.g. one group tried to print interlocking pieces with a dowel-like system which was unexpected."),
        ce.Image(cita0),
        ce.Figure(cita4, "Printing to fail is the desired approach in iterative design"),
        ce.Figure(cita3, "Experimentation with toolpath modulation"),
        ce.Image(cita6),
        ce.Figure(cita8, "Student outcome"),
       ce.Figure(cita7, 'Exhibit at the final jury review'),
        ce.Image(cita2), 
       ce.Figure(cita9, "Students working in teams, learning from each other"),
    );

    //FEATURES
    proj.pushContents(
        ce.H3("Features"),
        ce.P("In terms of features, the toolkit is roughly the same. A main difference is the implementation as a GH plugin and the addition of concurrent computing, making it more robust and much faster.", true),
    );

    //TECHNOLOGIES
    proj.pushContents(
        ce.H3('Technologies'),
        new ce('ul', null, false, {
            children: [
                new ce('li', 'C#'),
                new ce('li', 'KukaPRC for robotic kinematic simulation and GCode generation'),
                new ce('li', 'SpatialSlur'),
                new ce('li', '2.5D data matrix implementation in Grasshopper'),
            ]}
        ),
    );

    return proj;
};


export default printFast2;