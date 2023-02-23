// import pArrowBase from '../assets/arrow_projectIndex_base.svg';
import preview_design from '../assets/matnet/fab_05.jpg';
import preview_code from '../assets/lbd/HiveMindClasses.jpg';
import preview_art from '../assets/barbican_00.jpg';

import React, { FC, ReactElement, useEffect, useState } from 'react';
import { ProjectInfo } from '../types/interfaces';
import ContentElement from '../types/ContentElement';
import { BrowserRouter as Router, Route, Routes, Navigate, Link, useLocation, Outlet } from 'react-router-dom';


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

// type MainProps = {
//     getCategoriesHandler: () => string[] | null;
//     getProjectInfoHandler: (categories:string[]) => ProjectInfo[];
//     getContentHandler: (id:string) => ContentElement[];
// }

const TestDrawer:FC = ({}): ReactElement => {
    const location = useLocation();

useEffect(() => {
    window.addEventListener('popstate', (e) => {
        console.log("testdrawer: ");
        console.log(e);})
}, []);

    return (
        <div className='testDrawer'>
            {/* <LeftMain 
                callContactCardHandler={callContactCard} 
                callIndexTabHandler={callIndexTab} 
                callAboutPageHandler={callAboutPage}
                hideIndexTabHandler= {hideIndexTab}
                hideContactCardHandler = {hideContactCard}
                hideProjectTabHandler = {hideProjectTab}/> */}
            {/* <RightMain/> */}
            {/* <Footer/> */}

            <h2>Drawer</h2>
            {/* <Link to="/about" state={{ background: location }}>
                Open Modal
            </Link>
            <Outlet/> */}
        </div>
    );
}

export default TestDrawer;