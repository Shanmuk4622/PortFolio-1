const slider = document.querySelector('.slider');
const slideTrack = document.querySelector('.slide-track');
const slides = document.querySelectorAll('.slide');

let currentIndex = 0;
const slideCount = slides.length;

// Clone the first and last slides for smooth infinite scroll
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slideCount - 1].cloneNode(true);

slideTrack.appendChild(firstClone); // Add clone at the end
slideTrack.insertBefore(lastClone, slides[0]); // Add clone at the beginning

const slideWidth = slides[0].offsetWidth;
slideTrack.style.transform = `translateX(${-slideWidth}px)`; // Start at the first real image

// Function to move to the next slide
function moveToNextSlide() {
  if (currentIndex >= slideCount) {
    currentIndex = 0;
    slideTrack.style.transition = "none"; // Remove transition to reset position
    slideTrack.style.transform = `translateX(${-slideWidth}px)`; // Jump to the first real image
  } else {
    currentIndex++;
    slideTrack.style.transition = "transform 0.5s ease"; // Smooth transition
    slideTrack.style.transform = `translateX(${-(currentIndex + 1) * slideWidth}px)`;
  }
}

// Set up infinite scrolling by calling moveToNextSlide every 2 seconds
setInterval(moveToNextSlide, 2000);

// Mouse drag functionality
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  slider.style.cursor = 'grabbing';
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.style.cursor = 'grab';
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.style.cursor = 'grab';
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2; // Adjust scroll speed
  slider.scrollLeft = scrollLeft - walk;
});
