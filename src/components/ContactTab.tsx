
import instalogo from '../assets/logo_insta.svg';
import linkedinLogo from '../assets/logo_linkedin.svg';
// import cvLogo from '../assets/logo_cv.svg';

import React, { FC, useState, ReactElement, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

import {motion} from 'framer-motion'

type ContactProps = {
    show: boolean;
    setContactState: (state:boolean) => void;
}

const variants = {
    closed: { bottom: '100%' },
    open: { bottom: '50%' },
  }

const ContactTab : FC<ContactProps> = ( {show, setContactState}):ReactElement => {

    function handleHideContact() {
        setContactState(false);
    }

    return (
        <motion.div 
            className='contact'
            initial={{bottom: '100%'}}
            animate={show ? "open" : "closed"}
            variants={variants}
        >
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
        </motion.div>
    );
}

export default ContactTab;