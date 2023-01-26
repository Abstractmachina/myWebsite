import pArrowBase from '../assets/arrow_projectIndex_base.svg';
import preview_design from '../assets/matnet/fab_05.jpg';
import preview_code from '../assets/lbd/HiveMindClasses.jpg';
import preview_art from '../assets/barbican_00.jpg';


import { createElementText , getRandomPoint, getCenterPos, bindSwipeEvent } from './util';

import loadAboutTab from '../content/loadAboutTab';
import loadLeftMain from '../content/loadLeftMain';
import loadRightMain from '../content/loadRightMain';
import loadFooter from '../content/loadFooter';
import loadProjectTab from '../content/loadProjectTab';
import loadIndexTab from '../content/loadIndexTab';
import loadContactTab from '../content/loadContactTab';



/**
 * View Object for websites. 
 */
class GUI {

    //class names for query selection
    _projectFilterClass = 'projectFilter';
    _indexButtonId = 'projectArrow';

    _swipeSensitivity = 60;

    constructor(projects) {
        this._app = document.querySelector('.root');

        //load elements
        this._leftMain = loadLeftMain(this._app);
        this._btn_index = this._leftMain.querySelector('#' + this._indexButtonId);
        this._rightMain = loadRightMain(this._app);
        this._footer = loadFooter(this._app);
        this._aboutTab = loadAboutTab(this._rightMain);
        this._indexTab = loadIndexTab(this._app);
        this._prebuildIndexTab(projects);
        this._projectTab = loadProjectTab(this._rightMain);
        this._contactCard = loadContactTab(this._app);

        //setup bindings
        this._bindProfileButton();
        this._bindExitTabsOnLeftMainClicked();
        this._bindCallIndex();
        this._bindSelAllCheckbox();
        this._bindSelNoneCheckbox();
        this._bindTabLeftEdges();
        this._bindSwipeProjectExit();
        this._bindSwipeAboutExit();
        this._bindCallContactCard();
        this._bindExitContactCard();
        this._bindSwipeIndexExit();
        
    }

    
    //========= INDEX TAB ======================
    _loadProjectIndexButton(parent) {
        const btn_index = new Image();
        btn_index.src = pArrowBase;
        btn_index.id = this._indexButtonId;
        parent.append(btn_index);

        return btn_index;
    }

    _prebuildIndexTab(projects) {
        const filterContainer = this._indexTab.querySelector('.' + this._projectFilterClass);
        this._removeAllChildren(filterContainer); //reset container


        this._createSelAllCheckbox(filterContainer);
        this._createSelNoneCheckbox(filterContainer);
        

        let categoryFilters = this._getUniqueCategories(projects);

        // create checkbox for each category
        categoryFilters.forEach(ca => {
            const newCat = this._createCategoryCheckbox(filterContainer, ca.toString());
            this._bindCategoryCheckbox(newCat, filterContainer, projects);
        });

        //pre-build index with everything
        this._buildIndexTable(projects, this._getUniqueCategories(projects));
    }

    _createCategoryCheckbox(parent, id) {
        const container = document.createElement('div');
        const newCat = document.createElement('input');
        newCat.setAttribute('type', 'checkbox');
        newCat.id = id;
        newCat.setAttribute('name', id);
        newCat.classList.add("tgl");
        newCat.classList.add("tgl-skewed");
        newCat.checked = true;
        const label = document.createElement('label');
        label.setAttribute("for", id);
        label.classList.add("tgl-btn");
        // label.textContent = id;
        label.setAttribute('data-tg-off',id);
        label.setAttribute('data-tg-on', id);
        // label.textContent = id;
        label.style.width = (id.length*0.7) + 'em';
        container.append(newCat, label);
        parent.append(container);

        return newCat;
    }

    _createSelAllCheckbox(parent) {
        const container = document.createElement('div');
        const selAll = document.createElement('input');
        selAll.setAttribute('type', 'checkbox');
        selAll.id = 'selAll';
        selAll.setAttribute('name', selAll.id);
        selAll.classList.add("tgl");
        selAll.classList.add("tgl-skewed");
        selAll.checked = true;
        const label = document.createElement('label');
        label.setAttribute("for", selAll.id);
        // lbl_selAll.textContent = 'All';
        label.classList.add("tgl-btn");
        label.setAttribute('data-tg-off','All');
        label.setAttribute('data-tg-on', 'All');
        label.style.width = 3 + 'em';
        container.append(selAll, label);
        parent.append(container);
    }
    _createSelNoneCheckbox(parent) {
        const container = document.createElement('div');
        const selNone = document.createElement('input');
        selNone.setAttribute('type', 'checkbox');
        selNone.id = 'selNone';
        selNone.setAttribute('name', selNone.id);
        selNone.classList.add("tgl");
        selNone.classList.add("tgl-skewed");
        selNone.checked = false;
        const label = document.createElement('label');
        label.setAttribute("for", selNone.id);
        label.classList.add("tgl-btn");
        label.setAttribute('data-tg-off','None');
        label.setAttribute('data-tg-on', 'None')
        label.style.width = 4 + 'em';
        container.append(selNone, label);
        parent.append(container);
    }

    _buildIndexTable(projects, categoryFilters) {

        if (!Array.isArray(categoryFilters)) throw "Error: parameter is not of type Array";

        //sort projects descending by year
        projects.sort((a, b) => b.year - a.year);

        let parent = document.querySelector(".projectIndexTable");
        this._initIndexHeaders(parent);

        for (let project of projects) {
            for (let c of project.categories) {
                if (categoryFilters.includes(c)) {
                    const newRow = document.createElement('tr');

                    const rowTitle = createElementText("td", project.title);
                    const rowYear = createElementText('td', project.year.toString());
                    const rowLoc = createElementText('td', project.location);
                    const tags = document.createElement('td');
                    tags.textContent = Array.from(project.categories).map(c => {return c.slice(0,2)}).join('.');
                    newRow.id = project.id;

                    newRow.append(rowYear, rowTitle, rowLoc, tags);
                    parent.appendChild(newRow);
                    break;
                }
            }
        }   
    }
    /**
     * populate table with preset headers (title, year, location, categories) and attach to parent
     * @returns empty <table> with headers.
     */
    _initIndexHeaders(tableContainer) {
        this._removeAllChildren(tableContainer);
        const head_title = createElementText('th', "Title");
        const head_year = createElementText('th', 'Year');
        const head_loc = createElementText('th','Location');
        const head_cat = createElementText('th', 'Categories');
        tableContainer.append(head_title, head_year, head_loc, head_cat);
    }

    /**
     * slide in index tab
     */
    _showIndexTab() {
        this._indexTab.classList.add('projectIndexSlideIn');
    }

    //==================    BINDINGS =====================================
    
    _bindProfileButton() {
        const btn_profile = this._leftMain.querySelector('#btn_profile');
        btn_profile.addEventListener('click', (e) => {
            //transition in about tab
            let target = e.target;

            while (target.parentNode) {
                target = target.parentNode;
                if (target.id === 'btn_profile') {
                    document.querySelector('.about').classList.toggle('slideInFromRight');
                    break;
                }
            }
            
        });
    }

    _bindCallIndex() {
        this._btn_index.addEventListener('click', () => {
            this._showIndexTab();
        });
    }

    _bindExitTabsOnLeftMainClicked() {
        this._leftMain.addEventListener('click', (e) =>{
                // e.stopPropagation();


                let t = e.target;
                let isProjectArrow = false;
                let isProfileButton = false;
                while (t.parentNode) {
                    if (t.id === 'projectArrow') isProjectArrow = true;
                    if (t.id === 'btn_profile') isProfileButton = true;
                    t = t.parentNode

                }
                if (!isProjectArrow) {
                    this._indexTab.classList.remove('projectIndexSlideIn');
                    this._projectTab.classList.remove('slideInFromRight');
                }
                if (!isProfileButton) {
                    this._aboutTab.classList.remove('slideInFromRight');
                }
        });
    }

    bindCallProjectPages(handler) {
        const table = document.querySelector('.projectIndexTable');
        const rows = table.querySelectorAll('tr');
        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];
            row.addEventListener('click', () => {
                handler(row.id);
                for (let j = 0; j < rows.length; j++) {
                    rows[j].classList.remove('selected');
                }
                row.classList.add('selected');
            })
        }
    }

    _bindTabLeftEdges() {
        const edges = document.querySelectorAll('.leftEdge');

        for (let i = 0; i < edges.length;i++) {
            let e = edges[i];
            let parent = e.parentNode;

            e.addEventListener('click', () => {
                parent.classList.toggle('slideInFromRight');
                parent.style.left = null;
                parent.style.width = null;
                this.clearAllSelectedProjects();
            });
            e.addEventListener('mouseover', () => {
                var style = window.getComputedStyle(parent),
                    left = style.getPropertyValue('left');
                    let splits = left.split('px');
                    let shift = parseFloat(splits[0]) - 5;
                    parent.style.left = shift + 'px';

                    let width = style.getPropertyValue('width');
                    let w_splits = width.split('px');
                    let w_shift = parseFloat(w_splits[0]) + 5;
                    parent.style.width = w_shift + 'px';

            })
            e.addEventListener('mouseout', () => {
                parent.style.left = null;
                parent.style.width = null;
            })
        }
    }

    clearAllSelectedProjects() {
        const projectselections = document.querySelectorAll('.selected');
        for (let i = 0; i < projectselections.length; i++) {
            projectselections[i].classList.remove('selected');
        }
    }

    _bindSwipeProjectExit() {
        const pTab = this._projectTab;
        bindSwipeEvent(pTab, 'right', this._swipeSensitivity, () => {
            pTab.classList.remove('slideInFromRight');
            this.clearAllSelectedProjects();
        });
    }


    _bindSwipeAboutExit() {
        const aTab = this._aboutTab;
        bindSwipeEvent(aTab, 'right', this._swipeSensitivity, () => {
            aTab.classList.remove('slideInFromRight');
        });        
    }

    _bindSwipeIndexExit() {
        const iTab = this._indexTab;
        bindSwipeEvent(iTab, 'down', this._swipeSensitivity, () => {
            iTab.classList.remove('projectIndexSlideIn');
        })
    }
    
    
    bindHoverProjects(handler) {
        const table = document.querySelector('.projectIndexTable');
        const rows = table.querySelectorAll('tr');

        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];
            const categories = handler(row.id);
            row.addEventListener('mouseover', () => {
                this._callPreviewCircles(categories);
            });
            row.addEventListener('mouseout', () => {
                this._dismissPreviewCircles(categories);
            })
        }
    }

    //populate preview circles with predefined graphics
    _callPreviewCircles(categories) {
        if (categories.has("design")) {
            const container = this._rightMain.querySelector(".circleDesign");
            container.style.backgroundImage = "url(" + preview_design + ")";
            this._instantiateBanner(container, 200, 'DESIGN');
        }
        if (categories.has("code")) {
            const container = this._rightMain.querySelector(".circleCode");
            container.style.backgroundImage = "url(" + preview_code + ")";
            this._instantiateBanner(container, 200, 'CODE');
        }
        if (categories.has("art")) {
            const container = this._rightMain.querySelector(".circleArt");
            container.style.backgroundImage = "url(" + preview_art + ")";
            this._instantiateBanner(container, 200, 'ART');

        }
    }

    _dismissPreviewCircles(categories) {
        const circles = this._rightMain.querySelectorAll('.circle');
        for (let i = 0; i < circles.length; i++) {
            const c = circles[i];
            c.style.backgroundImage = null;
        }
        const banners = this._app.querySelectorAll('.banner');
        for (let i = 0 ; i < banners.length;i++) {
            this._app.removeChild(banners[i]);
        }
    }

    _instantiateBanner(spawnElement, range, content) {
        const banner = document.createElement('div');
            banner.textContent = content;
            banner.classList.add('banner');

            let {x, y} = getCenterPos(spawnElement)

            let {newX, newY} = getRandomPoint(x,y, range);

            banner.style.left = newX + 'px';
            banner.style.top = newY + 'px';

            this._app.append(banner);

            return banner;
    }

    _bindCategoryCheckbox(newCat, parent, projects) {

            //query checkbox states and rebuild index on click
            newCat.addEventListener('change', (e) => {
                let checkBoxes = parent.querySelectorAll('input');

                //return only the ids that are checked
                let filtered = [...checkBoxes]
                    .filter(box => box.checked === true)
                    .map(box => box.id);

                let table = document.querySelector(".projectIndexTable");
                this._buildIndexTable(projects, filtered);

                let noneCheck = parent.querySelector('#selNone');
                noneCheck.checked = false;
            });
    }

    _bindSelAllCheckbox() {
        const filterContainer = this._indexTab.querySelector('.' + this._projectFilterClass);
        const selAll = filterContainer.querySelector('#selAll');

        selAll.addEventListener('change', () => {
            if (selAll.checked) {
                //get all checkboxes, turn on
                const allChecks = filterContainer.querySelectorAll('input');
                for (let i = 0; i < allChecks.length; i++) {
                    const box = allChecks[i];
                    if (box.id === 'selNone') box.checked = false;
                    else if (box.id !== 'selAll') {
                        box.checked = true;
                        const e = new Event("change");
                        box.dispatchEvent(e);
                    } 
                }
            }
        });
    }

    _bindSelNoneCheckbox() {
        const filterContainer = this._indexTab.querySelector('.' + this._projectFilterClass);
        const selNone = filterContainer.querySelector('#selNone');

        selNone.addEventListener('change', () => {
            if (selNone.checked) {
                //get all checkboxes, turn on
                const allChecks = filterContainer.querySelectorAll('input');
                for (let i = 0; i < allChecks.length; i++) {
                    const box = allChecks[i];
                    if (box.id === selNone.id) continue;
                    box.checked = false;
                    const e = new Event("change");
                    box.dispatchEvent(e);
                }
            }
        });
    }


    /**
     * Populates Project tab container with content and slides into view.
     * @param {<div>} htmlContent ... html div containing all page layout elements
     */
    displayProject(htmlContent) {
        const animationClass = 'slideInFromRight';

        const contentContainer = this._projectTab.querySelector('.projectContentContainer');
        //if project page already shown, slide out, swap content and slide back in.
        //timeout added to allow animation to finish.
        if (this._projectTab.classList.contains(animationClass)) {
            this._projectTab.classList.remove(animationClass);
            this._removeAllChildren(contentContainer);
            setTimeout(() => {
                // this._addCloseProjectButton();
                contentContainer.appendChild(htmlContent);
                this._projectTab.classList.add(animationClass);
            }, 200);
            return;
        }

        this._removeAllChildren(contentContainer);
        // this._addCloseProjectButton();
        contentContainer.appendChild(htmlContent);
        this._projectTab.classList.add(animationClass);

    }

    _addCloseProjectButton() {
        const closeProject = document.createElement('div');
        closeProject.classList.add('closeProject');
        this._projectTab.appendChild(closeProject);

        closeProject.addEventListener('click', () => {
            this._projectTab.classList.remove('slideInFromRight');
        });

        return closeProject;
    }

    _bindCallContactCard() {
        const callElements = document.querySelectorAll('.contactCall');
        console.log(callElements);

        for (let i = 0; i < callElements.length; i++) {
            let e = callElements[i];
            e.addEventListener('click', () => {
                const contactCard = document.querySelector('.contact');
                contactCard.classList.add('slideDown')
            });
        }
    }

    _bindExitContactCard() {
        const card = this._contactCard;
        let touchstartX = 0;
        let touchendX = 0;

        card.addEventListener('touchstart', e => {
            touchstartX = e.changedTouches[0].screenX;
        });

        card.addEventListener('touchend', e => {
            touchendX = e.changedTouches[0].screenX;
            if (touchendX > touchstartX) {
                card.classList.remove('slideDown');
            }
        });

        const close = card.querySelector('.bottomEdge');
        close.addEventListener('click', () => {
            card.classList.remove('slideDown');
        });
    }


    // ==========================   UTILITY ===============================
     /**
     * 
     * @param {Array[Object]} projectData ... field labeled 'categories' required
     * @returns an array of unique categories
     */
     _getUniqueCategories(projectData) {
        let categories = new Set();
        projectData.forEach(p => {
            p.categories.forEach(c => {
                categories.add(c);
            });
        });
        return Array.from(categories);
    }

    /**
     * clear an element
     * @param {HTML Element} element 
     */
        _removeAllChildren(element) {
            while (element.lastChild) {
                element.removeChild(element.lastChild);
            }
        }
}

export default GUI;