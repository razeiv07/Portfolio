document.addEventListener("DOMContentLoaded", function () {
    //Function to load content into a section
    function loadContent(sectionId, filePath) {
        fetch(filePath)
            .then(response => response.text())
            .then(data => {
                document.getElementById(sectionId).innerHTML = data;
            })
            .catch(error => console.log('Error loading content:', error));
    }

    loadContent('about', './html/about.html');
    loadContent('resume', './html/resume.html');
    loadContent('services', './html/services.html');
    loadContent('hire', './html/hire.html');

    //Handle resume button click
    const resumeButton = document.getElementById('resumeButton');
    resumeButton.addEventListener('click', function (event) {
        event.preventDefault();

        const resumeUrl = "./resume/Rajeev_Sharma_CV.pdf";

        //Open in a new tab
        window.open(resumeUrl, '_blank');

        //Trigger download
        const downloadFrame = document.getElementById('downloadFrame');
        downloadFrame.src = resumeUrl + '?download=1';
    });
});