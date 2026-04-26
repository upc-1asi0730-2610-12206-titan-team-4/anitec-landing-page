// Navbar scroll effect
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        const href = this.getAttribute("href");
        if (href !== "#") {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                });
            }
        }
    });
});

// Animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document
    .querySelectorAll(
        ".feature-card, .step-card, .testimonial-card, .pricing-card",
    )
    .forEach((el) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(25px)";
        el.style.transition = "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)";
        observer.observe(el);
    });

// Mobile menu functionality
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuOverlay = document.querySelector(".mobile-menu-overlay");
const mobileMenuClose = document.querySelector(".mobile-menu-close");
const mobileMenuLinks = document.querySelectorAll(".mobile-menu-links a");

function openMobileMenu() {
    console.log("Opening mobile menu");
    mobileMenu.classList.add("active");
    mobileMenuOverlay.classList.add("active");
    document.body.classList.add("menu-open");
}

function closeMobileMenu() {
    console.log("Closing mobile menu");
    mobileMenu.classList.remove("active");
    mobileMenuOverlay.classList.remove("active");
    document.body.classList.remove("menu-open");
}

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", openMobileMenu);
}
if (mobileMenuClose) {
    mobileMenuClose.addEventListener("click", closeMobileMenu);
}
if (mobileMenuOverlay) {
    mobileMenuOverlay.addEventListener("click", closeMobileMenu);
}

mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
});

// Form submission handling
document.querySelectorAll("form").forEach((form) => {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("¡Gracias! Nos pondremos en contacto contigo pronto.");
    });
});

// Window load animation
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

// Testimonios Slider - Auto slides every 4 seconds
document.addEventListener("DOMContentLoaded", () => {
    const sliderTrack = document.getElementById("testimoniosSlider");
    if (!sliderTrack) return;

    const cards = sliderTrack.querySelectorAll(".testimonio-card");
    if (cards.length === 0) return;

    const gap = 40;
    let currentOffset = 0;
    let autoSlideInterval;

    function getMoveAmount() {
        const cardWidth = cards[0].offsetWidth;
        return cardWidth + gap;
    }

    const numVisibleCards = 3;
    let maxOffset = 0;

    function updateMaxOffset() {
        maxOffset = (cards.length - numVisibleCards) * getMoveAmount();
    }

    function moveSlider() {
        updateMaxOffset();
        currentOffset += getMoveAmount();
        if (currentOffset > maxOffset) {
            currentOffset = 0;
        }
        sliderTrack.style.transform = `translateX(-${currentOffset}px)`;
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(moveSlider, 4000);
    }

    // Initialize after a short delay to ensure DOM is ready
    setTimeout(() => {
        updateMaxOffset();
        startAutoSlide();
    }, 100);
});

document.addEventListener("DOMContentLoaded", () => {
    const sliderTrack = document.getElementById("testimoniosSliderVet");
    if (!sliderTrack) return;

    const cards = sliderTrack.querySelectorAll(".testimonio-card");
    if (cards.length === 0) return;

    const gap = 40;
    let currentOffset = 0;
    let autoSlideInterval;

    function getMoveAmount() {
        const cardWidth = cards[0].offsetWidth;
        return cardWidth + gap;
    }

    const numVisibleCards = 3;
    let maxOffset = 0;

    function updateMaxOffset() {
        maxOffset = (cards.length - numVisibleCards) * getMoveAmount();
    }

    function moveSlider() {
        updateMaxOffset();
        currentOffset += getMoveAmount();
        if (currentOffset > maxOffset) {
            currentOffset = 0;
        }
        sliderTrack.style.transform = `translateX(-${currentOffset}px)`;
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(moveSlider, 4000);
    }

    // Initialize after a short delay to ensure DOM is ready
    setTimeout(() => {
        updateMaxOffset();
        startAutoSlide();
    }, 100);
});
