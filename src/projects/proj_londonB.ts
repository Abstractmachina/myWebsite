import Project from "../types/Project"
import {ContentElement as ce} from "../types/ContentElement";

//media
import lon00 from '../assets/londonBldg/londonBldg_68.jpg';
import lon01 from '../assets/londonBldg/londonBldg_69.jpg';
import lon02 from '../assets/londonBldg/londonBldg_70.jpg';
import lon03 from '../assets/londonBldg/londonBldg_71.jpg';
import lon04 from '../assets/londonBldg/londonBldg_72.jpg';
import lon05 from '../assets/londonBldg/londonBldg_73.jpg';
import lon06 from '../assets/londonBldg/londonBldg_74.jpg';
import lon07 from '../assets/londonBldg/londonBldg_75.jpg';
import lon08 from '../assets/londonBldg/londonBldg_76.jpg';
import lon09 from '../assets/londonBldg/londonBldg_77.jpg';
import lon12 from '../assets/londonBldg/londonBldg_80.jpg';
import lon13 from '../assets/londonBldg/londonBldg_81.jpg';
import lon14 from '../assets/londonBldg/londonBldg_82.jpg';
import lon15 from '../assets/londonBldg/londonBldg_83.jpg';
import lon16 from '../assets/londonBldg/londonBldg_84.jpg';



const londonBldg = () : Project => {
    let proj = new Project("Buildings of London", 2021, "London, UK");

    proj.addCategory("art");
    proj.addCategory("ink");

    proj.Subtitle = "How I Spent the Lockdowns In London";

  //HEADING
    proj.pushContents(
        ce.H1(proj.Title),
        ce.H2(proj.Subtitle),
        ce.H5('Project Year: ' + proj.Year),
        ce.H5('Project Location: ' + proj.Location),
        ce.H5('<a href=https://www.inprnt.com/gallery/taole.chen/>Buy Prints</a>', true),
    );
    
    //INTRODUCTION
    proj.pushContents(
        ce.H3("Introduction"),
        ce.P('A selection of ink drawings I did of interesting buildings around London. I was dabbling in ink before, but during lockdown I finally graduated from my A5 sketchbook to A4 and then A3, starting to think more about composition and presentation. Most of them are drawn on location and then finished at home.'),
    );

    proj.pushContents(
        ce.Figure(lon00, "New Google HQ under construction"),
        ce.Figure(lon01, "London canal harbor"),
        ce.Figure(lon02, "British Library"),
        ce.Figure(lon03, "Space Buidling"),
        ce.Figure(lon04, "Somewhere next to a London canal"),
        ce.Figure(lon05, "Facade"),
        ce.Figure(lon06, "Facade"),
        ce.Figure(lon07, "Alexandra & Ainsworth Estate"),
        ce.Figure(lon08, "Ashmount Primary School next to the Parkland Walk"),
        ce.Figure(lon09, "View from my Balcony during Lockdown"),
        ce.Figure(lon12, "Coal Drops Yard"),
        ce.Figure(lon13, "Coal Drops Yard 2"),
        ce.Figure(lon14, "St. Pancras"),
        ce.Figure(lon15, "Camden Town Hall Annexe"),
        ce.Figure(lon16, "Institute of Education"),
    );

    return proj;
}

export default londonBldg;