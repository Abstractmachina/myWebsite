// import profile00 from '../assets/profilePic00.jpg';

const loadRightMain = (parent) => {
    const rightContainer = document.createElement('main');
    rightContainer.classList.add("mainContainer", "right");


    const background = document.createElement('div');
    background.classList.add('background');
    // background.src = profile00;

    const circleContainer = document.createElement('div');
    circleContainer.classList.add('circleContainer');

    const c1 = document.createElement('div');
    c1.classList.add('circle');
    c1.classList.add('circleDesign');
    const c2 = document.createElement('div');
    c2.classList.add('circle');
    c2.classList.add('circleCode');
    const c3 = document.createElement('div');
    c3.classList.add('circle');
    c3.classList.add('circleArt');

    circleContainer.append(c1, c2, c3);
    rightContainer.append(circleContainer, background);

    parent.appendChild(rightContainer);

    return rightContainer;
};

export default loadRightMain;