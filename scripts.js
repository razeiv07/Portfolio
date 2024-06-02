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

    const seeMoreLinks = document.querySelectorAll('.see-more');

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
