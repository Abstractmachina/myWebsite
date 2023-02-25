import Project from '../types/Project';
import {ContentElement as ce} from '../types/ContentElement';
//media
import aag_cover from '../assets/aag/aag_cover.jpg';
import processDiagram from '../assets/aag/diagram_process.png';
import testPrints from '../assets/aag/tests.jpg';
import ws0 from '../assets/aag/workshop00.jpg';
import ws1 from '../assets/aag/workshop01.jpg';
import exhibit0 from '../assets/aag/exhibition00.jpg';
import exhibit1 from '../assets/aag/exhibition01.jpg';

const aag = () :Project => {
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


    //HEADING
    proj.pushContents(
        ce.H1(proj.Title),
        ce.H2(proj.Subtitle),
        ce.H5('Project Year: ' + proj.Year),
        ce.H5('Project Location: ' + proj.Location),
    )

    //INTRO
    proj.pushContents(
        ce.H2("Introduction"),
        ce.Image(aag_cover),
        ce.P("Formwork-Free and Mortar-Free Shell Assembly is a workshop I led in Gothenburg, Sweden, for the Advances in Architectural Geometry Conference in 2018."),
        ce.P("The objective was to demonstrate to students the workings and benefits of the computational design paradigm that allows seamless integration between design, fabrication and assembly in settings where many complex constraints come together, thus making it unsuitable for conventional, analog design methodologies. Pedagogically, the students experienced it firsthand by designing funicular shell structures that hold together without formwork assembly and mortar through a parametric model that embeds fabrication data, subsequently sending their design elements to a robotic arm for hotwire fabrication. This results in a tight feedback loop where students were able to see the effects of their design decisions in a real-world prototype with a minimal delay and adapt their design in the next iteration."),
        ce.VimeoClip("https://player.vimeo.com/video/792684368?h=bf02f19b1f&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479", 'projectVideoContainer')
    );

    //Features
    proj.pushContents(
        ce.H2('Features'),
        new ce("ul", null, false, {
            children: [
                new ce('li', 'Bespoke Grasshopper plugin providing functionality for the creation of shell segments ready for fabrication'),
                new ce("li", 'Integrates SpatialSlur, a geometric data manipulation library'),
                new ce("li", 'Shell structural evaluation implementing thrust network analysis on half-edge mesh structures'),
                new ce("li", 'Integration with custom-made robotic hotwire-cutter'),
            ]
        }),
    );
    //Technologies
    proj.pushContents(
        ce.H2('Technologies'),
        new ce("ul", null, false, {
            children: [
                new ce('li', 'C#'),
                new ce('li', 'KukaPRC for robotic kinematic simulation and GCode generation'),
                new ce('li', 'SpatialSlur'),
                new ce('li', 'Half-edge mesh structure to faciliate geometric operations and force simulation'),
                ]
            }
        ),
        ce.Figure(processDiagram, 'Process diagram'),
        ce.Figure(testPrints, "Small scale test prints of different interlock designs"),
        ce.Figure(ws0, "Class tutorials to introduce tools."),
        ce.Figure(ws1, "Robot workshop for the students"),
        ce.Figure(exhibit0, "Our spot in the final exhibition"),
        ce.Figure(exhibit1, "Final exhibition space"),
    );
    return proj;
}

export default aag;