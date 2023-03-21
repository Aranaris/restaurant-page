const loadHomeTab = () => {
    let tabContent = document.querySelector('#tab-content');
    tabContent.replaceChildren();
    
    let restaurantImage = document.createElement('div');
    restaurantImage.className = 'restaurant-image';
    restaurantImage.textContent = 'Image placeholder';

    let restaurantInfo = document.createElement('div');
    restaurantInfo.className = 'restaurant-info';
    restaurantInfo.textContent = 'This is some information about our kolaches';

    tabContent.append(restaurantImage, restaurantInfo);
};

export default loadHomeTab;