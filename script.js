document.addEventListener("DOMContentLoaded", () => {
    const year = new Date().getFullYear();
    const footerYear = document.querySelector("footer p");
    if (footerYear) {
        footerYear.textContent = `© ${year} Muhammad Idris`;
    }
});