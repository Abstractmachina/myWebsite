const loadProjectArrow = (parent) => {
    // <a class="link" href="#">
    //     <span class="link__arrow">
    //       <span></span>
    //       <span></span>
    //     </span>
    //     <span class="link__line"></span>
    //     <span class="link__text">Projects</span>
    //   </a>

    const container = document.createElement('a');
    container.classList.add('link');
    container.id = 'projectArrow';

    const linkArrow = document.createElement('span');
    linkArrow.classList.add('link__arrow');
    linkArrow.append(document.createElement('span'), document.createElement('span'));

    const linkLine = document.createElement('span');
    linkLine.classList.add('link__line');
    const linkText = document.createElement('span');
    linkText.classList.add('link__text');
    linkText.textContent = 'projects';

    container.append(linkArrow, linkLine, linkText);

    parent.append(container);

    return container;
};

export default loadProjectArrow;