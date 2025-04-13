const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitBtn = document.getElementById("submitBtn");

function validateForm() {
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);
  const passwordValid = passwordInput.value.length >= 8;
  submitBtn.disabled = !(emailValid && passwordValid);
}

emailInput.addEventListener("input", validateForm);
passwordInput.addEventListener("input", validateForm);

document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  window.location.href = "dashboard.html";
});

