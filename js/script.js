const toggleBtn = document.getElementById("dark-mode-toggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
        toggleBtn.textContent = "☀️ Mode clair";
    } else {
        toggleBtn.textContent = "🌙 Mode sombre";
    }
});
