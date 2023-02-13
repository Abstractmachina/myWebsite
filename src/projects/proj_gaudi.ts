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
        
    const title = createElementText('h1', proj.Title);
    const subtitle = createElementText('h2', proj.Subtitle);
    const year = createElementText('h5', 'Project Year: ' + proj.Year);
    const location = createElementText('h5', 'Project Location: ' + proj.Location);

    const brandLink = document.createElement('h5');
    brandLink.innerHTML = '<a href=https://www.inprnt.com/gallery/taole.chen/>Buy Prints</a>'

    const introHeading = createElementText('h3', 
        "Introduction");
    const intro = createElementText('p', 
        'Studies of the Sagrada Familia in ink. The cathedral is designed by the great Gaudi, one of the greats in architecture. One of my favorite buildings.');

    proj.pushContents(title, year, location, brandLink, introHeading, intro);

    const img00 = createFigure(g00, "Section perspective of the grand nave");
    const img01 = createFigure(g01, "A detail view from the transept looking up");
    const img02 = createImage(g02);
    const img03 = createImage(g03);
    const img04 = createImage(g04);
    const img05 = createImage(g05);

    proj.pushContents(img00, img01, img02, img03, img04, img05)

    return proj;
};


export default gaudi;