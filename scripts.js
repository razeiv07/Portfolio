// document.addEventListener('DOMContentLoaded', () => {
//     const menuIcon = document.getElementById('menu-icon');
//     const navLinks = document.getElementById('nav-links');
//     const aboutLink = document.querySelector('#nav-links [data-page="about"');
//     const aboutSection = 

//     //Function to handle smooth scrolling to a specific section
//     function scrollToSection(sectionId) {
//         const section = document.getElementById(sectionId);
//         if (section) {
//             section.scrollIntoView({
//                 behaviour: 'smooth',
//                 block: 'start'
//             });
//         }
//     }

//     menuIcon.addEventListener('click', () => {
//         navLinks.classList.toggle('show');
//     });

//     window.addEventListener('resize', () => {
//         const menuToggle = document.getElementById('menu-toggle');

//         if (menuToggle.checked) {
//             navLinks.classList.remove('show');
//             menuToggle.checked = false;
//         }
//     });


//     //Smooth scroll to Aboutme section when about link is clicked
//     aboutLink.addEventListener('click', (event) => {
//         event.preventDefault();
//         scrollToSection('about-section');
//     });

//     // Function to load content
//     function loadContent(page) {
//         fetch(`html/${page}.html`)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error(`Failed to load ${page}`);
//                 }
//                 return response.text();
//             })
//             .then(data => {
//                 // Replace the content in the additional content area
//                 document.getElementById('additional-content').innerHTML = data;
//             })
//             .catch(error => {
//                 console.error('Error loading content:', error);
//                 document.getElementById('additional-content').innerHTML = '<p>Error loading content. Please try again later</p>'
//             });
//     }

//     // Add event listeners to navigation links for dynamic content loading
//     document.querySelectorAll('#nav-links a').forEach(link => {
//         link.addEventListener('click', (event) => {
//             event.preventDefault();
//             const page = link.getAttribute('data-page');
//             loadContent(page);
//         });
//     });
// });

document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');
    const contentSections = document.querySelectorAll('.content-section');

    //Function to fetch and inject content from HTML file
    function fetchAndInjectContent(pageName, targetElementId) {
        fetch(`html/${pageName}.html`)
            .then(response => response.text())
            .then(data => {
                const targetElement = document.getElementById(targetElementId);
                if (targetElement) {
                    targetElement.innerHTML = data;
                }
            })
            .catch(error => console.log('Error fetching content:', error))
    }

    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    window.addEventListener('resize', () => {
        const menuToggle = document.getElementById('menu-toggle');
        if (menuToggle.checked) {
            navLinks.classList.remove('show');
            menuToggle.checked = false;
        }
    });

    //Function to handle smooth scrolling to a specific section
    // function scrollToSection(sectionId) {
    //     const section = document.getElementById(sectionId);
    //     if (section) {
    //         section.scrollIntoView({
    //             behavior: 'smooth',
    //             block: 'start'
    //         });
    //     }
    // }
    function scrollToSection(element){
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

        //Preload content for each section on page load
        contentSections.forEach(section => {
            const sectionId = section.id.replace('-content', '');
            fetchAndInjectContent(sectionId, section.id);
        });

    //Smooth scroll for all navigation links
    document.querySelectorAll('#nav-links a').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('data-page');
            const targetElement = document.getElementById(`${targetId}-content`);
            if(targetElement){
                scrollToSection(targetElement);
            }

            // //Fetch and inject content based on the clicked navigation item
            // switch (targetId) {
            //     case 'about':
            //         fetchAndInjectContent('about', 'about-content');
            //         break;
            //     case 'services':
            //         fetchAndInjectContent('services', 'services-content');
            //         break;
            //     case 'skills':
            //         fetchAndInjectContent('skills', 'skills-content');
            //         break;
            //     case 'hire':
            //         fetchAndInjectContent('hire', 'hire-content');
            //         break;
            //     default:
            //         break;
            // }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const boxes = document.querySelectorAll('.resume-container .box');
    boxes.forEach(box => {
        box.addEventListener('click', () => {
            box.classList.toggle('hidden');
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const meters = document.querySelectorAll('.meter span');
    meters.forEach(meter => {
        meter.style.transition = 'width 1s ease-in-out';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form');

    contactForm.addEventListener('submit', event => {
        event.preventDefault();
        alert('Message sent successfully!');
        contactForm.reset();
    });
});



