import pArrowBase from './assets/arrow_projectIndex_base.svg';
import { createElementText } from './util';

class GUI {

    _projectArrow = null;

    _projectFilterClass = 'projectFilter';

    constructor() {
        this._app = document.querySelector('.root');
        this.leftMain = this.loadLeftMain();
        this.rightMain = this.loadRightMain();
        this.footer = this.loadFooter();
        this.aboutTab = this.loadAboutTab();
        this._indexTab = this.loadProjectIndexTab();
        this._projectTab = this.loadProjectTab();
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

    bindCallProjectPages(handler) {
        const table = document.querySelector('.projectIndexTable');
        table.addEventListener('click', (e) => {
            const id = e.target.parentNode.id;
            handler(id);
        });
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

            //query checkbox states and rebuild index on click
            newCat.addEventListener('change', () => {
                let checkBoxes = filterContainer.querySelectorAll('input');

                //return only the ids that are checked
                let filtered = [...checkBoxes]
                    .filter(box => box.checked === true)
                    .map(box => box.id);

                let table = document.querySelector(".projectIndexTable");
                this._buildIndexTable(projects, filtered);
            });
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
     * initiate table with preset headers (title, year, location, categories) and attach to parent
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
        const c2 = document.createElement('div');
        c2.classList.add('circle');
        const c3 = document.createElement('div');
        c3.classList.add('circle');

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



    loadAboutTab() {
        const aboutTab = document.createElement('div');
        aboutTab.classList.add('about');

        const cv = document.createElement('a');
        cv.setAttribute('href', '');
        cv.textContent = "Download CV";



        const intro1 = document.createElement('p');
        intro1.textContent ="I worked as a computational designer at Zaha Hadid Architects at their London HQ, initially at ZHCode, later as project member within the wider office-internal ecosystem. I contributed as a conventional designer from concept to construction, but also leveraged my knowledge in computational design methodologies through developing bespoke design solutions and project-specific software tools. I have previously also worked as a freelancer, providing general design services as well as consultation for studios who are in need of computational/parametric workflow integration, but lack the capacity to have their own in-house specialists.";

        const intro2 = document.createElement('p');
        intro2.textContent = "I hold a MArch in Architecture and Urbanism from the Architectural Association in London UK and a BArch in Architecture with high distinction from the California College of the Arts in San Francisco, California. Most recently, I have pursued continued education in Computer Science at Imperial College London, where I completed a MSc in Computing, with a focus on computer graphics and Machine Learning, as I believe that a deep understanding of the underlying technological foundation, which increasingly supports and drives all aspects of architecture, as well as future trajectories, is essential to stay relevant in our profession."; 

        const intro3 = document.createElement('p');
        intro3.textContent = "I have a keen interest in design research and fabrication. My specialization is in additive manufacturing and AI in architecture, having done two master thesis on the topic and having led workshops at universities around the globe (For more details, please check out the Projects section). I am always on the lookout for continued research opportunities, so please don't hesitate to get in touch!";

        const biographyTitle = document.createElement('h3');
        biographyTitle.textContent = "Biography";

        const bioBody = document.createElement('p');
        bioBody.textContent = "Having lived in four countries on three continents (Austria, China, US, UK) and counting, my multi-cultural experience has perhaps given me a unique perspective on matters. I often try to see and understand the complex systems that weave through our environments, and consequently I believe that design should be approached from a systemic perspective, rather than the prevailing design-as-a-monument paradigm. I am fascinated by the concept of the Renaissance Man and I enjoy to indulge in the pursuit of diverging interests. My origins are actually in the fine arts. Having painted, drawn, sculpted all my childhood, at the end of high school, I was entirely prepared to start a career in painting. However, the breadth and rigor of the architectural education was more appealing to me, so I pivoted early on. As an aspiring renaissance man, I have not given up my passion in the arts and I still practice whenever possible. Similarly, ";

        aboutTab.append(cv, intro1, intro2, intro3, biographyTitle, bioBody);

        this._app.appendChild(aboutTab);

    
        return aboutTab;
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