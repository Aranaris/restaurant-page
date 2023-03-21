import pageLoad from "./landing-page";
import loadHomeTab from "./home";
import loadContactTab from "./contact";
import loadMenuTab from "./menu";

const tabListeners = () => {
    const homeTab = document.querySelector('#home-button');
    homeTab.addEventListener('click', () => loadHomeTab());

    const contactTab = document.querySelector('#contact-button');
    contactTab.addEventListener('click', () => loadContactTab());

    const menuTab = document.querySelector('#menu-button');
    menuTab.addEventListener('click', () => loadMenuTab());
}

pageLoad();
tabListeners();

console.log("Hello World");