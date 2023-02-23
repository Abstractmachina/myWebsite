
import instalogo from '../assets/logo_insta.svg';
import linkedinLogo from '../assets/logo_linkedin.svg';
// import cvLogo from '../assets/logo_cv.svg';

import React, { FC, useState, ReactElement, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useNavigate } from 'react-router-dom';


type ContactProps = {
    show: boolean;
    hideContact: () => void;
}

const ContactTab : FC<ContactProps> = ( {show, hideContact}):ReactElement => {

    const navigate = useNavigate();

    useEffect(() => {
        if (show) navigate('/contact');
        else navigate('../');

    }, [show])

    function handleHideContact() {
        hideContact();
    }

    return (
        <CSSTransition
        in = {show}
        timeout={0}
        classNames="slideFromTop"
        unmountOnExit>
        <div className='contact'>
            <div className='contactWrapper'>
                <h1>Contact</h1>
                <h2>taole.chen@protonmail.com</h2>
                <div>
                    <a href='https://www.linkedin.com/in/taole-chen-1166b25a/'>
                        <img src = {linkedinLogo} alt="linkedin logo"/>
                    </a>
                    <a href='https://www.instagram.com/taole.chen/'>
                        <img src = {instalogo} alt="instagram logo"/>
                    </a>
                </div>
            </div>
            <div className='bottomEdge' onClick={handleHideContact}>close</div>
        </div>
        </CSSTransition>
    );
}

export default ContactTab;