import pArrowBase from './assets/arrow_projectIndex_base.svg';
import { createElementText } from './util';

class GUI {

    _projectArrow = null;

    constructor() {
        this._app = document.querySelector('.root');
        this.leftMain = this.loadLeftMain();
        this.rightMain = this.loadRightMain();
        this.footer = this.loadFooter();
        this.aboutTab = this.loadAboutTab();
        this._projectIndexTab = this.loadProjectIndexTab();
        this._projectTab = this.loadProjectTab();
    }


    //left UI
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
        const projectIndexTab = document.createElement('div');
        projectIndexTab.classList.add('projectIndex');
        this._app.appendChild(projectIndexTab);
        return projectIndexTab;
    }

    bindCallProjectIndex(handler) {
        this._projectArrow.addEventListener('click', () => {
            handler();
        });
    }

    bindCallProjectPages(handler) {
        this._projectIndexTab.addEventListener('click', (e) => {
            console.log(e.target);
            if (e.target.parentNode.nodeName === 'TR') {
                console.log("dasdasd");
                console.log(e.target.parentNode.id);
            }

            const id = e.target.parentNode.id;
            handler(id);
            
        });

    }

    displayProject(htmlContent) {
        this._removeAllChildren(this._projectTab);
        this._projectTab.appendChild(htmlContent);

        this._projectTab.classList.add('slideInFromRight');

    }

    /**
     * Generates project index tab, containing filterable search terms and all projects laid out in a table.
     * After build, the project index tab is displayed.
     * @param {object array} projectData  - {title, year, location, categories(set)}
     */
    displayProjectIndex(projectData) {
        console.log("clicked");

        this._removeAllChildren(this._projectIndexTab);

        //list all filterable categories
        const filterContainer = document.createElement('div');
        filterContainer.classList.add('projectFilter');
        this._projectIndexTab.append(filterContainer);

        //init table
        const projectIndexTable = this._initTable();
        //generate rows for each project
        this._generateAllTableRows(projectData, filterContainer, projectIndexTable);
        //add table to project tab
        this._projectIndexTab.appendChild(projectIndexTable);
        //show index table
        this._projectIndexTab.classList.add('projectIndexSlideIn');
    }

    /**
     * initiate table with preset headers (title, year, location, categories)
     * @returns empty <table> with headers.
     */
    _initTable() {
        const projectIndexTable = document.createElement("table");
        projectIndexTable.classList.add('projectIndexTable');
        const head_title = createElementText('th', "Title");
        const head_year = createElementText('th', 'Year');
        const head_loc = createElementText('th','Location');
        const head_cat = createElementText('th', 'Categories');
        projectIndexTable.append(head_title, head_year, head_loc, head_cat);
        return projectIndexTable;
    }

    /**
     * Internal helper method. Generate table from projects
     * @param {Object[]} projectData ... array of objects with structure {title, year, location, categories(set)} 
     * @param {<div>} filterContainer ... div that contains filterable category terms
     * @param {<table>} targetTable ... table that holds generated rows
     */
    _generateAllTableRows(projectData, filterContainer, targetTable) {
        for (let project of projectData) {
            this._generateTableRow(project, filterContainer, targetTable);
        }
    }

    /**
     * internal helper method. generate a table row for one project.
     * @param {Object} project ... object with structure {title, year, location, categories(set)} 
     * @param {<div>} filterContainer ... div that contains filterable category terms
     * @param {<table>} targetTable ... table that holds generated rows
     */
    _generateTableRow(project, filterContainer, targetTable) {
        const newRow = document.createElement('tr');

        const rowTitle = createElementText("td", project.title);
        const rowYear = createElementText('td', project.year.toString());
        const rowLoc = createElementText('td', project.location);
        //categories
        let categoryTags = this._generateCategoryFilters(filterContainer, project.categories);

        newRow.id = project.id;
        newRow.addEventListener('click', () => {

        });

        newRow.append(rowTitle, rowYear, rowLoc, categoryTags);
        targetTable.appendChild(newRow);
    }

    /**
     * internal helper function. Generate category filter search terms without duplicates.
     * @param {<div>} filterContainer - div that contains filterable category terms
     * @param {Set} categories - set holding categories as strings 
     * @returns a string for categories in an abbreviated tag
     */
    _generateCategoryFilters(filterContainer, categories) {
        let categoryTags = '';
        for (let ca of categories) {
            const split = ca.split(" ");
            split.forEach((s) => {
                categoryTags += s.slice(0, 2);
            });
            categoryTags += '.';

            let catCheck = !!document.getElementById(ca.toString());
            console.log("catcheck status: " + catCheck);
            //if category doesnt exist yet, create filter option
            if (catCheck === false) {
                const container = document.createElement('div');
                const newCat = document.createElement('input');
                newCat.setAttribute('type', 'checkbox');
                newCat.id = ca.toString();
                //catCheck.textContent = ca;
                newCat.setAttribute('name', ca);
                const label = document.createElement('label');
                label.setAttribute("for", ca);
                label.textContent = ca;
                container.append(newCat, label);
                filterContainer.append(container);
            }
        }
        categoryTags = categoryTags.slice(0, categoryTags.length - 1);
        return categoryTags;
    }

    /**
     * clear an element
     * @param {HTML Element} element 
     */
    _removeAllChildren(element) {
        while (element.firstChild) {
            element.removeLastChild();
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
        copyright.textContent = "This page was designed and built by me :) All rights reserved &#169; Taole Chen";
        footer.append(copyright);

        this._app.appendChild(footer);

        return footer;
    }



    loadAboutTab() {
        const aboutTab = document.createElement('div');
        aboutTab.classList.add('about');

        const extendedIntro = document.createElement('p');
        extendedIntro.textContent = "I am a multidisciplinary creative operating at the intersection of design, technology and art. I like to solve problems and build things. I am professionally trained in architecture and computer science. I am a multidisciplinary creative operating at the intersection of design, technology and art. I like to solve problems and build things. I am professionally trained in architecture and computer science.";

        const biographyTitle = document.createElement('h3');
        biographyTitle.textContent = "Biography";

        const bioBody = document.createElement('p');
        bioBody.textContent = "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id. Praesent lorem orci, mattis non efficitur id, ultricies vel nibh. Sed volutpat lacus vitae gravida viverra. Fusce vel tempor elit. Proin tempus, magna id scelerisque vestibulum, nulla ex pharetra sapien, tempor posuere massa neque nec felis. Aliquam sem ipsum, vehicula ac tortor vel, egestas ullamcorper dui. Curabitur at risus sodales, tristique est id, euismod justo. Mauris nec leo non libero sodales lobortis. Quisque a neque pretium, dictum tellus vitae, euismod neque. Nulla facilisi. Phasellus ultricies dignissim nibh ut cursus. Nam et quam sit amet turpis finibus maximus tempor eget augue. Aenean at ultricies lorem. Sed egestas ligula tortor, sit amet mattis ex feugiat non. Duis purus diam, dictum et ante at, commodo iaculis urna. Aenean lacinia, nisl id vehicula condimentum, enim massa tempor nibh, vitae volutpat sapien metus aliquet nisl. Etiam dui eros, tincidunt tristique blandit id, gravida vitae augue. Proin imperdiet mi nec justo convallis gravida. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris consectetur nibh in mattis commodo. Etiam in pellentesque eros. Etiam tempus.";

        aboutTab.append(extendedIntro, biographyTitle, bioBody);

        this._app.appendChild(aboutTab);

    
        return aboutTab;
    }

    loadProjectTab() {
        const projectTab = document.createElement('div');
        projectTab.classList.add('projectTab');
        this._app.appendChild(projectTab);
        return projectTab;
    }
}

export default GUI;