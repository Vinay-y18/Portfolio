// Typing effect
const textArray = ["Java Developer","Full Stack Developer", "Backend Developer"];
let index = 0;
let charIndex = 0;

function typeEffect() {
    const text = textArray[index];
    document.querySelector(".typing").textContent = text.slice(0, charIndex);

    charIndex++;
    if (charIndex > text.length) {
        charIndex = 0;
        index = (index + 1) % textArray.length;
    }
}

setInterval(typeEffect, 150);

// Scroll reveal animations
window.addEventListener("scroll", () => {
    document.querySelectorAll(".reveal").forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
});
