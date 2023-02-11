// import pArrowBase from '../assets/arrow_projectIndex_base.svg';
import preview_design from '../assets/matnet/fab_05.jpg';
import preview_code from '../assets/lbd/HiveMindClasses.jpg';
import preview_art from '../assets/barbican_00.jpg';

import React, { FC, ReactElement, useState } from 'react';
import { ProjectInfo } from '../types/interfaces';
import ContentElement from '../types/ContentElement';

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

type GuiProps = {
    getCategoriesHandler: () => string[] | null;
    getProjectInfoHandler: (categories:string[]) => ProjectInfo[];
    getContentHandler: (id:string) => ContentElement[];
}

const GUI:FC <GuiProps> = ({getCategoriesHandler, getProjectInfoHandler, getContentHandler}): ReactElement => {

    const _swipeSensitivity:number = 60;

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
        let content = getContentHandler(id);
        setCurrentProjectContent(content);
        callProjectTab();
    }

    // function handleGetContent() {
    //     getContentHandler();
    // }

    // bindCallProjectPages(handler) {
    //     const table = document.querySelector('.projectIndexTable');
    //     const rows = table.querySelectorAll('tr');
    //     for (let i = 0; i < rows.length; i++) {
    //         const row = rows[i];
    //         row.addEventListener('click', () => {
    //             handler(row.id);
    //             for (let j = 0; j < rows.length; j++) {
    //                 rows[j].classList.remove('selected');
    //             }
    //             row.classList.add('selected');
    //         })
    //     }
    // }

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
            <ProjectTab 
                show={showProject} 
                content={currentProjectContent}/>
            <ContactTab 
                show={showContact} 
                hideContact={hideContactCard}/>
        </div>
    );

    //     //setup bindings

    //     this._bindExitTabsOnLeftMainClicked();
    //     this._bindTabLeftEdges();
    //     this._bindSwipeProjectExit();
    //     this._bindSwipeAboutExit();
    //     this._bindSwipeIndexExit();
    //     this._bindSwipeMainMenu();
        
    // }
    
    // //==================    BINDINGS =====================================
    

    // _bindExitTabsOnLeftMainClicked() {
    //     this._leftMain.addEventListener('click', (e) =>{
    //             // e.stopPropagation();


    //             let t = e.target;
    //             let isProjectArrow = false;
    //             let isProfileButton = false;
    //             while (t.parentNode) {
    //                 if (t.id === 'projectArrow') isProjectArrow = true;
    //                 if (t.id === 'btn_profile') isProfileButton = true;
    //                 t = t.parentNode

    //             }
    //             if (!isProjectArrow) {
    //                 this._exitIndexTab();
    //                 this._projectTab.classList.remove('slideInFromRight');
    //             }
    //             if (!isProfileButton) {
    //                 this._aboutTab.classList.remove('slideInFromRight');
    //             }
    //     });
    // }



    // _bindTabLeftEdges() {
    //     const edges = document.querySelectorAll('.leftEdge');

    //     for (let i = 0; i < edges.length;i++) {
    //         let e = edges[i];
    //         let parent = e.parentNode;

    //         e.addEventListener('click', () => {
    //             parent.classList.toggle('slideInFromRight');
    //             parent.style.left = null;
    //             parent.style.width = null;
    //             this.clearAllSelectedProjects();
    //         });
    //         e.addEventListener('mouseover', () => {
    //             var style = window.getComputedStyle(parent),
    //                 left = style.getPropertyValue('left');
    //                 let splits = left.split('px');
    //                 let shift = parseFloat(splits[0]) - 5;
    //                 parent.style.left = shift + 'px';

    //                 let width = style.getPropertyValue('width');
    //                 let w_splits = width.split('px');
    //                 let w_shift = parseFloat(w_splits[0]) + 5;
    //                 parent.style.width = w_shift + 'px';

    //         })
    //         e.addEventListener('mouseout', () => {
    //             parent.style.left = null;
    //             parent.style.width = null;
    //         })
    //     }
    // }

    // clearAllSelectedProjects() {
    //     const projectselections = document.querySelectorAll('.selected');
    //     for (let i = 0; i < projectselections.length; i++) {
    //         projectselections[i].classList.remove('selected');
    //     }
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


    // //===============   HOVER PREVIEW   ===========================
    // bindHoverProjects(handler) {
    //     const table = document.querySelector('.projectIndexTable');
    //     const rows = table.querySelectorAll('tr');

    //     for (let i = 0; i < rows.length; i++) {
    //         const row = rows[i];
    //         const categories = handler(row.id);
    //         row.addEventListener('mouseover', () => {
    //             this._callPreviewCircles(categories);
    //         });
    //         row.addEventListener('mouseout', () => {
    //             this._dismissPreviewCircles(categories);
    //         })
    //     }
    // }

    // //populate preview circles with predefined graphics
    // _callPreviewCircles(categories) {
    //     if (categories.has("design")) {
    //         const container = this._rightMain.querySelector(".circleDesign");
    //         container.style.backgroundImage = "url(" + preview_design + ")";
    //         this._instantiateBanner(container, 200, 'DESIGN');
    //     }
    //     if (categories.has("code")) {
    //         const container = this._rightMain.querySelector(".circleCode");
    //         container.style.backgroundImage = "url(" + preview_code + ")";
    //         this._instantiateBanner(container, 200, 'CODE');
    //     }
    //     if (categories.has("art")) {
    //         const container = this._rightMain.querySelector(".circleArt");
    //         container.style.backgroundImage = "url(" + preview_art + ")";
    //         this._instantiateBanner(container, 200, 'ART');

    //     }
    // }

    // _dismissPreviewCircles(categories) {
    //     const circles = this._rightMain.querySelectorAll('.circle');
    //     for (let i = 0; i < circles.length; i++) {
    //         const c = circles[i];
    //         c.style.backgroundImage = null;
    //     }
    //     const banners = this._app.querySelectorAll('.banner');
    //     for (let i = 0 ; i < banners.length;i++) {
    //         this._app.removeChild(banners[i]);
    //     }
    // }

    // _instantiateBanner(spawnElement, range, content) {
    //     const banner = document.createElement('div');
    //         banner.textContent = content;
    //         banner.classList.add('banner');

    //         let {x, y} = getCenterPos(spawnElement)

    //         let {newX, newY} = getRandomPoint(x,y, range);

    //         banner.style.left = newX + 'px';
    //         banner.style.top = newY + 'px';

    //         this._app.append(banner);

    //         return banner;
    // }

    // _bindCategoryCheckbox(newCat, parent, projects) {

    //         //query checkbox states and rebuild index on click
    //         newCat.addEventListener('change', (e) => {
    //             let checkBoxes = parent.querySelectorAll('input');

    //             //return only the ids that are checked
    //             let filtered = [...checkBoxes]
    //                 .filter(box => box.checked === true)
    //                 .map(box => box.id);

    //             let table = document.querySelector(".projectIndexTable");
    //             this._buildIndexTable(projects, filtered);

    //             let noneCheck = parent.querySelector('#selNone');
    //             noneCheck.checked = false;
    //         });
    // }

    // _bindSelAllCheckbox() {
    //     const filterContainer = this._indexTab.querySelector('.' + this._projectFilterClass);
    //     const selAll = filterContainer.querySelector('#selAll');

    //     selAll.addEventListener('change', () => {
    //         if (selAll.checked) {
    //             //get all checkboxes, turn on
    //             const allChecks = filterContainer.querySelectorAll('input');
    //             for (let i = 0; i < allChecks.length; i++) {
    //                 const box = allChecks[i];
    //                 if (box.id === 'selNone') box.checked = false;
    //                 else if (box.id !== 'selAll') {
    //                     box.checked = true;
    //                     const e = new Event("change");
    //                     box.dispatchEvent(e);
    //                 } 
    //             }
    //         }
    //     });
    // }

    // _bindSelNoneCheckbox() {
    //     const filterContainer = this._indexTab.querySelector('.' + this._projectFilterClass);
    //     const selNone = filterContainer.querySelector('#selNone');

    //     selNone.addEventListener('change', () => {
    //         if (selNone.checked) {
    //             //get all checkboxes, turn on
    //             const allChecks = filterContainer.querySelectorAll('input');
    //             for (let i = 0; i < allChecks.length; i++) {
    //                 const box = allChecks[i];
    //                 if (box.id === selNone.id) continue;
    //                 box.checked = false;
    //                 const e = new Event("change");
    //                 box.dispatchEvent(e);
    //             }
    //         }
    //     });
    // }


    // /**
    //  * Populates Project tab container with content and slides into view.
    //  * @param {<div>} htmlContent ... html div containing all page layout elements
    //  */
    // displayProject(htmlContent) {
    //     const animationClass = 'slideInFromRight';

    //     const contentContainer = this._projectTab.querySelector('.projectContentContainer');
    //     //if project page already shown, slide out, swap content and slide back in.
    //     //timeout added to allow animation to finish.
    //     if (this._projectTab.classList.contains(animationClass)) {
    //         this._projectTab.classList.remove(animationClass);
    //         this._removeAllChildren(contentContainer);
    //         setTimeout(() => {
    //             // this._addCloseProjectButton();
    //             contentContainer.appendChild(htmlContent);
    //             this._projectTab.classList.add(animationClass);
    //         }, 200);
    //         return;
    //     }

    //     this._removeAllChildren(contentContainer);
    //     // this._addCloseProjectButton();
    //     contentContainer.appendChild(htmlContent);
    //     this._projectTab.classList.add(animationClass);

    // }

    // // _addCloseProjectButton() {
    // //     const closeProject = document.createElement('div');
    // //     closeProject.classList.add('closeProject');
    // //     this._projectTab.appendChild(closeProject);

    // //     closeProject.addEventListener('click', () => {
    // //         this._projectTab.classList.remove('slideInFromRight');
    // //     });

    // //     return closeProject;
    // // }

    // _bindCallContactCard() {
    //     const callElements = document.querySelectorAll('.contactCall');
    //     console.log(callElements);

    //     for (let i = 0; i < callElements.length; i++) {
    //         let e = callElements[i];
    //         e.addEventListener('click', () => {
    //             const contactCard = document.querySelector('.contact');
    //             this._enterContactCard();
    //         });
    //     }
    // }

    // _bindExitContactCard() {
    //     const card = this._contactCard;

    //     const bottomEdge = card.querySelector('.bottomEdge');
    //     bottomEdge.addEventListener('click', () => {
    //         this._exitContactCard();
    //     })

    //     bindSwipeEvent(card, 'up', 60, () => {
    //         this._exitContactCard();
    //     })
    // }

    // //======================    ANIMATION   ============================

    // _enterAboutTab() {
    //     this._aboutTab.classList.add('slideInFromRight');
    // }
    // _exitAboutTab() {
    //     this._aboutTab.classList.remove('slideInFromRight');
    // }
    // _enterIndexTab() {
    //     this._indexTab.classList.add('slideUp');
    // }
    // _exitIndexTab() {
    //     this._indexTab.classList.remove('slideUp');

    // }
    // _enterContactCard() {
    //     this._contactCard.classList.add('slideDown');
    // }
    // _exitContactCard() {
    //     this._contactCard.classList.remove('slideDown');
    // }

    // // ==========================   UTILITY ===============================
    //  /**
    //  * 
    //  * @param {Array[Object]} projectData ... field labeled 'categories' required
    //  * @returns an array of unique categories
    //  */
    //  _getUniqueCategories(projectData) {
    //     let categories = new Set();
    //     projectData.forEach(p => {
    //         p.categories.forEach(c => {
    //             categories.add(c);
    //         });
    //     });
    //     return Array.from(categories);
    // }

    // /**
    //  * clear an element
    //  * @param {HTML Element} element 
    //  */
    //     _removeAllChildren(element) {
    //         while (element.lastChild) {
    //             element.removeChild(element.lastChild);
    //         }
    //     }
}

export default GUI;