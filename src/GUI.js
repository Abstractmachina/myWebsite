import pArrowBase from './assets/arrow_projectIndex_base.svg';
import { createElementText } from './util';

class GUI {

    _projectArrow = null;

    constructor() {
        this.app = document.querySelector('.root');
        this.leftMain = this.loadLeftMain();
        this.rightMain = this.loadRightMain();
        this.footer = this.loadFooter();
       // this.projectIndexContainer = this.loadProjectIndex();
        this.aboutTab = this.loadAboutTab();

        this._projectIndexTab = document.createElement('div');
        this._projectIndexTab.classList.add('projectIndex');
        this.app.appendChild(this._projectIndexTab);
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
            document.querySelector('.about').classList.toggle('slideAboutAnim');
        });



        this._projectArrow = new Image();
        this._projectArrow.src = pArrowBase;
        this._projectArrow.id = 'projectArrow';
        

        leftContainer.append(myName, subtitle, intro, btn_profile, this._projectArrow);

        this.app.appendChild(leftContainer);

        return leftContainer;
    }

    bindCallProjectIndex(handler) {
        this._projectArrow.addEventListener('click', () => {
            handler();
        });
    }


    displayProjectIndex(projectIndex) {
        console.log("clicked");

        this.removeAllChildren(this._projectIndexTab);

        //list all filterable categories
        const filterContainer = document.createElement('div');
        filterContainer.classList.add('projectFilter');
        this._projectIndexTab.append(filterContainer);

        //table with all projects
        const projectIndexTable = document.createElement("table");
        projectIndexTable.classList.add('projectIndexTable');
        const head_title = createElementText('th', "Title");
        const head_year = createElementText('th', 'Year');
        const head_loc = createElementText('th','Location');
        const head_cat = createElementText('th', 'Categories');
        projectIndexTable.append(head_title, head_year, head_loc, head_cat);

        //generate rows for each project
        for (let el of projectIndex) {
            this._generateTableRow(el, filterContainer, projectIndexTable);
        }
        this._projectIndexTab.appendChild(projectIndexTable);

        this._projectIndexTab.classList.add('projectIndexSlideIn');
    }

    _generateTableRow(el, filterContainer, projectIndexTable) {
        const newRow = document.createElement('tr');

        const rowTitle = createElementText("td", el.title);
        const rowYear = createElementText('td', el.year.toString());
        const rowLoc = createElementText('td', el.location);

        //categories
        let categoryTags = '';
        for (let ca of el.categories) {
            const split = ca.split(" ");
            split.forEach((s) => {
                categoryTags += s.slice(0, 1);
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

        newRow.append(rowTitle, rowYear, rowLoc, categoryTags);
        projectIndexTable.appendChild(newRow);
    }

    removeAllChildren(element) {
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

        this.app.appendChild(rightContainer);

        return rightContainer;
    }

    loadFooter() {
        const footer = document.createElement('div');
        footer.classList.add('footer');

        const copyright = document.createElement('p');
        copyright.textContent = "This page was designed and built by me :) All rights reserved &#169; Taole Chen";
        footer.append(copyright);

        this.app.appendChild(footer);

        return footer;
    }

    
    processProject(project) {

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

        this.app.appendChild(aboutTab);

    
        return aboutTab;
    }
}

export default GUI;