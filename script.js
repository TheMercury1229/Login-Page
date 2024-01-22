// Login - Signup toggle
const logBtn = document.querySelector("#log-btn");
const signBtn = document.querySelector("#sign-btn");
const logContainer = document.querySelector(".login");
const signContainer = document.querySelector(".signup");
logBtn.addEventListener("click", () => {
  logBtn.classList.add("active");
  logContainer.classList.add("active");
  signBtn.classList.remove("active");
  signContainer.classList.remove("active");
});
signBtn.addEventListener("click", () => {
  logBtn.classList.remove("active");
  logContainer.classList.remove("active");
  signBtn.classList.add("active");
  signContainer.classList.add("active");
});
// Form  Validation
const loginForm = document.querySelector(".btn-login");
const signupForm = document.querySelector(".sign-btn");
loginForm.addEventListener("click", () => {
  const password = document.querySelector("#password").value;
  const email = document.querySelector("#email").value;
  const passLength = password.length;
  const errMsg = document.querySelector(".text-error");
  const errMsg2 = document.querySelector(".text-pass-error");
  if (email.length == 0) {
    errMsg.classList.add("active");
  } else {
    errMsg.classList.remove("active");
  }
  if (passLength < 8) {
    errMsg2.classList.add("active");
  } else {
    errMsg2.classList.remove("active");
  }
});
signupForm.addEventListener("click", () => {
  const password = document.querySelector("#password-1").value;
  const email = document.querySelector("#email-1").value;
  const name = document.querySelector("#name").value;
  const passLength = password.length;
  const errMsg = document.querySelectorAll(".text-error");
  const errMsg2 = document.querySelectorAll(".text-pass-error");
  if (email.length == 0) {
    errMsg[3].classList.add("active");
  } else {
    errMsg[3].classList.remove("active");
  }
  if (name.length == 0) {
    errMsg[2].classList.add("active");
  } else {
    errMsg[2].classList.remove("active");
  }
  if (passLength < 8) {
    errMsg2[1].classList.add("active");
  } else {
    errMsg2[1].classList.remove("active");
  }
  console.log(errMsg);
});
