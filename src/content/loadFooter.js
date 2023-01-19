const loadFooter = (parent) => {
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const copyright = document.createElement('p');
    copyright.textContent = "This page was designed and built by me :) All rights reserved © Taole Chen";
    footer.append(copyright);

    parent.appendChild(footer);

    return footer;
};

export default loadFooter;