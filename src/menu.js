const loadMenuTab = () => {
    let tabContent = document.querySelector('#tab-content');
    tabContent.replaceChildren();
    
    let menuImage = document.createElement('div');
    menuImage.className = 'menu-image';
    menuImage.textContent = 'Menu Image placeholder';

    let menuInfo = document.createElement('div');
    menuInfo.className = 'menu-info';
    menuInfo.textContent = 'This is a list of our menu items';

    tabContent.append(menuImage, menuInfo);
};

export default loadMenuTab;