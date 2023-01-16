const loadLeftMain = (parent) => {
    const leftContainer = document.createElement('div');
    leftContainer.classList.add("mainContainer", "left");

    const myName = document.createElement('h1');
    myName.textContent = 'Taole Chen';

    const subtitle = document.createElement('h2');
    subtitle.textContent = 'Design | Code';

    const intro = document.createElement('p');
    intro.textContent = "I am a multidisciplinary creative operating at the intersection of design, technology and art. I like to solve problems and build things. I am professionally trained in architecture and computer science";

    const btn_profile = document.createElement('button');
    btn_profile.id = 'btn_profile';
    btn_profile.textContent = "Full Profile"   

    leftContainer.append(myName, subtitle, intro, btn_profile);

    parent.appendChild(leftContainer);

    
    return leftContainer;
};

export default loadLeftMain;