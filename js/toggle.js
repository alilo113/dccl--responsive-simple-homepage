document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("toggle");
    const navKeys = document.getElementById("navKeys");

    let navKeysVisible = false;

    toggleBtn.addEventListener("click", () => {
        if (navKeysVisible) {
            navKeys.style.display = "none";
            navKeysVisible = false;
        } else {
            navKeys.style.display = "flex"; // or "block" depending on your layout
            navKeysVisible = true;
        }
    });
});