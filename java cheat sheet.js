document.addEventListener("DOMContentLoaded", () => {
    const toggleButtons = document.querySelectorAll(".toggle-btn");

    toggleButtons.forEach(button => {
        button.addEventListener("click", () => {
            const content = button.nextElementSibling;
            content.style.display = content.style.display === "block" ? "none" : "block";
        });
    });

    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const target = document.querySelector(link.getAttribute("href"));
            target.scrollIntoView({ behavior: "smooth" });
        });
    });
});