import Project from "../types/Project"
import ContentElement from "../types/ContentElement";

//media
import cat0 from '../assets/printFast1/catalog0.jpg';
import cat1 from '../assets/printFast1/catalog1.jpg';
import cat2 from '../assets/printFast1/catalog2.jpg';
import cat3 from '../assets/printFast1/catalog3.jpg';
import dia0 from '../assets/printFast1/diagram00.jpg';
import dia1 from '../assets/printFast1/diagram01.jpg';
import print0 from '../assets/printFast1/print0.jpg';
import print1 from '../assets/printFast1/print1.jpg';

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
        ContentElement.Figure(print0, 'Students operating robot'),
        ContentElement.Figure(print1, 'Students working around the lab'),
        ContentElement.Figure(cat1, 'print failures. Accidental beauty is sometimes also found'),
        ContentElement.Figure(cat2, 'Successful prints. Over time, failures turn to sucesses, turn to refined objects'),
        ContentElement.Figure(cat3, 'Quantity in iterative design trumps quality'),
    );
            
    //FEATURES
    proj.pushContents(
        new ContentElement('h2', 'Features', false),
        new ContentElement('p', 
            'The plugin implements the SDF function approach to generate 3D-printable forms outlined in the paper <em>Function Representation for Robotic 3D Printed Concrete</em> (Bhooshan 2018).', 
            true),
        new ContentElement('ul', 
            '', 
            false, 
            { children: [
                new ContentElement('li', "Blending, boolean and plane trimming operations to manipulate field functions", false),
                new ContentElement('li', "Robotic kinematic simulation and GCode Generation for direct fabrication link", false),
                new ContentElement('li', "Display components to visualize geometric output", false),
                ]
            }
        ),
        ContentElement.Figure(dia0,'Summary diagram'),
        ContentElement.Figure(dia1,'Basic principle of Frep-modeling'),
    )


    //TECHNOLOGIES
    proj.pushContents(
        new ContentElement('h2', 
            'Technologies',
            false),
        new ContentElement('ul', 
            '', 
            false,
            {
                children: [
                new ContentElement('li', 'C#', false),
                new ContentElement('li', 'KukaPRC for robotic kinematic simulation and GCode generation', false),
                new ContentElement('li', 'SpatialSlur - A geometric processing library', false),
                new ContentElement('li', '2.5D data matrix implementation in Grasshopper', false),
                ]
            }
        ),
    )
    return proj;
};


export default printFast1;