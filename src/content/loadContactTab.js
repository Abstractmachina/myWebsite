import { createElementText } from "../util";

const loadContactTab = (parent) => {
    const contactTab = document.createElement('div');
    contactTab.classList.add('contact');

    const heading = createElementText('h1', 'Contact');
    const email = createElementText('h2', 'taole.chen@protonmail.com');

    const linkContainer = document.createElement('div');
    const linkedin = document.createElement('a');
    linkedin.setAttribute('href', 'https://www.linkedin.com/in/taole-chen-1166b25a/')
    const img_linkedin = new Image();
    linkedin.appendChild(img_linkedin);

    const insta = document.createElement('a');
    insta.setAttribute('href', 'https://www.instagram.com/taole.chen/')
    const img_insta = new Image();
    insta.appendChild(img_insta);

    linkContainer.append(linkedin, insta)

    contactTab.append(heading, email, linkContainer);



    const cv = document.createElement('a');
    cv.setAttribute('href', '#');
    cv.textContent = "Download CV";


    const about0 = document.createElement('p');
    about0.innerHTML = 
        '<br>I am currently open for new projects. If you\'re looking to collaborate, please feel free to <a href="#">get in touch!</a><br>';
    const about1 = createElementText('p', 
        "I am a multi-disciplinary designer/software developer with a strong focus on computational geometry and fabrication. Previously, I have worked at international architectural practices, most notably Zaha Hadid Architects in London, developing bespoke design solutions and project-specific software tools. I have also collaborated with smaller practices in architecture and fabrication as an independent consultant to improve/establish computational workflow integration.");
    const intro2 = createElementText('p',
        "I hold a MArch in Architecture and Urbanism from the Architectural Association in London UK and a BArch in Architecture with high distinction from the California College of the Arts in San Francisco, California. After getting more and more involved with the development side and the exciting possibilites of marrying design with computation, I decided to pursue continued education in Computer Science at Imperial College London, where I completed a MSc in Computing, with a focus on computer graphics and Machine Learning."); 

    abtContainer.append(linksContainer, about0, about1, intro2);
    const biographyTitle = createElementText('h3', 
        "Biography");

    const bio0 = createElementText('p', 
        "Growing up between cultures and still following a globe-trotting lifetyle in adulthood (Austria, China, US, UK and counting), my multi-cultural experience has perhaps given me a unique perspective on matters. I often try to see and understand the complex systems that weave through our environments, and consequently I believe that design should be approached from a systemic perspective, rather than the prevailing design-as-a-monument paradigm.");
    const bio2 = document.createElement('p');
        bio2.innerHTML = 'I have a keen interest in design research and fabrication. My specialization is in additive manufacturing and AI in architecture, having done two master thesis on the topic and having led workshops at universities around the globe (For more details, please check out the Projects section). I am always on the lookout for continued research opportunities, so please don\'t hesitate to <a href="#">drop me a message!</a>';
    const bio1 = createElementText('p', 
        "I am fascinated by the concept of the Renaissance Man and I enjoy indulging in the pursuit of diverging interests in my free time. My origins are in the fine arts. Having painted, drawn and sculpted all my childhood, I was originally planning to start a career in painting. However, the breadth and rigor of the architectural education was more appealing to me, so I pivoted early on. I have not given up my passion in the arts and I still practice whenever I can. My hope is that some day I can find a happy, amalgamating medium between all my interests and create something novel and meaningful.");
        
    abtContainer.append(biographyTitle, document.createElement('hr'), bio0, bio2, bio1);
    contactTab.append(leftEdge, abtContainer);
    parent.appendChild(contactTab);

    return contactTab;
}

export default loadContactTab;