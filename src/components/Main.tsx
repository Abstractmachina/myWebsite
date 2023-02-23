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


const Main:FC = ({}): ReactElement => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        window.addEventListener('popstate', (e) => {
            console.log( "main: ");
            console.log(e.target);
        })
    }, [])

    function openDrawer() {
        // console.log(location)
        // console.log(navigate);
        window.history.pushState({num:49}, '', '/about');

    }
    
    return (
        <div className='testMain'>

            <h2>Create contextual drawer navigation</h2>
            <button id="btn_openDrawer" onClick={openDrawer}>
                Open Drawer
            </button>
            {/* <Link to="/about" state={{ background: location }}>
                Open Drawer
            </Link> */}
            <Outlet/>
        </div>
    );
}

export default Main;