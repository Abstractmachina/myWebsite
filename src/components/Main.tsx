// import pArrowBase from '../assets/arrow_projectIndex_base.svg';
import preview_design from '../assets/matnet/fab_05.jpg';
import preview_code from '../assets/lbd/HiveMindClasses.jpg';
import preview_art from '../assets/barbican_00.jpg';

import React, { FC, ReactElement, useEffect, useState } from 'react';
import { ProjectInfo } from '../types/interfaces';
import ContentElement from '../types/ContentElement';
import { BrowserRouter as Router, Route, Routes, Navigate, Link, useLocation, Outlet, useNavigate } from 'react-router-dom';


import LeftMain from './LeftMain';
import RightMain from './RightMain';
import Footer from './Footer';
import AboutTab from './AboutTab';
import IndexTabController from './IndexTabController';
import ProjectTab from './ProjectTab';
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
    // const background = location.state && location.state.background;
    const _swipeSensitivity:number = 60;

    const [showContact, setShowContact] = useState(false);
    const [showIndex, setShowIndex] = useState(false);
    const [showProject, setShowProject] = useState(false);

    const [currentProjectContent, setCurrentProjectContent] = useState(new Array<ContentElement>());


    useEffect(() => {
        if (window.sessionStorage.getItem('indexState') === 'on') {
            callIndexTab();
            window.sessionStorage.setItem('indexState', 'off');
        }
    },[])

    function callContactCard() {
        setShowContact(true);
    }
    function hideContactCard() {
        setShowContact(false);
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
            <LeftMain 
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
            <ContactTab 
                show={showContact} 
                hideContact={hideContactCard}/>
        </div>
    );
}

export default Main;