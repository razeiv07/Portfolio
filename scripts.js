document.addEventListener("DOMContentLoaded", function () {

    // const pages = {
    //     home: { name: "Home", link: "./index.html" },
    //     about: { name: "About", link: "/html/about.html" },
    //     resume: { name: "Resume", link: "/html/resume.html" },
    //     services: { name: "Services", link: "/html/services.html" },
    //     hire: { name: "Hire Me", link: "/html/hire.html" }
    // };

    // const currentPage = document.body.getAttribute("data-page");
    // const navbarNav = document.querySelector('#navbarNav ul');

    // if(navbarNav) {
    //     navbarNav.innerHTML = "";

    //     for (const [key, page] of Object.entries(pages)) {
    //         if (key !== currentPage) {
    //             const li = document.createElement('li');
    //             li.classList.add('nav-item', 'px-3');

    //             const a = document.createElement('a');
    //             a.classList.add('nav-link');
    //             a.href = page.link;
    //             a.textContent = page.name;

    //             li.appendChild(a);
    //             navbarNav.appendChild(li);
    //         }
    //     }
    // }

    function loadContent(sectionId, filePath) {
        fetch(filePath)
            .then(response => response.text())
            .then(data => {
                document.getElementById(sectionId).innerHTML = data;
                if (sectionId === 'resume') {
                    bindResumeEventListeners();
                }

                if (sectionId === 'about') {
                    triggerAboutAnimations();
                }
            })
            .catch(error => console.log('Error loading content:', error));
    }

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
    // function loadContent(sectionId, filePath) {
    //     fetch(filePath)
    //         .then(response => response.text())
    //         .then(data => {
    //             document.getElementById(sectionId).innerHTML = data;
    //             if (sectionId === 'resume') {
    //                 bindResumeEventListeners();
    //             }
    //         })
    //         .catch(error => console.log('Error loading content:', error));
    // }

    // // Function to add animation classes
    function triggerAboutAnimations() {
        const getToKnowElement = document.getElementById('get-to-know');
        const mySkillsElement = document.getElementById('my-skills');

        if (getToKnowElement && mySkillsElement) {
            getToKnowElement.classList.remove('slide-in-left');
            mySkillsElement.classList.remove('slide-in-right');

            void getToKnowElement.offsetWidth;
            void mySkillsElement.offsetWidth;

            getToKnowElement.classList.add('slide-in-left');
            mySkillsElement.classList.add('slide-in-right');
        }
    }

    //Function navigation to About Page in SPA content
    function handleNavigation() {
        const currentPage = document.body.getAttribute("data-page");
        if(currentPage === 'about'){
            triggerAboutAnimations();
        }
    }

    //Load initial content
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

    handleNavigation();

    const seeMoreLinks = document.querySelectorAll('.see-more');

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