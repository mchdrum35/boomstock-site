// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const open = navMenu.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  // Close menu when a link is clicked (mobile)
  navMenu.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      navMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

// Event date single-source-of-truth (edit here)
const EVENT_DATE_TEXT = "July 18, 2026"; // <-- change me

const eventDate = document.getElementById("eventDate");
const posterDate = document.getElementById("posterDate");
if (eventDate) eventDate.textContent = EVENT_DATE_TEXT;
if (posterDate) posterDate.textContent = EVENT_DATE_TEXT;

// Simple contact form handler (no backend)
const contactForm = document.getElementById("contactForm");
const contactStatus = document.getElementById("contactStatus");

if (contactForm && contactStatus) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const form = new FormData(contactForm);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const message = String(form.get("message") || "").trim();

    if (!name || !email || !message) {
      contactStatus.textContent = "Please fill out all fields.";
      return;
    }

    // No backend in this starter. Easiest: mailto link.
    const subject = encodeURIComponent("BoomStock Website Contact");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );

    window.location.href = `mailto:YOUR_EMAIL_HERE@example.com?subject=${subject}&body=${body}`;
    contactStatus.textContent = "Opening your email app...";
  });
}
