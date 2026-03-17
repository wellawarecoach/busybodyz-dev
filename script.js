const faders = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
    });
});

faders.forEach((el) => observer.observe(el));

// Global mobile menu toggle
(() => {
    const btn = document.getElementById("mobileMenuButton");
    const panel = document.getElementById("mobileMenuPanel");
    const backdrop = document.getElementById("mobileMenuBackdrop");
    const hamburgerIcon = document.getElementById("hamburgerIcon");
    const closeIcon = document.getElementById("closeIcon");

    if (!btn || !panel || !backdrop) return;

    const openMenu = () => {
        panel.classList.remove("hidden");
        backdrop.classList.remove("hidden");
        btn.setAttribute("aria-expanded", "true");
        document.body.classList.add("menu-open");

        if (hamburgerIcon) hamburgerIcon.classList.add("hidden");
        if (closeIcon) closeIcon.classList.remove("hidden");
    };

    const closeMenu = () => {
        panel.classList.add("hidden");
        backdrop.classList.add("hidden");
        btn.setAttribute("aria-expanded", "false");
        document.body.classList.remove("menu-open");

        if (hamburgerIcon) hamburgerIcon.classList.remove("hidden");
        if (closeIcon) closeIcon.classList.add("hidden");
    };

    btn.addEventListener("click", () => {
        const isOpen = btn.getAttribute("aria-expanded") === "true";
        isOpen ? closeMenu() : openMenu();
    });

    backdrop.addEventListener("click", closeMenu);

    panel.querySelectorAll("a").forEach((a) =>
        a.addEventListener("click", closeMenu)
    );

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeMenu();
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth >= 768) closeMenu();
    });
})();