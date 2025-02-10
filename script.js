// Show project abstract in modal
function showProjectDetails(projectId) {
    const projectDetails = {
        project1: {
            title: "Basketball Best Team Selection",
            abstract: "Using bi-variate and multivariate EDA techniques to get data-driven insights on recommending the teams."
        },
        project2: {
            title: "Automotive Surveillance",
            abstract: "Deep Learning and a clickable GUI-based interface (Flask) to monitor vehicle activity."
        },
        project3: {
            title: "Determining Signal Strength or Quality",
            abstract: "Machine Learning model to predict the equipment's signal quality using a Neural Network regressor."
        }
    };

    const modal = document.getElementById('projectModal');
    const title = document.getElementById('projectTitle');
    const abstract = document.getElementById('projectAbstract');

    title.textContent = projectDetails[projectId].title;
    abstract.textContent = projectDetails[projectId].abstract;

    modal.classList.remove('hidden');
}


function closeProjectDetails() {
    document.getElementById('projectModal').classList.add('hidden');
}

// Show description on hover
function showDescription(card) {
    const description = card.querySelector('.project-description');
    description.classList.remove('hidden');
}

function hideDescription(card) {
    const description = card.querySelector('.project-description');
    description.classList.add('hidden');
}

function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("show");
}

