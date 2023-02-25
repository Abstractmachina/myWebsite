import Project from "../types/Project"
import {ContentElement as ce} from "../types/ContentElement";

//media
import cover from '../assets/organic/oc_yoga-4398.jpg';
import i00 from '../assets/organic/oc_bra1-3875.jpg';
import i01 from '../assets/organic/oc_bra1-3907.jpg';
import i02 from '../assets/organic/oc_bra1-4005.jpg';
import i03 from '../assets/organic/oc_bra2-4531.jpg';
import i04 from '../assets/organic/oc_bra3-4084.jpg';
import i05 from '../assets/organic/oc_top3-4800.jpg';
import i06 from '../assets/organic/oc_yoga-4167.jpg';
import i07 from '../assets/organic/oc_yoga-4406.jpg';
import i08 from '../assets/organic/oc_yoga-4458.jpg';
import i09 from '../assets/organic/oc_yoga-4512.jpg';
import i10 from '../assets/organic/oc_yoga-5001.jpg';
import i11 from '../assets/organic/oc_yoga-4979.jpg';
import i12 from '../assets/organic/oc_yoga-5056.jpg';
import i13 from '../assets/organic/oc_yoga-5069.jpg';


const organic = () : Project => {
    let proj = new Project("Organic Code Apparel", 2022, "Jeju, South Korea");

    proj.addCategory("art");
    proj.addCategory("photography");

    proj.Subtitle = "Product Shoot for Bralette and Top Series";


     //HEADING
     proj.pushContents(
        ce.H1(proj.Title),
        ce.H2(proj.Subtitle),
        ce.H5('Project Year: ' + proj.Year),
        ce.H5('Project Location: ' + proj.Location),
        ce.H5('<a href=https://www.instagram.com/organic_code_/>Brand Link</a>', true),
        ce.Image(cover),
     );

     //INTRO
    proj.pushContents(
        ce.H3("Introduction"),
        ce.P('I was approached by my friend to help her brand do a product shoot for her latest series featuring bralets and tops. Organic Code specializes in hand-made apparel using naturally-dyed 100% organic cotton, made locally on Jeju Island. '),
        new ce('div', '<strong>Models:</strong> <a href="https://www.instagram.com/esngmn/">Seungmin Lee</a>, <a href="https://www.instagram.com/llamobelen/">Gayoung Lee</a>', true) ,
    );

    let images = ce.Images(i03,i00, i01, i02,i04,i05,i06,i07,i08,i09,i10,i11,i12,i13);
    
    images.forEach(img => {proj.pushContent(img)});
    
    return proj;
};


export default organic;