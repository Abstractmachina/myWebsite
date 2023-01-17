import pArrowBase from './assets/arrow_projectIndex_base.svg';
import preview_design from './assets/designPreview.jpg';
import preview_code from './assets/codePreview.jpg';
import preview_art from './assets/artPreview.jpg';


import { createElementText } from './util';

import loadAboutTab from './content/loadAboutTab.js';
import loadLeftMain from './content/loadLeftMain';
import loadRightMain from './content/loadRightMain';
import loadFooter from './content/loadFooter';
import loadProjectTab from './content/loadProjectTab';
import loadIndexTab from './content/loadIndexTab';


class GUI {

    //class names for query selection
    _projectFilterClass = 'projectFilter';

    constructor(projects) {
        this._app = document.querySelector('.root');

        this._leftMain = loadLeftMain(this._app);
        this._btn_index = this._loadProjectIndexButton(this._leftMain);
        
        this._rightMain = loadRightMain(this._app);
        this._footer = loadFooter(this._app);
        this._aboutTab = loadAboutTab(this._app);
        this._indexTab = loadIndexTab(this._app);
        this._prebuildIndexTab(projects);


        this._projectTab = loadProjectTab(this._app);

        //setup bindings
        this._bindProfileButton();
        this.bindExitProjectIndex();
        // this.bindHoverProjects();
        this.bindCallProjectIndex();
    }

    
    _loadProjectIndexButton(parent) {
        const btn_index = new Image();
        btn_index.src = pArrowBase;
        btn_index.id = 'projectArrow';
        parent.append(btn_index);

        return btn_index;
    }

    _prebuildIndexTab(projects) {
        const filterContainer = this._indexTab.querySelector('.' + this._projectFilterClass);
        this._removeAllChildren(filterContainer); //reset container
        // this._loadFilters(projectIndexData);

        let categoryFilters = this._getUniqueCategories(projects);

        // create checkbox for each category
        categoryFilters.forEach(ca => {
            const newCat = this._createCheckbox(filterContainer, ca.toString());
            this._bindCategoryCheckbox(newCat, filterContainer, projects);
        });

        //pre-build index with everything
        this._buildIndexTable(projects, this._getUniqueCategories(projects));
    }

    _createCheckbox(parent, id) {
        const newCat = document.createElement('input');
            newCat.setAttribute('type', 'checkbox');
            newCat.id = id;
            newCat.setAttribute('name', id);
            newCat.checked = true;
            const label = document.createElement('label');
            label.setAttribute("for", id);
            label.textContent = id;
            label.appendChild(newCat);
            parent.append(label);

            return newCat;
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

                    newRow.append(rowTitle, rowYear, rowLoc, tags);
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
        btn_profile.addEventListener('click', () => {
            //transition in about tab
            document.querySelector('.about').classList.toggle('slideInFromRight');
        });
    }

    bindCallProjectIndex() {
        this._btn_index.addEventListener('click', () => {
            this._showIndexTab();
        });
    }

    bindExitProjectIndex() {
        this._leftMain.addEventListener('click', (e) =>{
                e.stopPropagation();
                if (e.target.id !== "projectArrow") {
                    this._indexTab.classList.remove('projectIndexSlideIn');
                    this._projectTab.classList.remove('slideInFromRight');
                }
                if (e.target.id !== 'btn_profile') {
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
            })
        }
    }

    bindHoverProjects(handler) {
        const table = document.querySelector('.projectIndexTable');
        const rows = table.querySelectorAll('tr');
        console.log(rows);

        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];
            const categories = handler(row.id);
            row.addEventListener('mouseover', () => {
                this.callPreviewCircles(categories);
            });
            row.addEventListener('mouseout', () => {
                this.dismissPreviewCircles(categories);
            })
        }
        // table.addEventListener('mouseout', (e) => {
        //     if (e.target.parentNode.nodeName === "TR")
        //     handler(e.target.parentNode.id);
        // });
    }

    callPreviewCircles(categories) {
        console.log(categories);
        if (categories.has("design")) {
            const container = this._rightMain.querySelector(".circleDesign");
            console.log(preview_design.src);
            container.style.backgroundImage = "url(" + preview_design + ")";
        }
        if (categories.has("code")) {
            const container = this._rightMain.querySelector(".circleCode");
            container.style.backgroundImage = "url(" + preview_code + ")";
        }
        if (categories.has("art")) {
            const container = this._rightMain.querySelector(".circleArt");
            container.style.backgroundImage = "url(" + preview_art + ")";
        }
    }

    dismissPreviewCircles(categories) {

        const circles = this._rightMain.querySelectorAll('.circle');
        for (let i = 0; i < circles.length; i++) {
            const c = circles[i];
            c.style.backgroundImage = null;
        }
    }



    _bindCategoryCheckbox(newCat, parent, projects) {

            //query checkbox states and rebuild index on click
            newCat.addEventListener('change', () => {
                let checkBoxes = parent.querySelectorAll('input');

                //return only the ids that are checked
                let filtered = [...checkBoxes]
                    .filter(box => box.checked === true)
                    .map(box => box.id);

                let table = document.querySelector(".projectIndexTable");
                this._buildIndexTable(projects, filtered);
            });
    }


    /**
     * Populates Project tab container with content and slides into view.
     * @param {<div>} htmlContent ... html div containing all page layout elements
     */
    displayProject(htmlContent) {
        const animationClass = 'slideInFromRight';

        //if project page already shown, slide out, swap content and slide back in.
        //timeout added to allow animation to finish.
        if (this._projectTab.classList.contains(animationClass)) {
            this._projectTab.classList.remove(animationClass);
            this._removeAllChildren(this._projectTab);
            setTimeout(() => {
                this._addCloseProjectButton();
                this._projectTab.appendChild(htmlContent);
                this._projectTab.classList.add(animationClass);
            }, 200);
            return;
        }

        this._removeAllChildren(this._projectTab);
        this._addCloseProjectButton();
        this._projectTab.appendChild(htmlContent);
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