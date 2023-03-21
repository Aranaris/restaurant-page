const loadContactTab = () => {
    let tabContent = document.querySelector('#tab-content');
    tabContent.replaceChildren();
    
    let contactInfo = document.createElement('div');
    contactInfo.className = 'contact-info';
    contactInfo.textContent = 'Contact placeholder';

    let emailInfo = document.createElement('div');
    emailInfo.className = 'contact-email';
    emailInfo.textContent = 'email@example.com';

    let phoneInfo = document.createElement('div');
    phoneInfo.className = 'contact-phone';
    phoneInfo.textContent = '+1-(555)-555-5555';

    contactInfo.append(emailInfo,phoneInfo);

    tabContent.append(contactInfo);
};

export default loadContactTab;