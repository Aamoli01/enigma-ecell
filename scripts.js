// Smooth scroll for the Learn More button
function scrollTo(selector) {
  document.querySelector(selector).scrollIntoView({ behavior: 'smooth' });
}

// Load Hero Lottie Animation
lottie.loadAnimation({
  container: document.getElementById('hero-animation'),
  path: 'assets/hero-lottie.json',
  renderer: 'svg',
  loop: true,
  autoplay: true,
});

// Simple testimonial carousel
let current = 0;
const testimonials = document.querySelectorAll('.testimonial');
function showTestimonial(idx) {
  testimonials.forEach((t, i) => t.style.display = i === idx ? 'block' : 'none');
}
showTestimonial(current);
setInterval(() => {
  current = (current + 1) % testimonials.length;
  showTestimonial(current);
}, 5000);
