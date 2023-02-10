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
    hideIndexTabHandler: () => void;
    hideContactCardHandler: () => void;

}

const LeftMain : FC<LeftMainProps> = ( {callContactCardHandler, callIndexTabHandler, hideIndexTabHandler, hideContactCardHandler}): ReactElement => {

    function handleCallContactCard() {
        callContactCardHandler();
    }
    function handleCallIndexTab() {
        console.log("leftmain: call index invoked")
        callIndexTabHandler();
    }

    function handleExitAllTabs(e:any) {
        let element = e.target;

        //switches for checking if wrong element was clicked
        let hideIndex = true;
        let hideContact = true;

        while (element) {
            if (element.id === "projectArrow") {
                hideIndex = false;
            }
            if (element.classList.contains("contactCall")) {
                hideContact = false;
            }
            if (element.classList.contains("left")) break;
            element = element.parentNode;
        }

        if (hideIndex)hideIndexTabHandler();
        if (hideContact) hideContactCardHandler();
    }

    return(
    <main className="mainContainer left" onClick={(e) =>handleExitAllTabs(e)}>
        <div className="logo contactCall" onClick={handleCallContactCard}>
            <Logo/>
            <h2>design | code | art</h2>
        </div>
        <header>
            <div className="wrapper"> 
                <p>
                    I am a multi-disciplinary designer and developer operating at the intersection of design, technology and art. I like to solve problems and build things. I am professionally trained in architecture and computer science.
                </p>
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