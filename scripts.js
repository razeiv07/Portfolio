document.addEventListener("DOMContentLoaded", function () {
    //Function to load content into a section
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

    //Handle resume button click
    const resumeButton = document.getElementById('resumeButton');
    if (resumeButton) {
        resumeButton.addEventListener('click', function (event) {
            event.preventDefault();

            const resumeUrl = "./resume/Rajeev_Sharma_CV.pdf";

            //Open in a new tab
            window.open(resumeUrl, '_blank');

            //Trigger download
            const downloadFrame = document.getElementById('downloadFrame');
            downloadFrame.src = resumeUrl + '?download=1';
        });
    }

    //Function to bind event listeners for the resume section
    function bindResumeEventListeners() {

        //Switch between experience and education
        const experienceBtn = document.getElementById('experienceBtn');
        const educationBtn = document.getElementById('educationBtn');
        const experienceSection = document.getElementById('experience');
        const educationSection = document.getElementById('education');

        if (experienceBtn && educationBtn && experienceSection && educationSection) {
            experienceBtn.addEventListener('click', function () {
                experienceSection.classList.add('active');
                educationSection.classList.remove('active');
            });

            educationBtn.addEventListener('click', function () {
                educationSection.classList.add('active');
                experienceSection.classList.remove('active');
            });

            // Set default active section
            // experienceSection.classList.add('active');
        }
    }
});