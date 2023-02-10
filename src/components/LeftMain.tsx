// import loadReturnArrow from "./loadReturnArrow";
// import { createElementText } from "../scripts/util";
// import loadLogo from "./loadLogo";
// import loadProjectArrow from "./loadProjectArrow";


import React, { FC, ReactElement } from "react";
import Logo from "./Logo";
import ProjectArrow from "./ProjectArrow";
import ReturnArrow from "./ReturnArrow";

type LeftMainProps = {
    callContactCardHandler: () => void;
}

const LeftMain : FC<LeftMainProps> = ( {callContactCardHandler}): ReactElement => {

    function handleCallContactCard() {
        callContactCardHandler();
    }

    return(
    <main className="mainContainer left">
        <div className="logo contactCall" onClick={handleCallContactCard}>
            <Logo/>
            <h2>design | code | art</h2>
        </div>
        <header>
            <div className="wrapper"> 
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