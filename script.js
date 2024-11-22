// Smooth Scroll Animation for Elements
const elementsToAnimate = document.querySelectorAll('.fadeInOnScroll');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, { threshold: 0.1 });

elementsToAnimate.forEach(element => {
    observer.observe(element);
});

// Typewriter Effect for Hero Section Title
const typewriterEffect = (text, element, speed) => {
    let i = 0;
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
};

const heroTitle = document.querySelector('.hero-content h1');
const titleText = "Welcome to Big Dreams Dev LTD";
typewriterEffect(titleText, heroTitle, 150);

// Button Hover Glow Animation
const buttons = document.querySelectorAll('.cta-btn');
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.1)';
        button.style.transition = 'all 0.3s ease';
    });
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
});

// Scroll To Top Button
const scrollToTopButton = document.createElement('button');
scrollToTopButton.textContent = '↑';
scrollToTopButton.classList.add('scroll-to-top');
document.body.appendChild(scrollToTopButton);

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.classList.add('visible');
    } else {
        scrollToTopButton.classList.remove('visible');
    }
});

// Trusted Customers Animation
const customerLogos = document.querySelectorAll('.customer-logos img');
customerLogos.forEach(logo => {
    logo.addEventListener('mouseenter', () => {
        logo.style.transform = 'scale(1.2)';
        logo.style.transition = 'all 0.3s ease';
    });
    logo.addEventListener('mouseleave', () => {
        logo.style.transform = 'scale(1)';
    });
});
