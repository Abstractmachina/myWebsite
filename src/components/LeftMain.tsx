// import loadReturnArrow from "./loadReturnArrow";
// import { createElementText } from "../scripts/util";
// import loadLogo from "./loadLogo";
// import loadProjectArrow from "./loadProjectArrow";


import React, { FC, ReactElement } from "react";
import Logo from "./Logo";
import IndexArrow from "./IndexArrow";
import ReturnArrow from "./ReturnArrow";

type LeftMainProps = {
    setContactCardState: (state:boolean) => void;
    setIndexTabState: (state:boolean) => void;
    setAboutState: (state:boolean) => void;
    setProjectTabState: (state:boolean) => void;
}

const LeftMain : FC<LeftMainProps> = ( {setContactCardState, setIndexTabState, setAboutState, setProjectTabState}): ReactElement => {

    function handleCallContactCard() {
        setContactCardState(true);
    }
    function handleCallIndexTab() {
        setIndexTabState(true);
    }

    function handleCallAboutPage() {
        setAboutState(true);
    }

    function handleExitAllTabs(e:any) {
        console.log("asdfas")
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

        if (hideIndex)setIndexTabState(false);
        if (hideContact) setContactCardState(false);
        setProjectTabState(false);
        setAboutState(false);
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
                <div id="btn_profile" onClick={handleCallAboutPage}>
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