import { Project } from "../Project";
import { createElementText } from "../util";

const myWebsite = () => {
    let project = new Project(
        "Personal Portfolio Website",
        2023,
        'Earth'
    );

    project.Subtitle = "This one";

    project.addCategory("design");
    project.addCategory("code");

    const ti = createElementText('h1', proj.Title);
    const subTi = createElementText('h2', proj.Subtitle);
    const introheading = createElementText('h2', 'Introduction');

    const intro = document.createElement('p');
    intro.textContent = 'This website was built completely from scratch by me to showcase the projects I have done over the years. It served as a great project to put everything I have learned about web development into practice. Please feel free to browse around and I am happy to receive any and all feedback.'
    const featuresHeading = createElementText('h2', 'Features');
    const features = document.createElement("ul");
    const feat1 = createElementText("li", 'Bespoke Grasshopper plugin providing functionality for the creation of shell segments ready for fabrication');
    const feat2 = createElementText("li", 'Integrates SpatialSlur, a geometric data manipulation library');
    const feat3 = createElementText("li", 'Shell structural evaluation implementing thrust network analysis on half-edge mesh structures');
    const feat4 = createElementText("li", 'Integration with custom-made robotic hotwire-cutter');
    features.append(feat1, feat2,feat3, feat4);

}

export default myWebsite;