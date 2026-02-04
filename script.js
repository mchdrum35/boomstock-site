{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // Mobile nav toggle\
const navToggle = document.getElementById("navToggle");\
const navMenu = document.getElementById("navMenu");\
\
navToggle?.addEventListener("click", () => \{\
  const open = navMenu.classList.toggle("is-open");\
  navToggle.setAttribute("aria-expanded", open ? "true" : "false");\
\});\
\
// Close menu when a link is clicked (mobile)\
navMenu?.querySelectorAll("a").forEach((a) => \{\
  a.addEventListener("click", () => \{\
    navMenu.classList.remove("is-open");\
    navToggle?.setAttribute("aria-expanded", "false");\
  \});\
\});\
\
// Footer year\
document.getElementById("year").textContent = new Date().getFullYear();\
\
// Event date single-source-of-truth (edit here)\
const EVENT_DATE_TEXT = "July 18, 2026"; // <-- change me\
\
const eventDate = document.getElementById("eventDate");\
const posterDate = document.getElementById("posterDate");\
if (eventDate) eventDate.textContent = EVENT_DATE_TEXT;\
if (posterDate) posterDate.textContent = EVENT_DATE_TEXT;\
\
// Simple contact form handler (no backend)\
const contactForm = document.getElementById("contactForm");\
const contactStatus = document.getElementById("contactStatus");\
\
contactForm?.addEventListener("submit", (e) => \{\
  e.preventDefault();\
\
  const form = new FormData(contactForm);\
  const name = String(form.get("name") || "").trim();\
  const email = String(form.get("email") || "").trim();\
  const message = String(form.get("message") || "").trim();\
\
  if (!name || !email || !message) \{\
    contactStatus.textContent = "Please fill out all fields.";\
    return;\
  \}\
\
  // No backend in this starter. Easiest: mailto link.\
  const subject = encodeURIComponent("BoomStock Website Contact");\
  const body = encodeURIComponent(`Name: $\{name\}\\nEmail: $\{email\}\\n\\n$\{message\}`);\
  window.location.href = `mailto:YOUR_EMAIL_HERE@example.com?subject=$\{subject\}&body=$\{body\}`;\
\
  contactStatus.textContent = "Opening your email app...";\
\});\
}