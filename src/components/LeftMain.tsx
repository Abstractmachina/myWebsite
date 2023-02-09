// import loadReturnArrow from "./loadReturnArrow";
// import { createElementText } from "../scripts/util";
// import loadLogo from "./loadLogo";
// import loadProjectArrow from "./loadProjectArrow";


import React, { FC } from "react";
import Logo from "./Logo";
import ProjectArrow from "./ProjectArrow";
import ReturnArrow from "./ReturnArrow";

const LeftMain : FC = () => {

    return(
    <main className="mainContainer left">
        <header>
            <div className="wrapper"> 
                <div className="logo contactCall">
                    <Logo/>
                    <h2>design | code | art</h2>
                </div>
                <p>I am a multi-disciplinary designer and developer operating at the intersection of design, technology and art. I like to solve problems and build things. I am professionally trained in architecture and computer science.</p>
                <div id="btn_profile">
                    <div>
                        Full Profile
                    </div>
                    <ReturnArrow/>
                </div>
            </div>
            <ProjectArrow/>
        </header>
    </main>
    );
}

export default LeftMain;