import loadReturnArrow from "./loadReturnArrow";
import { createElementText } from "../scripts/util";
import loadLogo from "./loadLogo";
import loadProjectArrow from "./loadProjectArrow";

const loadLeftMain = (parent) => {
    const main = document.createElement('main');
    main.classList.add("mainContainer", "left");
    const header = document.createElement('header');
    const svg = loadLogo(main);
    
    const banner = document.createElement('div');
    banner.classList.add('logo', 'contactCall');
    // const myName = document.createElement('h1');
    // myName.textContent = 'Taole Chen';

    const subtitle = document.createElement('h2');
    subtitle.textContent = 'design | code | art';

    banner.append(svg, subtitle);
    const intro = document.createElement('p');

    const content = document.createElement('div');
    intro.textContent = "I am a multi-disciplinary designer and developer operating at the intersection of design, technology and art. I like to solve problems and build things. I am professionally trained in architecture and computer science. ";

    const btn_profile = document.createElement('div');
    btn_profile.id = 'btn_profile';
    const profileText = createElementText('div', "Full Profile");   
    btn_profile.appendChild(profileText);

    const returnArrow = loadReturnArrow(btn_profile);

   
    header.append(intro, btn_profile);


    

    main.append(banner, header);
    const btn_index = loadProjectArrow(main);
    parent.appendChild(main);

    
    return main;
};

export default loadLeftMain;