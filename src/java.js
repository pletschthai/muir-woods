// Get the number of slides
const slides = document.querySelectorAll(".slide-link");
const numSlides = slides.length;

// Set the CSS custom property '--num-slides' to the number of slides
document.documentElement.style.setProperty("--num-slides", numSlides);
