import './style.css';

class Project {
    
    constructor(title){
        this.title = title;

    }
}

const app = document.querySelector('#root');

function loadHeader() {
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
    app.append(header);

    return header;
}

loadHeader();

const body = document.querySelector('body');
// const projectsContainer = document.querySelector('#projectsContainer');
// body.addEventListener('scroll', () => {
    
// })