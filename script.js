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

    if (!btn || !panel || !backdrop) return;

    const openMenu = () => {
        panel.classList.remove("hidden");
        backdrop.classList.remove("hidden");
        btn.setAttribute("aria-expanded", "true");
    };

    const closeMenu = () => {
        panel.classList.add("hidden");
        backdrop.classList.add("hidden");
        btn.setAttribute("aria-expanded", "false");
    };

    btn.addEventListener("click", () => {
        const isOpen = btn.getAttribute("aria-expanded") === "true";
        isOpen ? closeMenu() : openMenu();
    });

    backdrop.addEventListener("click", closeMenu);

    // Close menu on link click (mobile)
    panel.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMenu));

    // Close on Escape
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeMenu();
    });

    // If resizing up to desktop, force-close
    window.addEventListener("resize", () => {
        if (window.innerWidth >= 768) closeMenu();
    });
})();