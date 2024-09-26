document.addEventListener('DOMContentLoaded', () => {
    // Get references to navigation links and pages
    const frontPageLink = document.getElementById('frontPageLink');
    const loginPageLink = document.getElementById('loginPageLink');
    const profilePageLink = document.getElementById('profilePageLink');

    const frontPage = document.getElementById('frontPage');
    const loginPage = document.getElementById('loginPage');
    const profilePage = document.getElementById('profilePage');

    // Function to hide all pages
    const hideAllPages = () => {
        frontPage.style.display = 'none';
        loginPage.style.display = 'none';
        profilePage.style.display = 'none';
    };

    // Function to show the selected page and update the URL
    const showPage = (pageId) => {
        hideAllPages();
        
        switch (pageId) {
            case 'home':
                frontPage.style.display = 'block';
                break;
            case 'login':
                loginPage.style.display = 'block';
                break;
            case 'profile':
                profilePage.style.display = 'block';
                break;
        }

        // Change the URL without reloading the page
        history.pushState({}, '', `/${pageId}`);
    };

    // Prevent default link behavior and show pages
    frontPageLink.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default anchor behavior
        showPage('home');
    });

    loginPageLink.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default anchor behavior
        showPage('login');
    });

    profilePageLink.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default anchor behavior
        showPage('profile');
    });

    // Handle back/forward navigation
    window.addEventListener('popstate', () => {
        const path = window.location.pathname.replace('/', '');
        showPage(path || 'home');
    });

    // Load the correct page on initial load or refresh
    const initialPath = window.location.pathname.replace('/', '');
    showPage(initialPath || 'home');
});
