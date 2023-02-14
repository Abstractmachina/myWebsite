import Project from "../types/Project"
import {ContentElement as ce} from "../types/ContentElement";

//media
import g00 from '../assets/gaudi/gaudi_00.jpg';
import g01 from '../assets/gaudi/gaudi_01.jpg';
import g02 from '../assets/gaudi/gaudi_02.jpg';
import g03 from '../assets/gaudi/gaudi_03.jpg';
import g04 from '../assets/gaudi/gaudi_04.jpg';
import g05 from '../assets/gaudi/gaudi_05.jpg';



const gaudi = () : Project => {
    let proj = new Project("Gaudi", 2020, "London, UK");

    proj.addCategory("art");
    proj.addCategory("ink");

    proj.pushContents(
        ce.H1(proj.Title),
        ce.H2(proj.Subtitle),
        ce.H5('Project Year: ' + proj.Year),
        ce.H5('Project Location: ' + proj.Location),
        ce.H5('<a href=https://www.inprnt.com/gallery/taole.chen/>Buy Prints</a>', true),
    );

    proj.pushContents(
        ce.H3("Introduction"),
        ce.P('Studies of the Sagrada Familia in ink. The cathedral is designed by the great Gaudi, one of the greats in architecture. One of my favorite buildings.'),
    );

    proj.pushContents(
        ce.Figure(g00, "Section perspective of the grand nave"),
        ce.Figure(g01, "A detail view from the transept looking up"),
        ce.Image(g02),
        ce.Image(g03),
        ce.Image(g04),
        ce.Image(g05),
    );

    return proj;
};


export default gaudi;