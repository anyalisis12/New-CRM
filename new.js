
function showRegistrationForm() {
    document.getElementById("home-content").classList.add("hidden");
    document.getElementById("registration-form").style.display = "block";
}
function hideRegistrationForm() {
    document.getElementById("registration-form").style.display = "none";
    document.getElementById("home-content").classList.remove("hidden");
}
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const mainContent = document.getElementById("main-content");

    sidebar.classList.toggle("closed");
    mainContent.classList.toggle("shifted");
}
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".card button");

    buttons.forEach(button => {
        button.addEventListener("click", (e) => {
            alert(`More info about: ${e.target.parentElement.textContent.trim()}`);
        });
    });
});
