import Project from "../types/Project"
import {ContentElement as ce} from "../types/ContentElement";
//media

import i00 from '../assets/barbican/barb00.jpg';
import i01 from '../assets/barbican/barb01.jpg';
import i02 from '../assets/barbican/barb02.jpg';
import i03 from '../assets/barbican/barb03.jpg';
import i04 from '../assets/barbican/barb04.jpg';
import i05 from '../assets/barbican/barb05.jpg';
import i06 from '../assets/barbican/barb06.jpg';
import i07 from '../assets/barbican/barb07.jpg';
import i08 from '../assets/barbican/barb08.jpg';
import i09 from '../assets/barbican/barb09.jpg';
import i10 from '../assets/barbican/barb10.jpg';
import i11 from '../assets/barbican/barb11.jpg';
import i12 from '../assets/barbican/barb12.jpg';
import i13 from '../assets/barbican/barb13.jpg';
import i14 from '../assets/barbican/barb14.jpg';



const barbican = () => {
    // const images = importAllImages(require.context('../assets/barbican/', false, /\.(png|jpe?g|svg)$/));

    let proj = new Project("Barbican", 2020, "London, UK");

    proj.addCategory("art");
    proj.addCategory("ink");

    proj.Subtitle = "The World of Lunch Breaks";

    proj.pushContents(
        ce.H1(proj.Title),
        ce.H2(proj.Subtitle),
        ce.H5('Project Year: ' + proj.Year),
        ce.H5('Project Location: ' + proj.Location),
        ce.H5('<a href=https://www.inprnt.com/gallery/taole.chen/>Buy Prints</a>', true),
    );

    //INTRO
    proj.pushContents(
        ce.H3("Introduction"),
        ce.P('My office used to be nearby, so every lunch break I would grab my food and find a spot to get lost in this magnificent complex, and sketch for a while. Once you walk up the ramp to the main platform, a peacefulness overcomes you and the chaos that is London feels a million miles away.'),
    );

    let images = ce.Images(i00,i01,i02,i03,i04,i05,i06,i07,i08,i09,i10,i11,i12,i13,i14);
    images.forEach(i => proj.pushContent(i));

    return proj;
};


export default barbican;