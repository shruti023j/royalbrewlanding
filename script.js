const form = document.getElementById("emailForm");
const successMsg = document.querySelector(".success-msg");
const errorMsg = document.querySelector(".error-msg");
const emailInput = form.querySelector("input");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const emailValue = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(emailValue)) {
    errorMsg.style.display = "block";
    successMsg.style.display = "none";
    return;
  }

  errorMsg.style.display = "none";
  successMsg.style.display = "block";
  form.reset();

  setTimeout(() => {
    successMsg.style.display = "none";
  }, 4000);
});
