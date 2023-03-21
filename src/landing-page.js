const pageLoad = () => {
    const content = document.querySelector('#content');
    let headline = document.createElement('div');
    headline.className = 'headline';
    headline.textContent = 'Welcome to Chez Kolache!';

    let navigation = document.createElement('div');
    navigation.className = 'nav-bar';

    let homeButton = document.createElement('button');
    homeButton.id = 'home-button';
    homeButton.textContent = 'Home';

    let menuButton = document.createElement('button');
    menuButton.id = 'menu-button';
    menuButton.textContent = 'Menu';

    let contactButton = document.createElement('button');
    contactButton.id = 'contact-button';
    contactButton.textContent = 'Contact';

    navigation.append(homeButton, menuButton, contactButton);

    let tabContent = document.createElement('div');
    tabContent.id = 'tab-content';
    tabContent.textContent = 'Nothing here';

    content.append(headline, navigation, tabContent);
};

export default pageLoad;