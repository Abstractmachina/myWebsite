import './style.css';
import Model from './model.js';

class Project {
    
    constructor(title){
        this.title = title;

    }
}

class View {


    constructor() {
        this.app = document.querySelector('#root');
        this.header = this.loadHeader();
        this.leftMain = this.loadLeftMain();
    }

    loadLeftMain() {

        const leftContainer = document.createElement('div');
        leftContainer.classList.add("mainContainer");
        leftContainer.id = "left";

        const myName = document.createElement('h1');
        myName.textContent = 'Taole Chen';

        const subtitle = document.createElement('h2');
        subtitle.textContent = 'Design | Code';

        const intro = document.createElement('p');
        intro.textContent = "I am a multidisciplinary creative operating at the intersection of design, technology and art. I like to solve problems and build things. I am professionally trained in architecture and computer science";

        leftContainer.append(myName, subtitle, intro);

        this.app.appendChild(leftContainer);

        return leftContainer;

    }

    loadHeader() {
        const header = document.createElement('div');
        header.setAttribute('id', 'header');
        const navBar = document.createElement('nav');
        navBar.setAttribute('id', 'navbar');
    
        //set up buttons
        const navHome = document.createElement('button');
        navHome.textContent = "Home";
        navHome.setAttribute('id', 'nav_home');
    
        navHome.addEventListener('click', () => {
            loadHomeTab();
        })
    
        const navMenu = document.createElement('button');
        navMenu.textContent = "Menu";
        navMenu.setAttribute('id', 'nav_menu');
    
        const navAbout = document.createElement('button');
        navAbout.textContent = "About";
        navAbout.setAttribute('id', 'nav_about');
    
        const navOrderNow = document.createElement('button');
        navOrderNow.textContent = "Order Now";
        navOrderNow.setAttribute('id', 'nav_ordernow');
    
        const navContact = document.createElement('button');
        navContact.textContent = "Contact";
        navContact.setAttribute('id', 'nav_contact');
    
    
        navBar.append(navHome, navMenu, navAbout, navOrderNow, navContact);
    
        header.append(navBar);
        this.app.append(header);
    
        return header;
    }


}


const app = new View();

// const body = document.querySelector('body');
// const projectsContainer = document.querySelector('#projectsContainer');
// body.addEventListener('scroll', () => {
    
// })