
//types
import PreviewObject from '../types/PreviewObject';
import { ProjectInfo } from '../types/interfaces';
import ContentElement from '../types/ContentElement';

//React
import React, { FC, ReactElement, useEffect, useState } from 'react';

//React Components
import LeftMain from './LeftMain';
import RightMain from './RightMain';
import Footer from './Footer';
import AboutTab from './AboutTab';
import IndexController from './IndexController';
import ContactTab from './ContactTab';

type MainProps = {
    getCategoriesHandler: () => string[] | null;
    getProjectInfoHandler: (categories:string[]) => ProjectInfo[];
    getContentHandler: (id:string) => ContentElement[];
    getPreviewData: (id:string) => PreviewObject | undefined;
}

const Main : FC<MainProps> = ({getCategoriesHandler, getProjectInfoHandler, getContentHandler, getPreviewData}): ReactElement => {

    const [showContact, setShowContact] = useState<boolean>(false);
    const [showIndex, setShowIndex] = useState<boolean>(false);
    const [showAbout, setShowAbout] = useState<boolean>(false);

    const [projectPreview, setProjectPreview] = useState<PreviewObject>({
        show:false,
        img:'',
        category: ''
    })


    useEffect(() => {
        //call index tab if stored in history
        if (window.sessionStorage.getItem('indexState') === 'on') {
            setIndexCardState(true);
            //reset index state
            window.sessionStorage.setItem('indexState', 'off');
        }
    },[])

    function setContactCardState(state:boolean) { setShowContact(state);}
    function setIndexCardState(state:boolean) { setShowIndex(state); }
    // function setProjectTabState(state:boolean) { setShowProject(state); }
    function setAboutPageState(state:boolean) { setShowAbout(state);}

    function handleGetCategories():string[] | null {
        return getCategoriesHandler();
    }

    function handleGetProjectInfo(categories:string[]):|ProjectInfo[] {
        return getProjectInfoHandler(categories);
    }

    function handleCallPreview(id:string){
        //fetch project data
        const obj = getPreviewData(id);
        //
        // const pObj:PreviewObject = {show: true, img:'', category: ''}
        if (obj) setProjectPreview(obj);
    }

    function handleDissmissPreview() {
        const pObj:PreviewObject = {show: false, img:'', category: ''}
        setProjectPreview(pObj);
    }

    return (
        <div className='gui'>
            <LeftMain 
                setContactCardState={setContactCardState} 
                setIndexTabState={setIndexCardState} 
                setAboutState={setAboutPageState}
            />
            <RightMain previewObj={projectPreview}/>
            <Footer/>
            <AboutTab show={showAbout} setState={setAboutPageState} setContactState={setContactCardState}/>
            <IndexController 
                show={showIndex} 
                getCategoriesHandler={handleGetCategories} 
                getProjectInfoHandler={handleGetProjectInfo}
                propagateCallPreview={handleCallPreview}
                propagateDismissPreview={handleDissmissPreview}/>
            <ContactTab 
                show={showContact} 
                setContactState={setContactCardState}/>
        </div>
    );
}

export default Main;