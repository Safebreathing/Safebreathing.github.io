//  Fade-up on scroll
const faders = document.querySelectorAll(".fade-up");

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px",
};

const appearOnScroll = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("active");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

//  Navbar Active Link
const navLinks = document.querySelectorAll(".navbar .nav-link");
const currentPath = window.location.pathname.split("/").pop();

navLinks.forEach((link) => {
  const linkPath = link.getAttribute("href");
  if (
    linkPath === currentPath ||
    (linkPath === "index.html" && currentPath === "")
  ) {
    link.classList.add("active");
  }
});

// Contact Form Logic

//  EmailJS
(function () {
  emailjs.init("kUy9dD752vQHKhgxt");
})();

const form = document.getElementById("contact-form");
const statusMsg = document.getElementById("form-status");

if (!form) {
  console.error("Form not found! Check the ID: contact-form");
} else {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const params = {
      from_name: document.getElementById("name").value,
      from_email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    emailjs.send("service_i02x7qh", "template_317un1p", params).then(
      function () {
        statusMsg.textContent = "Message sent successfully";
        statusMsg.style.color = "green";
        form.reset();
      },
      function (error) {
        statusMsg.textContent = "Something went wrong Please try again.";
        statusMsg.style.color = "red";
        console.error("EmailJS Error:", error);
      },
    );
  });
}
