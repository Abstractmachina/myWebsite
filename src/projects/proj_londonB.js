import { Project } from "../scripts/Project"
import { createElementText, createImages, createImage, importAllImages, createFigure } from "../scripts/util";

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



const londonBldg = () => {
    // const images = importAllImages(require.context('../assets/londonBldg/', false, /\.(png|jpe?g|svg)$/));

    // console.log(images);
    let proj = new Project("Buildings of London", 2021, "London, UK");

    proj.addCategory("art");
    proj.addCategory("ink");

    proj.Subtitle = "How I Spent the Lockdowns In London";


    const title = createElementText('h1', proj.Title);
    const subtitle = createElementText('h2', proj.Subtitle);
    const year = createElementText('h5', 'Project Year: ' + proj.Year);
    const location = createElementText('h5', 'Project Location: ' + proj.Location);

    const brandLink = document.createElement('h5');
    brandLink.innerHTML = '<a href=https://www.inprnt.com/gallery/taole.chen/>Buy Prints</a>'

    const introHeading = createElementText('h3', 
        "Introduction");
    const intro = createElementText('p', 
        'A selection of ink drawings I did of interesting buildings around London. I was dabbling in ink before, but during lockdown I finally graduated from my A5 sketchbook to A4 and then A3, starting to think more about composition and presentation. Most of them are drawn on location and then finished at home.');

    proj.pushContents(title, subtitle, year, location, brandLink, introHeading, intro);

    const img00 = createFigure(lon00, "New Google HQ under construction");
    const img01 = createFigure(lon01, "London canal harbor");
    const img02 = createFigure(lon02, "British Library");
    const img03 = createFigure(lon03, "Space Buidling");
    const img04 = createFigure(lon04, "Somewhere next to a London canal");
    const img05 = createFigure(lon05, "Facade");
    const img06 = createFigure(lon06, "Facade");
    const img07 = createFigure(lon07, "Alexandra & Ainsworth Estate");
    const img08 = createFigure(lon08, "Ashmount Primary School next to the Parkland Walk");
    const img09 = createFigure(lon09, "View from my Balcony during Lockdown");
    const img12 = createFigure(lon12, "Coal Drops Yard");
    const img13 = createFigure(lon13, "Coal Drops Yard 2");
    const img14 = createFigure(lon14, "St. Pancras");
    const img15 = createFigure(lon15, "Camden Town Hall Annexe");
    const img16 = createFigure(lon16, "Institute of Education");

    proj.pushContents(img00, img01, img02, img03, img04, img05, img06, img07, img08, img09, img12, img13, img14, img15, img16)

    // const images = createImages(i03,i00, i01, i02,i04,i05,i06,i07,i08,i09,i10,i11,i12,i13);
    
    // images.forEach(img => {proj.pushContent(img)});
    return proj;
};


export default londonBldg;