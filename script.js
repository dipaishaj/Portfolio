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

// ---- Teaching subnav active state on scroll ----
(function () {
    const links = Array.from(document.querySelectorAll('.subnav-link'));
    if (!links.length) return;

    const targets = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);

    const activate = (id) => {
        links.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + id);
    });
};

const observer = new IntersectionObserver((entries) => {
    // pick the most visible section
    const visible = entries
        .filter(e => e.isIntersecting)
        .sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) activate(visible.target.id);
    }, { rootMargin: '-30% 0px -60% 0px', threshold: [0.2, 0.5, 0.8] });
    
    targets.forEach(el => el && observer.observe(el));
})();