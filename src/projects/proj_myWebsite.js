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

    const ti = createElementText('h1', project.Title);
    const subTi = createElementText('h2', project.Subtitle);
    //intro
    const introheading = createElementText('h3', 'Introduction');
    const intro = document.createElement('p');
    intro.textContent = 'This website was built completely from scratch by me to showcase the projects I have done over the years. It served as a great project to put everything I have learned about web development into practice. Please feel free to browse around and I am happy to receive any and all feedback.'
    //features
    const featuresHeading = createElementText('h3', 'Features');
    const features = document.createElement("ul");
    const feat1 = createElementText("li", 'MVC architecture allows for future re-use of the core logic in different graphical environments.');
    const feat2 = createElementText("li", 'Vanilla JS only to keep the project lightweight and because the goal was to practice my JS skills, rather than my knowledge on libraries');
    const feat3 = createElementText("li", 'Unit testing for core classes');
    const feat4 = createElementText("li", 'Streamlined method for adding more projects as packaged objects in the future to improve maintainability');
    const feat5 = createElementText("li", 'Projects are searchable by category to ease navigation');
    features.append(feat1, feat2,feat3, feat4, feat5);
    //technologies
    const techHeading = createElementText('h3', 'Technologies');
    const tech = document.createElement('ul');
    const tech1 = createElementText('li', 'HTML, CSS, JS');
    const tech2 = createElementText('li', 'Jest Unit Testing');
    const tech3 = createElementText('li', 'Webpack asset bundling');
    tech.append(tech1, tech2, tech3);

    //development
    const devHeading = createElementText('h3', 'Development');
    const dev = document.createElement('ul');
    const dev1 = createElementText('li', 'blog section');
    dev.append(dev1);


    project.pushContents(
        ti, subTi, introheading, intro, 
        featuresHeading, features, 
        techHeading, tech,
        devHeading, dev);

    return project;
}

export default myWebsite;