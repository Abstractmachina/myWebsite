import React, { useState, useEffect, FC, ReactElement } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useNavigate } from 'react-router-dom';

type AboutProps = {
    show:boolean;
    setState: (state:boolean) => void;
}

const AboutTab: FC<AboutProps> = ({show, setState}) : ReactElement => {

    const navigate = useNavigate();
    // const [show, setShow] = useState(false);

    function toggleThisPage(e:any) {
        setState(!show);
    }

    return (
        <CSSTransition
        in = {show}
        appear = {true}
        timeout={0}
        classNames="slideFromRight">
            <div className="about">
                <div className="leftEdge" onClick={toggleThisPage}>information</div>
                <div className="aboutContainer">
                    <div className="links">
                        <a>taole.chen@protonmail.com</a>
                        <a href="'https://www.instagram.com/taole.chen/">Instagram</a>
                    </div>
                    <p>I am currently open for new projects. If you're looking to collaborate, please feel free to <a href="#" className="contactCall">get in touch!</a>
                    </p>
                    <p>I am a multi-disciplinary designer/software developer with a strong focus on computational geometry and fabrication. Previously, I have worked at international architectural practices, most notably Zaha Hadid Architects in London, developing bespoke design solutions and project-specific software tools. I have also collaborated with smaller practices in architecture and fabrication as an independent consultant to improve/establish computational workflow integration.</p>    
                    <p>I hold a MArch in Architecture and Urbanism from the Architectural Association in London UK and a BArch in Architecture with high distinction from the California College of the Arts in San Francisco, California. After getting more and more involved with the development side and the exciting possibilites of marrying design with computation, I decided to pursue continued education in Computer Science at Imperial College London, where I completed a MSc in Computing, with a focus on computer graphics and Machine Learning.</p>
                    <h3>Biography</h3>
                    <hr/>
                    <p>Growing up between cultures and still following a globe-trotting lifetyle in adulthood (Austria, China, US, UK and counting), my multi-cultural experience has perhaps given me a unique perspective on matters. I often try to see and understand the complex systems that weave through our environments, and consequently I believe that design should be approached from a systemic perspective, rather than the prevailing design-as-a-monument paradigm."</p>
                    <p>I have a keen interest in design research and fabrication. My specialization is in additive manufacturing and AI in architecture, having done two master thesis on the topic and having led workshops at universities around the globe (For more details, please check out the Projects section). I am always on the lookout for continued research opportunities, so please don\'t hesitate to <a href="#" className="contactCall">drop me a message!</a></p>
                    <p>I am fascinated by the concept of the Renaissance Man and I enjoy indulging in the pursuit of diverging interests in my free time. My origins are in the fine arts. Having painted, drawn and sculpted all my childhood, I was originally planning to start a career in painting. However, the breadth and rigor of the architectural education was more appealing to me, so I pivoted early on. I have not given up my passion in the arts and I still practice whenever I can. My hope is that some day I can find a happy, amalgamating medium between all my interests and create something novel and meaningful.</p>
                </div>
            </div>
        </CSSTransition>
    );
}

export default AboutTab;