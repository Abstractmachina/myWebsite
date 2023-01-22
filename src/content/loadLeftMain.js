import loadReturnArrow from "./loadReturnArrow";

const loadLeftMain = (parent) => {
    const leftContainer = document.createElement('main');
    leftContainer.classList.add("mainContainer", "left");

    const banner = document.createElement('div');

    const myName = document.createElement('h1');
    myName.textContent = 'Taole Chen';

    const subtitle = document.createElement('h2');
    subtitle.textContent = 'design | code | art';

    banner.append(myName, subtitle);
    const intro = document.createElement('p');
    intro.textContent = "I am a multi-disciplinary designer operating at the intersection of design, technology and art. I like to solve problems and build things. I am professionally trained in architecture and computer science. ";

    const btn_profile = document.createElement('button');
    btn_profile.id = 'btn_profile';
    btn_profile.textContent = "Full Profile"   

    const returnArrow = loadReturnArrow(btn_profile);

    const header = document.createElement('header');
    header.append(banner, intro, btn_profile);

    leftContainer.append(header);

    parent.appendChild(leftContainer);

    
    return leftContainer;
};

export default loadLeftMain;