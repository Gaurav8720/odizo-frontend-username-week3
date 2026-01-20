// ---------------------------------------------------------
// 1. Responsive Navbar Toggle Logic
// ---------------------------------------------------------
const toggleButton = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

if (toggleButton) {
    toggleButton.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// ---------------------------------------------------------
// 2. UI Interaction: Modal Popup Logic
// ---------------------------------------------------------
const signInBtn = document.getElementById("sign-in-btn");
const modalOverlay = document.getElementById("modal-overlay");
const closeModal = document.querySelector(".close-modal");

// Open Modal when Sign In is clicked
if (signInBtn) {
    signInBtn.addEventListener("click", (e) => {
        e.preventDefault(); // Link par click hone se page refresh na ho
        modalOverlay.style.display = "flex";
    });
}

// Close Modal when 'X' is clicked
if (closeModal) {
    closeModal.addEventListener("click", () => {
        modalOverlay.style.display = "none";
    });
}

// Close Modal when clicking outside the box
window.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.style.display = "none";
    }
});

// ---------------------------------------------------------
// 3. Form Validation Logic
// ---------------------------------------------------------
const form = document.getElementById("signin-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");

if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Form submit hone se rokein taaki check kar sakein
        let isValid = true;

        // Purane errors hatayein
        nameError.innerText = "";
        emailError.innerText = "";
        nameInput.style.borderColor = "#ccc";
        emailInput.style.borderColor = "#ccc";

        // Name Check
        if (nameInput.value.trim() === "") {
            nameError.innerText = "Name cannot be empty";
            nameInput.style.borderColor = "red";
            isValid = false;
        }

        // Email Check
        if (emailInput.value.trim() === "") {
            emailError.innerText = "Email cannot be empty";
            emailInput.style.borderColor = "red";
            isValid = false;
        } else if (!emailInput.value.includes("@")) {
            emailError.innerText = "Enter a valid email";
            emailInput.style.borderColor = "red";
            isValid = false;
        }

        // Agar sab sahi hai
        if (isValid) {
            alert("Form Submitted Successfully!");
            modalOverlay.style.display = "none"; // Modal band karein
            form.reset(); // Form clear karein
        }
    });
}