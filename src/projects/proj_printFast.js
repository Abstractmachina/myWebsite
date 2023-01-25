import { Project } from "../scripts/Project"

const printFast = () => {
    let proj = new Project("Print Fast, Pile High!", 2019, "Copenhagen, Denmark");

    proj.addCategory("academic");
    proj.addCategory("teaching");
    proj.addCategory("additive manufacturing");
    proj.addCategory("design");
    proj.addCategory("code");



    const introHeading = document.createElement('h2');
    introHeading.textContent = "Introduction";
    proj.pushContent(introHeading);
    const intro = document.createElement('p');
    intro.textContent = "This is a Grasshopper plugin developed for a series of workshops titled \"Print Fast Pile High\", an offshoot from design research and material experimentation on 3D-printing conducted at the AADRL and Shajay Bhooshan's PhD research on concrete additive manufacturing. The workshop is a collaborative design-build exercise which seeks synergies between computational masonry and 3D printing with soft-rigid materials. The aim is to explore geometries which are structurally aware and their associated design space, in relation to their materiality and fabrication technology. Clay is used as material and its dominant compression capacity is the main parameter to explore and use to design digital geometries accordingly. Traditional layer-by-layer 3d printing methods is questioned in favor of a methodology which aligns geometric representation in digital space with the physical manufacturing process. Function Representations (F-Rep) and image based technology is employed to generate digital geometries with a custom toolkit before to be translated into robotic instructions for the physical world. "
    proj.pushContent(intro);

    const featureHeading = document.createElement('h2');
    featureHeading.textContent = "Features";
    proj.pushContent(featureHeading);

    const feature = document.createElement('p');
    feature.textContent = "The plugin implements the SDF function approach to generate 3D-printable forms outlined in the paper Function Representation for Robotic 3D Printed Concrete (Bhooshan 2018).";
    proj.pushContent(feature);

    const featureList = document.createElement('ul');
    const p1 = document.createElement('li');
    p1.textContent = "Blending, boolean and plane trimming operations to manipulate field functions";
    const p2 = document.createElement('li');
    p2.textContent = "Multi-threading for calculation-intensive components";
    const p3 = document.createElement('li');
    p3.textContent = "Display components to visualize geometric output";
    featureList.append(p1,p2,p3);
    proj.pushContent(featureList);

    return proj;
};


export default printFast;