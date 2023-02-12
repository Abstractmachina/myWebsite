import Project from "../types/Project";
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
        ce.P('This website was built completely from scratch by me to showcase the projects I have done over the years. It served as a great project to put everything I have learned about web development into practice. Please feel free to browse around and I am happy to receive any and all feedback.'),
    );

    //features
    project.pushContents(
        ce.H3('Features'),
        new ce("ul", null, false, {
            children: [
                new ce("li", 'MVC architecture allows for future re-use of the core logic in different graphical environments.'),
                new ce("li", 'Vanilla JS only to keep the project lightweight and because the goal was to practice my JS skills, rather than my knowledge on libraries'),
                new ce("li", 'Unit testing for core classes'),
                new ce("li", 'Streamlined method for adding more projects as packaged objects in the future to improve maintainability'),
                new ce("li", 'Projects are searchable by category to ease navigation'),
                new ce("li", 'Responsive design'),
            ]
        }
        )
    );

    //technologies
    project.pushContents(
        ce.H3('Technologies'),
        new ce('ul', null, false, {
            children: [
                new ce('li', 'HTML, SCSS, JS'),
                new ce('li', 'Jest Unit Testing'),
                new ce('li', 'Webpack asset bundling'),
            ]
        })
    );

    //development
    project.pushContents(
        ce.H3('Development'),
        new ce('ul', null, false, {
            children: [
                new ce('li', 'blog section'),
            ]
        }
        )
    );

    return project;
}

export default myWebsite;