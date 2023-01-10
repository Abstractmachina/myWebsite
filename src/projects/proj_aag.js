import { Project } from "../Project";

const aag = () => {
    let proj = new Project(
        "Formwork-Free and Mortar-Free Shell Assembly", 
        2018, 
        "Gothenburg Sweden");

    proj.addCategory("design");
    proj.addCategory("academic");
    proj.addCategory("teaching");
    proj.addCategory("fabrication");


    const ti = document.createElement('h1');
    ti.textContent = proj.Title;
    proj.pushContent(ti);
    const introheading = document.createElement("h2");


    


}