// Wait for the document to load
window.addEventListener('DOMContentLoaded', function() {
    const contentDiv = document.getElementById('content');
    const loginBtn = document.getElementById('loginBtn');

    // Function to load a page into the content div
    function loadPage(page) {
        fetch(page)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(html => {
                contentDiv.innerHTML = html;
            })
            .catch(error => {
                console.error('There was an error loading the page:', error);
                contentDiv.innerHTML = "<p>Error loading the page.</p>";
            });
    }

    // Handle SPA routing with URL change and page loading
    function navigateTo(url, page) {
        history.pushState({}, '', url); // Change the URL
        loadPage(page); // Load the page content
    }

    // Event listener for login button click
    loginBtn.addEventListener('click', function(e) {
        e.preventDefault();
        navigateTo('/login.html', 'login.html'); // Navigate to the login page
    });

    // Handle back/forward button navigation
    window.onpopstate = function() {
        if (location.pathname === '/login') {
            loadPage('login.html');
        } else {
            loadPage('index.html');
        }
    };
});

document.getElementById("loginBtn").addEventListener("click", function() {
    const video = document.getElementById("background-video");
    video.style.display = "none"; // Hides the video
});

