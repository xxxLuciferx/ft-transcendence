// Wait for the document to load
window.addEventListener('DOMContentLoaded', function() {
    const contentDiv = document.getElementById('content');
    const loginBtn = document.getElementById('loginBtn');
    const signinBtn = document.getElementById('signinBtn');
    const video = document.getElementById("background-video");

    // Function to load a page into the content div
    function loadPage(page) {
        fetch(`${page}.html`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(html => {
                contentDiv.innerHTML = html;

                // Control the background video display
                if (page === 'login') {
                    video.style.display = "block"; // Show the video for the login page
                } else {
                    video.style.display = "none"; // Hide the video for other pages
                }
            })
            .catch(error => {
                console.error('There was an error loading the page:', error);
                contentDiv.innerHTML = `<p>Error loading the ${page} page.</p>`;
            });
    }

    // Function to handle SPA routing with URL change and page loading
    function navigateTo(url, page) {
        history.pushState({}, '', url); // Change the URL
        loadPage(page); // Load the page content
    }

    // Event listener for login button click
    loginBtn.addEventListener('click', function(e) {
        e.preventDefault();
        navigateTo('login.html', 'login'); // Navigate to the login page
    });

    // Event listener for signin button click
    signinBtn.addEventListener('click', function(e) {
        e.preventDefault();
        navigateTo('signup.html', 'signup'); // Navigate to the signin page
    });

    // Handle back/forward button navigation
    window.onpopstate = function() {
        if (location.pathname === '/login') {
            loadPage('login');
        } else if (location.pathname === '/signup') {
            loadPage('signup');
        } else {
            // Default action: load the home page without background video
            contentDiv.innerHTML = ''; // Clear content
            video.style.display = "none"; // Ensure video is hidden by default
        }
    };

    // Optionally load the login page by default on first load
    if (location.pathname === '/login') {
        loadPage('login');
    }
});


