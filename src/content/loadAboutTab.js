const loadAboutTab = (parent) => {
    const aboutTab = document.createElement('div');
    aboutTab.classList.add('about');

    const cv = document.createElement('a');
    cv.setAttribute('href', '');
    cv.textContent = "Download CV";


    const intro1 = document.createElement('p');
    intro1.textContent ="I worked as a computational designer at Zaha Hadid Architects at their London HQ, initially at ZHCode, later as project member within the wider office-internal ecosystem. I contributed as a conventional designer from concept to construction, but also leveraged my knowledge in computational design methodologies through developing bespoke design solutions and project-specific software tools. I have previously also worked as a freelancer, providing general design services as well as consultation for studios who are in need of computational/parametric workflow integration, but lack the capacity to have their own in-house specialists.";

    const intro2 = document.createElement('p');
    intro2.textContent = "I hold a MArch in Architecture and Urbanism from the Architectural Association in London UK and a BArch in Architecture with high distinction from the California College of the Arts in San Francisco, California. Most recently, I have pursued continued education in Computer Science at Imperial College London, where I completed a MSc in Computing, with a focus on computer graphics and Machine Learning, as I believe that a deep understanding of the underlying technological foundation, which increasingly supports and drives all aspects of architecture, as well as future trajectories, is essential to stay relevant in our profession."; 

    const intro3 = document.createElement('p');
    intro3.textContent = "I have a keen interest in design research and fabrication. My specialization is in additive manufacturing and AI in architecture, having done two master thesis on the topic and having led workshops at universities around the globe (For more details, please check out the Projects section). I am always on the lookout for continued research opportunities, so please don't hesitate to get in touch!";

    const biographyTitle = document.createElement('h3');
    biographyTitle.textContent = "Biography";

    const bioBody = document.createElement('p');
    bioBody.textContent = "Having lived in four countries on three continents (Austria, China, US, UK) and counting, my multi-cultural experience has perhaps given me a unique perspective on matters. I often try to see and understand the complex systems that weave through our environments, and consequently I believe that design should be approached from a systemic perspective, rather than the prevailing design-as-a-monument paradigm. I am fascinated by the concept of the Renaissance Man and I enjoy to indulge in the pursuit of diverging interests. My origins are actually in the fine arts. Having painted, drawn, sculpted all my childhood, at the end of high school, I was entirely prepared to start a career in painting. However, the breadth and rigor of the architectural education was more appealing to me, so I pivoted early on. As an aspiring renaissance man, I have not given up my passion in the arts and I still practice whenever possible. Similarly, ";

    aboutTab.append(cv, intro1, intro2, intro3, biographyTitle, bioBody);

    parent.appendChild(aboutTab);

    return aboutTab;
}

export default loadAboutTab;