import { Project } from "../scripts/Project"
import { createElementText, createImages, createImage, importAllImages, createFigure } from "../scripts/util";

//media



const barbican = () => {
    const images = importAllImages(require.context('../assets/barbican/', false, /\.(png|jpe?g|svg)$/));

    let proj = new Project("Barbican", 2020, "London, UK");

    proj.addCategory("art");
    proj.addCategory("ink");

    proj.Subtitle = "The World of Lunch Breaks";


    const title = createElementText('h1', proj.Title);
    const subtitle = createElementText('h2', proj.Subtitle);
    const year = createElementText('h5', 'Project Year: ' + proj.Year);
    const location = createElementText('h5', 'Project Location: ' + proj.Location);

    const brandLink = document.createElement('h5');
    brandLink.innerHTML = '<a href=https://www.inprnt.com/gallery/taole.chen/>Buy Prints</a>'

    const introHeading = createElementText('h3', 
        "Introduction");
    const intro = createElementText('p', 
        'My office used to be nearby, so every lunch break I would grab my food and find a spot to get lost in this magnificent complex, and sketch for a while. Once you walk up the ramp to the main platform, a peacefulness overcomes you and the chaos that is London feels a million miles away.');

    proj.pushContents(title, year, location, brandLink, introHeading, intro);

    console.log(typeof images);
    for(let key in images) {
        console.log('key = ' + key);
        // console.log('value = ' + value);
        const img = createImage(images[key]);
        proj.pushContent(img);
    };

    return proj;
};


export default barbican;