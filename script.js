// Typewriter effect in Hero section
const typedText = document.getElementById('typed-text');
const titles = [
  "I'm a RAN Test Engineer", 
  "I'm an RF Engineer", 
  "I'm an Automation Test Engineer"
];
let titleIndex = 0, charIndex = 0;

function type() {
  if (charIndex < titles[titleIndex].length) {
    typedText.textContent += titles[titleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1000);
  }
}
function erase() {
  if (charIndex > 0) {
    typedText.textContent = titles[titleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    titleIndex = (titleIndex + 1) % titles.length;
    setTimeout(type, 500);
  }
}
document.addEventListener('DOMContentLoaded', () => {
  if (titles.length) type();
});

// Counter animation on scroll (Facts section)
const counters = document.querySelectorAll('.count');
let countersStarted = false;
window.addEventListener('scroll', () => {
  const factsSection = document.getElementById('facts');
  const rect = factsSection.getBoundingClientRect();
  if (!countersStarted && rect.top < window.innerHeight) {
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      let count = 0;
      const step = Math.ceil(target / 200);
      function updateCount() {
        count += step;
        if (count < target) {
          counter.innerText = count;
          requestAnimationFrame(updateCount);
        } else {
          counter.innerText = target;
        }
      }
      updateCount();
    });
    countersStarted = true;
  }
});

// Skills bars animation on scroll
const skills = document.querySelectorAll('.skill-bar-fill');
let skillsStarted = false;
window.addEventListener('scroll', () => {
  const skillsSection = document.getElementById('skills');
  const rect = skillsSection.getBoundingClientRect();
  if (!skillsStarted && rect.top < window.innerHeight) {
    skills.forEach(bar => {
      bar.style.width = bar.getAttribute('data-skill-level');
    });
    skillsStarted = true;
  }
});

// Modal image logic (Projects & Certifications)
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalCaption = document.getElementById('modal-caption');
document.querySelectorAll('.modal-img').forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = "block";
    modalImg.src = img.src;
    modalCaption.innerText = img.alt;
  });
});
document.querySelectorAll('.close').forEach(span => {
  span.addEventListener('click', () => {
    modal.style.display = "none";
  });
});

// Smooth scrolling for sidebar links
document.querySelectorAll('.sidebar ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
  });
});
