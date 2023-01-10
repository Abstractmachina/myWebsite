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
    introheading.textContent = "Introduction";
    proj.pushContent(introheading);
    const intro1 = document.createElement("p");
    intro1.textContent = "Formwork-Free and Mortar-Free Shell Assembly is a workshop I led in Gothenburg, Sweden, for the Advances in Architectural Geometry Conference in 2018.";
    const intro2 = document.createElement("p");
    intro2.textContent = "Shells are historically found in many cultures and are still today widely used in construction due to their structural capacities, stability and force-resistance. Shell construction typically requires the utilisation of formwork which is labour-intensive, takes time and effort to be designed and produces a large amount of waste material. The workshop showcases an alternative formwork & mortar-free, friction-based system for complex, compression-only shell structures. It addresses problems of the current state of shell assembly, e.g. material inefficiency, lack of precision and dependence on human-labour.";
    


}