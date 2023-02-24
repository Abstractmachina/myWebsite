// import pArrowBase from '../assets/arrow_projectIndex_base.svg';
import preview_design from '../assets/matnet/fab_05.jpg';
import preview_code from '../assets/lbd/HiveMindClasses.jpg';
import preview_art from '../assets/barbican_00.jpg';

import React, { FC, ReactElement, useEffect, useState } from 'react';
import { ProjectInfo } from '../types/interfaces';
import ContentElement from '../types/ContentElement';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation, useNavigate } from 'react-router-dom';

import LeftMain from './LeftMain';
import RightMain from './RightMain';
import Footer from './Footer';
import AboutTab from './AboutTab';
import IndexTabController from './IndexController';
import ProjectTab from './ProjectTab';
import ContactTab from './ContactTab';

import Main from './Main';

import '../styles/style_main.scss';
import '../styles/style_anim_projectArrow.scss';
import '../styles/style_anim_checkboxes.scss';
import '../styles/style_mobile.scss';
import '../styles/AboutTab.scss';
import '../styles/animations.scss';
import '../styles/IndexTab.scss';

type GuiProps = {
    getCategoriesHandler: () => string[] | null;
    getProjectInfoHandler: (categories:string[]) => ProjectInfo[];
    getContentHandler: (id:string) => ContentElement[];
}

type TabStates = {
    ContactTab: boolean,
    IndexTab:boolean,
    ProjectTab:boolean,
    AboutTab:boolean,
}

const GUI:FC <GuiProps> = ({getCategoriesHandler, getProjectInfoHandler, getContentHandler}): ReactElement => {

    const location = useLocation();
    const navigate = useNavigate();
    // const background = location.state && location.state.background;
    const _swipeSensitivity:number = 60;

    let states: TabStates;


    const [showContact, setShowContact] = useState(false);
    const [showIndex, setShowIndex] = useState(false);
    const [showProject, setShowProject] = useState(false);

    const [currentProjectContent, setCurrentProjectContent] = useState(new Array<ContentElement>());


    function callContactCard() {
        setShowContact(true);
    }
    function hideContactCard() {
        setShowContact(false);
    }

    function callIndexTab() {
        setShowIndex(true);
        // window.history.pushState(null, '', '/projects');
        navigate('/projects');
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

    function callAboutPage() {

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
            {/* <LeftMain 
                callContactCardHandler={callContactCard} 
                callIndexTabHandler={callIndexTab} 
                callAboutPageHandler={callAboutPage}
                hideIndexTabHandler= {hideIndexTab}
                hideContactCardHandler = {hideContactCard}
                hideProjectTabHandler = {hideProjectTab}/>
            <RightMain/>
            <Footer/>
            <AboutTab/>
            <IndexTabController 
                show={showIndex} 
                getCategoriesHandler={handleGetCategories} 
                getProjectInfoHandler={handleGetProjectInfo}
                selectProjectHandler={handleSelectProject}/>
            <ProjectTab 
                show={showProject} 
                content={currentProjectContent}/>
            <ContactTab 
                show={showContact} 
                hideContact={hideContactCard}/> */}
        

        {/* <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/projects" element={<ProjectTab 
                show={showProject} 
                content={currentProjectContent}/>} />

        </Routes> */}

            {/* {background && (
            <Routes>
                <Route path="/about" element={<AboutTab />} />
                <Route path='/contact' element={<ContactTab/>} />

            </Routes>
             )} */}
            
        </div>
    );

    //     //setup bindings
    //     this._bindTabLeftEdges();
    //     this._bindSwipeProjectExit();
    //     this._bindSwipeAboutExit();
    //     this._bindSwipeIndexExit();
    //     this._bindSwipeMainMenu();
        
    // }
    

    // //===================   SWIPES  ================================
    // _bindSwipeProjectExit() {
    //     const pTab = this._projectTab;
    //     bindSwipeEvent(pTab, 'right', this._swipeSensitivity, () => {
    //         pTab.classList.remove('slideInFromRight');
    //         this.clearAllSelectedProjects();
    //     });
    // }


    // _bindSwipeAboutExit() {
    //     const aTab = this._aboutTab;
    //     bindSwipeEvent(aTab, 'right', this._swipeSensitivity, () => {
    //         this._exitAboutTab();
    //     });        
    // }

    // _bindSwipeIndexExit() {
    //     const iTab = this._indexTab;
    //     bindSwipeEvent(iTab, 'down', this._swipeSensitivity, () => {
    //         this._exitIndexTab();
    //     })
    // }
    
    // _bindSwipeMainMenu() {
    //     const main = this._leftMain;
    //     bindSwipeEvent(main, "left", this._swipeSensitivity, () => {
    //         this._enterAboutTab();
    //     });
    //     bindSwipeEvent(main, "up", this._swipeSensitivity, () => {
    //         this._enterIndexTab();
    //     });
    //     bindSwipeEvent(main, "down", this._swipeSensitivity, () => {
    //         this._enterContactCard();
    //     });
    // }



}

export default GUI;