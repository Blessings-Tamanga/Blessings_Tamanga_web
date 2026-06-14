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