const loadFooter = (parent) => {
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const copyright = document.createElement('p');
    copyright.textContent = "This site was designed and built by me :) © Taole Chen";
    footer.append(copyright);

    parent.appendChild(footer);

    return footer;
};

export default loadFooter;