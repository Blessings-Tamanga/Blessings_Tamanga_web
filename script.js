//hamburger 
const hamburger = document.querySelector(".hamburger");
const navLink = document.querySelector(".nav-link");

hamburger.addEventListener("click", () => {
    navLink.classList.toggle("active");
});


//faq section

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {
    question.addEventListener("click", () => {

        const faqItem = question.parentElement;

        faqItem.classList.toggle("active");

        const icon = faqItem.querySelector(".faq-icon");

        icon.textContent =
            faqItem.classList.contains("active")
                ? "-"
                : "+";
    });
});

const reveals = document.querySelectorAll(".hero-content, .about, .experience, .projects, .faq, .contact");

function revealOnScroll() {
    const windowHeight = window.innerHeight;

    reveals.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        } else {
            el.classList.remove("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);