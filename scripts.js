document.addEventListener("DOMContentLoaded", function () {
    // Function to bind event listeners for the resume section
    function bindResumeEventListeners() {
        // Switch between experience and education
        const experienceTab = document.getElementById('experienceTab');
        const educationTab = document.getElementById('educationTab');
        const experienceSection = document.getElementById('experience');
        const educationSection = document.getElementById('education');

        if (experienceTab && educationTab && experienceSection && educationSection) {
            experienceTab.addEventListener('click', function () {
                experienceSection.classList.add('active');
                educationSection.classList.remove('active');
                experienceTab.classList.add('active');
                educationTab.classList.remove('active');
            });

            educationTab.addEventListener('click', function () {
                educationSection.classList.add('active');
                experienceSection.classList.remove('active');
                educationTab.classList.add('active');
                experienceTab.classList.remove('active');
            });

            // Set default active section
            experienceSection.classList.add('active');
            experienceTab.classList.add('active');
        }
    }

    // Function to load content into a section
    function loadContent(sectionId, filePath) {
        fetch(filePath)
            .then(response => response.text())
            .then(data => {
                document.getElementById(sectionId).innerHTML = data;
                if (sectionId === 'resume') {
                    bindResumeEventListeners();
                }
            })
            .catch(error => console.log('Error loading content:', error));
    }

    loadContent('about', './html/about.html');
    loadContent('resume', './html/resume.html');
    loadContent('services', './html/services.html');
    loadContent('hire', './html/hire.html');

    // Handle resume button click
    const resumeButton = document.getElementById('resumeButton');
    if (resumeButton) {
        resumeButton.addEventListener('click', function (event) {
            event.preventDefault();

            const resumeUrl = "./resume/Rajeev_Sharma_CV.pdf";

            // Open in a new tab
            window.open(resumeUrl, '_blank');

            // Trigger download
            const downloadFrame = document.getElementById('downloadFrame');
            downloadFrame.src = resumeUrl + '?download=1';
        });
    }

    //Function to close the navbar on small screens after a link is clicked
    function closeNavbar() {
        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.querySelector('.navbar-collapse');

        if (navbarToggler && navbarCollapse.classList.contains('show')) {
            bootstrap.Collapse.getInstance(navbarCollapse).hide();
        };
    };

    //Bind click event to close navbar after link click
    const navbarLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navbarLinks.forEach(link => {
        link.addEventListener('click', closeNavbar);
    });

    const seeMoreLinks = document.querySelectorAll('.see-more');

    // // Function to add animation classes
    // function addAnimations() {
    //     const getToKnowElement = document.getElementById('get-to-know');
    //     const mySkillsElement = document.getElementById('my-skills');
        
    //     // Remove animation classes to restart animations
    //     getToKnowElement.classList.remove('slide-in-left');
    //     mySkillsElement.classList.remove('slide-in-right');

    //     // Trigger reflow to restart animation
    //     void getToKnowElement.offsetWidth;
    //     void mySkillsElement.offsetWidth;

    //     // Add animation classes back
    //     getToKnowElement.classList.add('slide-in-left');
    //     mySkillsElement.classList.add('slide-in-right');
    // }

    // // Call addAnimations on page load
    // addAnimations();

    // // Re-trigger animations on visibility change
    // document.addEventListener("pageshow", function(event) {
    //     if (event.persisted) {
    //         addAnimations();
    //     }
    // });

    //For see more content of resume section
    // seeMoreLinks.forEach(link => {
    //     link.addEventListener('click', function (event) {
    //         event.preventDefault();
    //         const moreContent = this.previousElementSibling.querySelector('.more-content');
    //         if(moreContent){
    //             if(moreContent.style.display === "none" || moreContent.style.display === "") {
    //                 moreContent.style.display = "block";
    //                 this.classList.add("collapsed")
    //             } else {
    //                 moreContent.style.display = "none";
    //                 this.classList.remove("collapsed");
    //             }
    //         }
    //     });
    // });
});

// document.addEventListener("DOMContentLoaded", function() {
//     const getToKnowElement = document.getElementById('get-to-know');
//     const mySkillsElement = document.getElementById('my-skills');

//     // Function to check if an element is in the viewport
//     function isInViewport(element) {
//         const rect = element.getBoundingClientRect();
//         return (
//             rect.top >= 0 &&
//             rect.left >= 0 &&
//             rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//             rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//         );
//     }

//     // Function to add animation classes when elements are in the viewport
//     function addAnimations() {
//         if (isInViewport(getToKnowElement)) {
//             getToKnowElement.classList.add('slide-in-left');
//             window.removeEventListener('scroll', addAnimations); // Remove scroll event listener once animation is triggered
//         }
//         if (isInViewport(mySkillsElement)) {
//             mySkillsElement.classList.add('slide-in-right');
//             window.removeEventListener('scroll', addAnimations); // Remove scroll event listener once animation is triggered
//         }
//     }

//     // Call addAnimations when the page is scrolled
//     window.addEventListener('scroll', addAnimations);
// });






