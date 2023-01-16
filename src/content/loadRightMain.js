const loadRightMain = (parent) => {
    const rightContainer = document.createElement('div');
    rightContainer.classList.add("mainContainer", "right");

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
    rightContainer.append(circleContainer);

    parent.appendChild(rightContainer);

    return rightContainer;
};

export default loadRightMain;