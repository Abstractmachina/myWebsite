import pArrowBase from './assets/arrow_projectIndex_base.svg';
import preview_design from './assets/designPreview.jpg';

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
        
        this.rightMain = loadRightMain(this._app);
        this.footer = loadFooter(this._app);
        this.aboutTab = loadAboutTab(this._app);
        this._indexTab = loadIndexTab(this._app);
        this._loadFilterContainer(projects);
        this._projectTab = loadProjectTab(this._app);

        this._bindProfileButton();
        this.bindExitProjectIndex();
        // this.bindHoverProjects();
    }

    
    _loadProjectIndexButton(parent) {
        const btn_index = new Image();
        btn_index.src = pArrowBase;
        btn_index.id = 'projectArrow';
        parent.append(btn_index);

        return btn_index;
    }

    _loadFilterContainer(projects) {
        const filterContainer = this._indexTab.querySelector('.' + this._projectFilterClass);
        this._removeAllChildren(filterContainer); //reset container
        // this._loadFilters(projectIndexData);

        let categoryFilters = this._getUniqueCategories(projects);

        // create checkbox for each category
        categoryFilters.forEach(ca => {
            const newCat = this._createCheckbox(filterContainer, ca.toString());
            this._bindCategoryCheckbox(newCat, filterContainer, projects);
        });

    }

    
    // _loadFilters(projects) {
    //     let categoryFilters = this._getUniqueCategories(projects);
    //     const filterContainer = document.querySelector('.projectFilter');

    //     // create checkbox for each category
    //     categoryFilters.forEach(ca => {
    //         const newCat = this._createCheckbox(filterContainer, ca.toString());
    //         this._bindCategoryCheckbox(newCat, filterContainer, projects);
    //     });
    // }

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

    _loadIndexTable() {

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
     * Generates project index tab, containing filterable search terms and all projects laid out in a table. filter terms and index are rebuilt everytime tab is called.
     * After build, the project index tab is displayed.
     * @param {object array} projectData  - {title, year, location, categories(set)}
     */
    _displayProjectIndex(projectIndexData) {

        // //create filters
        // const filterContainer = this._indexTab.querySelector('.' + this._projectFilterClass);
        // this._removeAllChildren(filterContainer); //reset container
        // this._loadFilters(projectIndexData);

        // const idxTableContainer = document.querySelector('.projectIndexTable');

        // //if no index has been created yet
        // if (!idxTableContainer.lastChild) {
        //     const cats = this._getUniqueCategories(projectIndexData);
        //     //build index
        //     this._buildIndexTable(projectIndexData, cats);
        // }
        //init animation
        this._indexTab.classList.add('projectIndexSlideIn');
        return;
    }

    //==================    BINDINGS =====================================
    
    _bindProfileButton() {
        const btn_profile = this._leftMain.querySelector('#btn_profile');
        btn_profile.addEventListener('click', () => {
            //transition in about tab
            document.querySelector('.about').classList.toggle('slideInFromRight');
        });
    }

    bindCallProjectIndex(handler) {
        this._btn_index.addEventListener('click', () => {
            handler();
        });
        
    }

    bindExitProjectIndex() {
        this._leftMain.addEventListener('click', (e) =>{
                console.log(e);
                e.stopPropagation();
                if (e.target.id !== "projectArrow")
                this._indexTab.classList.remove('projectIndexSlideIn');
            
        });
    }

    bindCallProjectPages(handler) {
        const table = document.querySelector('.projectIndexTable');
        table.addEventListener('click', (e) => {
            const id = e.target.parentNode.id;
            handler(id);
        });
    }

    bindHoverProjects(handler) {
        const table = document.querySelector('.projectIndexTable');
        const kids = table.querySelectorAll("tr");
        console.log(kids);
        table.addEventListener('mouseover', (e) => {
            if (e.target.parentNode.nodeName === "TR")
            handler(e.target.parentNode.id);
        });
    }


    callPreviewCircles(categories) {
        // console.log(categories);
        // if (categories.includes("design")) {
        //     console.log("design detected");
        //     const container = this.rightMain.querySelector(".circleDesign");
        //     console.log(container);
        //     container.style.backgroundImage = preview_design;
        //     container.style.backgroundColor = 'yellow';

        //     container.addEventListener('mouseout', () => {
        //         container.style.backgroundColor = null;
        //         console("mouseout");
        //     })
        //  }
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