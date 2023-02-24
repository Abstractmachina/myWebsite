// import pArrowBase from '../assets/arrow_projectIndex_base.svg';
import preview_design from '../assets/matnet/fab_05.jpg';
import preview_code from '../assets/lbd/HiveMindClasses.jpg';
import preview_art from '../assets/barbican_00.jpg';

import React, { FC, ReactElement, useEffect, useState } from 'react';
import { ProjectInfo } from '../types/interfaces';
import ContentElement from '../types/ContentElement';
import { useLocation, useNavigate } from 'react-router-dom';


import LeftMain from './LeftMain';
import RightMain from './RightMain';
import Footer from './Footer';
import AboutTab from './AboutTab';
import IndexTabController from './IndexTabController';
import ContactTab from './ContactTab';

import '../styles/style_main.scss';
import '../styles/style_anim_projectArrow.scss';
import '../styles/style_anim_checkboxes.scss';
import '../styles/style_mobile.scss';
import '../styles/AboutTab.scss';
import '../styles/animations.scss';
import '../styles/IndexTab.scss';
import '../styles/ProjectPage.scss';




type MainProps = {
    getCategoriesHandler: () => string[] | null;
    getProjectInfoHandler: (categories:string[]) => ProjectInfo[];
    getContentHandler: (id:string) => ContentElement[];
}

const Main:FC<MainProps> = ({getCategoriesHandler, getProjectInfoHandler, getContentHandler}): ReactElement => {
    const location = useLocation();
    const navigate = useNavigate();
    const _swipeSensitivity:number = 60;

    const [showContact, setShowContact] = useState(false);
    const [showIndex, setShowIndex] = useState(false);
    const [showProject, setShowProject] = useState(false);
    const [showAbout, setShowAbout] = useState(false);

    const [currentProjectContent, setCurrentProjectContent] = useState(new Array<ContentElement>());


    useEffect(() => {
        //call index tab if stored in history
        if (window.sessionStorage.getItem('indexState') === 'on') {
            callIndexTab();
            //reset index state
            window.sessionStorage.setItem('indexState', 'off');
        }
    },[])

    function setContactCard(state:boolean) {
        setShowContact(state);
    }

    function callIndexTab() {
        setShowIndex(true);
    }
    function hideIndexTab() {
        setShowIndex(false);
    }
    function callProjectTab() {
        setShowProject(true);
    }
    function hideProjectTab() {
        setShowProject(false);
    }
    function setAboutPage(state:boolean) {
        setShowAbout(state);
    }

    function handleGetCategories():string[] | null {
        return getCategoriesHandler();
    }

    function handleGetProjectInfo(categories:string[]):|ProjectInfo[] {
        return getProjectInfoHandler(categories);
    }

    function handleSelectProject(id:string) {
        setCurrentProjectContent(new Array<ContentElement>());

        let content = getContentHandler(id);
        setCurrentProjectContent(content);
        callProjectTab();
    }

    return (
        <div className='gui'>
            <LeftMain 
                setContactCardState={setContactCard} 
                callIndexTabHandler={callIndexTab} 
                setAboutState={setAboutPage}
                hideIndexTabHandler= {hideIndexTab}
                hideProjectTabHandler = {hideProjectTab}/>
            <RightMain/>
            <Footer/>
            <AboutTab show={showAbout} setState={setAboutPage} setContactState={setContactCard}/>
            <IndexTabController 
                show={showIndex} 
                getCategoriesHandler={handleGetCategories} 
                getProjectInfoHandler={handleGetProjectInfo}
                selectProjectHandler={handleSelectProject}/>
            <ContactTab 
                show={showContact} 
                setContactState={setContactCard}/>
        </div>
    );
}

export default Main;