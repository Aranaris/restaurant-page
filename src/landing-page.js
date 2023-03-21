const pageLoad = () => {
    const content = document.querySelector('#content');
    let headline = document.createElement('div');
    headline.className = 'headline';
    headline.textContent = 'Welcome to Chez Kolache!';

    let navigation = document.createElement('div');
    navigation.className = 'nav-bar';
    navigation.textContent = 'Home Menu Contact'

    let restaurantImage = document.createElement('div');
    restaurantImage.className = 'restaurant-image';
    restaurantImage.textContent = 'Image placeholder';

    let restaurantInfo = document.createElement('div');
    restaurantInfo.className = 'restaurant-info';
    restaurantInfo.textContent = 'This is some information about our kolaches';

    content.append(headline, navigation,restaurantImage, restaurantInfo);
};

export default pageLoad;