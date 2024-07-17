document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("mouseenter", () => {
            link.classList.add("nav-button");
        });

        link.addEventListener("mouseleave", () => {
            link.classList.remove("nav-button");
        });
    });
});
