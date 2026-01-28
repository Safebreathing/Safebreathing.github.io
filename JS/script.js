//  Fade-up on scroll
const faders = document.querySelectorAll('.fade-up');

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer){
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('active');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

//  Navbar Active Link
const navLinks = document.querySelectorAll('.navbar .nav-link');
const currentPath = window.location.pathname.split("/").pop();

navLinks.forEach(link => {
  const linkPath = link.getAttribute('href');
  if(linkPath === currentPath || (linkPath === 'index.html' && currentPath === '')) {
    link.classList.add('active');
  }
});
