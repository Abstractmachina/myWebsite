// import loadReturnArrow from "./loadReturnArrow";
// import { createElementText } from "../scripts/util";
// import loadLogo from "./loadLogo";
// import loadProjectArrow from "./loadProjectArrow";


import React, { FC, ReactElement } from "react";
import Logo from "./Logo";
import IndexArrow from "./IndexArrow";
import ReturnArrow from "./ReturnArrow";

type LeftMainProps = {
    callContactCardHandler: () => void;
    callIndexTabHandler: () => void;
}

const LeftMain : FC<LeftMainProps> = ( {callContactCardHandler, callIndexTabHandler}): ReactElement => {

    function handleCallContactCard() {
        callContactCardHandler();
    }
    function handleCallIndexTab() {
        console.log("leftmain: call index invoked")
        callIndexTabHandler();
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
            <IndexArrow clickHandler={handleCallIndexTab}/>
        </header>
    </main>
    );
}

export default LeftMain;