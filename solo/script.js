// script.js

// Function to load content dynamically
function loadPage(page) {
    const contentDiv = document.getElementById('content');

    // Fetch the specified HTML page
    fetch(`${page}.html`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            contentDiv.innerHTML = data; // Inject the new content
        })
        .catch(error => {
            console.error('Error loading page:', error);
            contentDiv.innerHTML = `<p>Error loading page: ${error.message}</p>`;
        });
}

// Add event listener to the login button
document.getElementById('loginBtn').addEventListener('click', function() {
    loadPage('login'); // Load your login page
});

// Optionally, load the default page on startup
window.addEventListener('DOMContentLoaded', () => {
    loadPage('index'); // Load the main page initially
});
