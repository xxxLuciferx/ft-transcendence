// document.addEventListener('DOMContentLoaded', () => {
//     const loader = document.querySelector('.loader');
//     const contentDiv = document.getElementById('content');
//     const links = document.querySelectorAll('nav a');

//     // Function to load the page content
//     function loadPage(page) {
//         loader.style.display = 'block'; // Show loader

//         // Simulate loading time
//         setTimeout(() => {
//             fetch(`${page}.html`)
//                 .then(response => {
//                     if (!response.ok) throw new Error('Page not found');
//                     return response.text();
//                 })
//                 .then(html => {
//                     contentDiv.innerHTML = html; // Load content into div
//                     loader.style.display = 'none'; // Hide loader
//                     window.history.pushState({ page }, '', `${page}.html`); // Change URL
//                 })
//                 .catch(error => {
//                     contentDiv.innerHTML = '<p>Error loading page</p>';
//                     loader.style.display = 'none'; // Hide loader
//                 });
//         }, 2000); // Change this to your desired loading time
//     }

//     // Event listener for links
//     links.forEach(link => {
//         link.addEventListener('click', (event) => {
//             event.preventDefault();
//             const page = link.getAttribute('data-page');
//             loadPage(page);
//         });
//     });

//     // Load home page by default
//     loadPage('home');
// });
