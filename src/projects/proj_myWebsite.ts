import Project from "../types/Project";
import img00 from "../assets/myWebsite/website_00.jpg";
import {ContentElement as ce} from "../types/ContentElement";

const myWebsite = ():Project => {
    let project = new Project(
        "Personal Portfolio Website",
        2023,
        'Earth'
    );

    project.Subtitle = "This one";

    project.addCategory("design");
    project.addCategory("code");

    //HEADING
    project.pushContents(
        ce.H1(project.Title),
        ce.H2(project.Subtitle),
        ce.H5('Project Year: ' + project.Year),
        ce.H5('Project Location: ' + project.Location),
        ce.H5('<a href="https://github.com/Abstractmachina/myWebsite">Github</a>', true),
    );

   

    //intro
    project.pushContents(
        ce.H3('Introduction'),
        ce.P('I built this website from the ground up to showcase the body of work I have done over the years. Additionally, it serves as a sandbox environment for me to test out web development-related ideas. Please feel free to browse around and I am happy to receive any and all feedback.'),
    );
    
    project.pushContent(ce.Image(img00));

    //features
    project.pushContents(
        ce.H3('Features'),
        new ce("ul", null, false, {
            children: [
                new ce("li", 'MVC architecture allows for future re-use of the core logic in different graphical environments'),
                new ce("li", 'Originally developed in vanilla JS, I have recently migrated it to Reactjs and TypeScript to ensure future maintainability and to practice my front-end skills'),
                new ce("li", 'React-Router and Framer Motion added'),
                new ce("li", 'Generic ContentElement class with HTML-like syntax for content building. Elements are converted into language-specific elements for implementation (e.g. HTML or JSX)'),
                new ce("li", 'Streamlined method for adding more projects as packaged objects in the future to improve maintainability'),
                new ce("li", 'Responsive client-side design'),
            ]
        }
        )
    );

    //technologies
    project.pushContents(
        ce.H3('Technologies'),
        new ce('ul', null, false, {
            children: [
                new ce('li', 'HTML, Sass, TypeScript, Reactjs, React Router, Framer Motion, Figma'),
                new ce('li', 'Jest Unit Testing'),
                new ce('li', 'Webpack asset bundling'),
            ]
        })
    );

    //development
    project.pushContents(
        ce.H3('Development'),
        ce.P('This website is continually being improved. Features will be added and upgraded as I learn more.'),
        new ce('ul', null, false, {
            children: [
                new ce('li', 'Redux state managaement'),
                new ce('li', 'front-end testing'),
                new ce('li', 'separate art and design section'),
                new ce('li', 'content management system'),
            ]
        }
        )
    );

    return project;
}

export default myWebsite;