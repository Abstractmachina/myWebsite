import pArrowBase from './assets/arrow_projectIndex_base.svg';
import preview_design from './assets/designPreview.jpg';

import { createElementText } from './util';
import loadAboutTab from './content/loadAboutTab.js';


class GUI {

    _projectArrow = null;

    //class names for query selection
    _projectFilterClass = 'projectFilter';

    constructor() {
        this._app = document.querySelector('.root');
        this.leftMain = this.loadLeftMain();
        this.rightMain = this.loadRightMain();
        this.footer = this.loadFooter();
        this.aboutTab = loadAboutTab(this._app);
        this._indexTab = this.loadProjectIndexTab();
        this._projectTab = this.loadProjectTab();

        this.bindExitProjectIndex();
        // this.bindHoverProjects();
    }

    //==================    left UI =====================================
    loadLeftMain() {
        const leftContainer = document.createElement('div');
        leftContainer.classList.add("mainContainer", "left");

        const myName = document.createElement('h1');
        myName.textContent = 'Taole Chen';

        const subtitle = document.createElement('h2');
        subtitle.textContent = 'Design | Code';

        const intro = document.createElement('p');
        intro.textContent = "I am a multidisciplinary creative operating at the intersection of design, technology and art. I like to solve problems and build things. I am professionally trained in architecture and computer science";

        const btn_profile = document.createElement('button');
        btn_profile.id = 'btn_profile';
        btn_profile.textContent = "Full Profile"

        btn_profile.addEventListener('click', ()=> {
            //transition in about tab
            document.querySelector('.about').classList.toggle('slideInFromRight');
        });

        this._projectArrow = new Image();
        this._projectArrow.src = pArrowBase;
        this._projectArrow.id = 'projectArrow';
        

        leftContainer.append(myName, subtitle, intro, btn_profile, this._projectArrow);

        this._app.appendChild(leftContainer);

        
        return leftContainer;
    }

    loadProjectIndexTab() {
        const indexTab = document.createElement('div');
        indexTab.classList.add('projectIndex');

        const filterContainer = document.createElement('div');
        filterContainer.classList.add('projectFilter');
        indexTab.appendChild(filterContainer);
        this._initIndexTable(indexTab);
        this._app.appendChild(indexTab);
        
        return indexTab;
    }

    bindCallProjectIndex(handler) {
        this._projectArrow.addEventListener('click', () => {
            handler();
        });
    }
    bindExitProjectIndex() {
        this.leftMain.addEventListener('click', (e) =>{
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

    /**
     * Generates project index tab, containing filterable search terms and all projects laid out in a table. filter terms and index are rebuilt everytime tab is called.
     * After build, the project index tab is displayed.
     * @param {object array} projectData  - {title, year, location, categories(set)}
     */
    displayProjectIndex(projectIndexData) {

        //create filters
        const filterContainer = this._indexTab.querySelector('.' + this._projectFilterClass);
        this._removeAllChildren(filterContainer); //reset container
        this._loadFilters(projectIndexData);

        const idxTableContainer = document.querySelector('.projectIndexTable');

        //if no index has been created yet
        if (!idxTableContainer.lastChild) {
            const cats = this._getUniqueCategories(projectIndexData);
            //build index
            this._buildIndexTable(projectIndexData, cats);
        }
        //init animation
        this._indexTab.classList.add('projectIndexSlideIn');
        return;
    }

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

    _loadFilters(projects) {
        let categoryFilters = this._getUniqueCategories(projects);
        const filterContainer = document.querySelector('.projectFilter');

        // create checkbox for each category
        categoryFilters.forEach(ca => {
            const newCat = this._createCheckbox(filterContainer, ca.toString());
            this._bindCategoryCheckbox(newCat, filterContainer, projects);
        });

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

    _initIndexTable(parent){
        const indexTable = document.createElement("table");
        indexTable.classList.add('projectIndexTable');

        parent.appendChild(indexTable);
        return indexTable;
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
     * clear an element
     * @param {HTML Element} element 
     */
    _removeAllChildren(element) {
        while (element.lastChild) {
            element.removeChild(element.lastChild);
        }
    }


    //======================    right ui    =============================
    loadRightMain() {
        const rightContainer = document.createElement('div');
        rightContainer.classList.add("mainContainer", "right");

        const circleContainer = document.createElement('div');
        circleContainer.classList.add('circleContainer');

        const c1 = document.createElement('div');
        c1.classList.add('circle');
        c1.classList.add('circleDesign');
        const c2 = document.createElement('div');
        c2.classList.add('circle');
        c2.classList.add('circleCode');
        const c3 = document.createElement('div');
        c3.classList.add('circle');
        c3.classList.add('circleArt');

        circleContainer.append(c1, c2, c3);
        rightContainer.append(circleContainer);

        this._app.appendChild(rightContainer);

        return rightContainer;
    }

    loadFooter() {
        const footer = document.createElement('div');
        footer.classList.add('footer');

        const copyright = document.createElement('p');
        copyright.textContent = "This page was designed and built by me :) All rights reserved © Taole Chen";
        footer.append(copyright);

        this._app.appendChild(footer);

        return footer;
    }

    loadProjectTab() {
        const projectTab = document.createElement('div');
        projectTab.classList.add('projectTab');
        this._app.appendChild(projectTab);
        return projectTab;
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
}

export default GUI;