import { createElementText } from "../util";

import instalogo from '../assets/logo_insta.svg';
import linkedinLogo from '../assets/logo_linkedin.svg';
import cvLogo from '../assets/logo_cv.svg';

const loadContactTab = (parent) => {
    const contactTab = document.createElement('div');
    contactTab.classList.add('contact');

    const heading = createElementText('h1', 'Contact');
    const email = createElementText('h2', 'taole.chen@protonmail.com');

    const linkContainer = document.createElement('div');
    const linkedin = document.createElement('a');
    linkedin.setAttribute('href', 'https://www.linkedin.com/in/taole-chen-1166b25a/')
    const img_linkedin = new Image();
    img_linkedin.src = linkedinLogo;
    linkedin.appendChild(img_linkedin);

    const insta = document.createElement('a');
    insta.setAttribute('href', 'https://www.instagram.com/taole.chen/')
    const img_insta = new Image();
    img_insta.src = instalogo;
    insta.appendChild(img_insta);

    const cv = document.createElement('a');
    cv.setAttribute('href', '#');
    const img_cv = new Image();
    img_cv.src = cvLogo;
    cv.appendChild(img_cv);

    linkContainer.append(linkedin, insta, cv);


    const bottomEdge = document.createElement('div');
    bottomEdge.classList.add('bottomEdge');
    bottomEdge.textContent = 'close'

    contactTab.append(heading, email, linkContainer, bottomEdge);


    parent.appendChild(contactTab);

    return contactTab;
}

export default loadContactTab;