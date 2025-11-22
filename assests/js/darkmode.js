const toggleBtn = document.getElementById("darkModeToggle");

function setDarkMode(isDark) {
    if (isDark) {
        document.body.classList.add("dark-mode");
        localStorage.setItem("darkMode", "true");
    } else {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("darkMode", "false");
    }
}

// Load preference
if (localStorage.getItem("darkMode") === "true") {
    setDarkMode(true);
}

// Toggle button
toggleBtn.addEventListener("click", () => {
    const isDark = document.body.classList.contains("dark-mode");
    setDarkMode(!isDark);
});
