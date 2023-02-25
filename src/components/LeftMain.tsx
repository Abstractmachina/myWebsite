import React, { FC, ReactElement } from "react";
import Logo from "./Logo";
import IndexArrow from "./IndexArrow";
import ReturnArrow from "./ReturnArrow";

import {motion, PanInfo} from 'framer-motion'
import { SWIPE_THRESHOLD } from "../CONSTANTS";

type LeftMainProps = {
    setContactCardState: (state:boolean) => void;
    setIndexTabState: (state:boolean) => void;
    setAboutState: (state:boolean) => void;
    // setProjectTabState: (state:boolean) => void;
}

const LeftMain : FC<LeftMainProps> = ( {setContactCardState, setIndexTabState, setAboutState}): ReactElement => {

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
        let element = e.target;

        //switches for checking if wrong element was clicked
        let hideIndex = true;
        let hideContact = true;
        let hideAbout = true;

        while (element) {
            if (element.id === "projectArrow") {
                hideIndex = false;
            }
            if (element.classList.contains("contactCall")) {
                hideContact = false;
            }
            if (element.id === "btn_profile") {
                hideAbout = false;
            }
            if (element.classList.contains("left")) break;
            element = element.parentNode;
        }

        if (hideIndex)setIndexTabState(false);
        if (hideContact) setContactCardState(false);
        // setProjectTabState(false);
        if (hideAbout) setAboutState(false);
    }

    function handlePan(e:any, info:PanInfo) {
       

        let offsetX = info.offset.x;
        let offsetY = info.offset.y;

        //left swipe
        if (offsetX+ SWIPE_THRESHOLD < 0) { 
            setAboutState(true);
        }
        //up swipe
        if (offsetY + SWIPE_THRESHOLD < 0) { 
            setIndexTabState(true);
        }
        //dow n swipe
        if (offsetY - SWIPE_THRESHOLD > 0) { 
            setContactCardState(true);
        }
    }

    return(
    <motion.main 
        className="mainContainer left" 
        initial={{top:'100%'}}
        animate={{
            top:0,
            transition: {
                ease: "easeOut",
                duration: 0.4,
            }
        }}
        onClick={(e) =>handleExitAllTabs(e)}
        onPanEnd={handlePan}
    >
        <div className="logo contactCall" 
            onClick={handleCallContactCard}
        >
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
    </motion.main>
    );
}

export default LeftMain;