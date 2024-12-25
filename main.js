const slides = document.querySelectorAll('.slide');
const sideContent = document.getElementById('side-content');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

let currentIndex = 0;
const slideInterval = 2000; // 2 seconds

function updateSlides() {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${(index - currentIndex) * 100}%)`;
    });
    // Update side content based on the current slide
    const content = slides[currentIndex].getAttribute('data-content');
    sideContent.textContent = content;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length; // Loop back to the first slide
    updateSlides();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Loop back to the last slide
    updateSlides();
}

// Auto-slide functionality
let autoSlide = setInterval(nextSlide, slideInterval);

// Event listeners for buttons
nextButton.addEventListener('click', () => {
    clearInterval(autoSlide); // Stop auto-slide on manual control
    nextSlide();
    resetAutoSlide();
});

prevButton.addEventListener('click', () => {
    clearInterval(autoSlide); // Stop auto-slide on manual control
    prevSlide();
    resetAutoSlide();
});

// Reset auto-slide
function resetAutoSlide() {
    autoSlide = setInterval(nextSlide, slideInterval);
}

// Optional: Pause auto-slide on mouse hover
const sliderSection = document.querySelector('.slider-section');

sliderSection.addEventListener('mouseenter', () => clearInterval(autoSlide));
sliderSection.addEventListener('mouseleave', resetAutoSlide);

// Initialize the slides
updateSlides();

document.addEventListener('DOMContentLoaded', () => {
    const projects = document.querySelectorAll('.project');
    const loadMoreButton = document.getElementById('loadMore');
    let visibleProjects = 3; // Number of projects to show initially

    // Function to show more projects
    function showMoreProjects() {
        for (let i = visibleProjects; i < visibleProjects + 3; i++) {
            if (projects[i]) {
                projects[i].style.display = 'block'; // Show the project
            }
        }
        visibleProjects += 3; // Increase the count of visible projects

        // Hide the button if all projects are visible
        if (visibleProjects >= projects.length) {
            loadMoreButton.style.display = 'none'; // Hide the button
        }
    }

    // Initially hide all projects except the first three
    projects.forEach((project, index) => {
        if (index >= visibleProjects) {
            project.style.display = 'none'; // Hide additional projects
        }
    });

    // Show the Load More button if there are more projects
    if (projects.length > visibleProjects) {
        loadMoreButton.style.display = 'inline-block'; // Show the button
    }

    // Add event listener to the Load More button
    loadMoreButton.addEventListener('click', showMoreProjects);
});

const scrollToTopButton = document.getElementById('scrollToTop');

// Show the button when scrolling down
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopButton.style.display = "block"; // Show button
    } else {
        scrollToTopButton.style.display = "none"; // Hide button
    }
};

// Scroll to top when the button is clicked
scrollToTopButton.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll
    });
};