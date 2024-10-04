// Wait for the document to fully load
document.addEventListener("DOMContentLoaded", function () {

    // Select the sign-in button
    const signinBtn = document.getElementById('signinBtn');

    // Add click event to Button 1 to load the sign-in page
    signinBtn.addEventListener('click', function () {
        loadPage('signin.html', 'signin.html', 'signin.html');
    });

    // Function to load a page into the content div and change the URL
    function loadPage(page, pageTitle, pageUrl) {
        const contentDiv = document.getElementById('content');
        fetch(page)
            .then(response => response.text())
            .then(html => {
                contentDiv.innerHTML = html;
                // Change the page title
                document.title = pageTitle;
                // Change the URL without reloading the page
                window.history.pushState({html: html, pageTitle: pageTitle}, "", pageUrl);
            })
            .catch(err => {
                contentDiv.innerHTML = "<p>Error loading the page.</p>";
            });
    }

    // Handle back/forward navigation (when the user clicks the browser’s back/forward buttons)
    window.onpopstate = function(event) {
        if (event.state) {
            document.getElementById('content').innerHTML = event.state.html;
            document.title = event.state.pageTitle;
        }
    };
});
