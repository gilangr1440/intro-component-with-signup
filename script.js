const button = document.querySelector(".form-section__button");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const validation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let formCont = document.getElementsByClassName("form-section__form-cont");
let errorIcon = document.getElementsByClassName("form-section__error");
let errorMessage = document.getElementsByClassName("form-section__error-message");
let toast = document.querySelector(".toast-success");

button.addEventListener("click", () => {
  let isFirstName = false;
  let isLastName = false;
  let isEmail = false;
  let isPassword = false;

  if (firstName.value == "") {
    formCont[0].classList.add("error");
    errorIcon[0].style.display = "block";
    errorMessage[0].innerText = "First Name cannot be empty";
    errorMessage[0].style.display = "block";
  } else if (firstName.value.length < 3) {
    formCont[0].classList.add("error");
    errorIcon[0].style.display = "block";
    errorMessage[0].innerText = "First Name must be at least 3 characters";
    errorMessage[0].style.display = "block";
  } else {
    isFirstName = true;
    formCont[0].classList.remove("error");
    errorIcon[0].style.display = "none";
    errorMessage[0].style.display = "none";
  }

  if (lastName.value == "") {
    formCont[1].classList.add("error");
    errorIcon[1].style.display = "block";
    errorMessage[1].innerText = "Last Name cannot be empty";
    errorMessage[1].style.display = "block";
  } else if (lastName.value.length < 3) {
    formCont[1].classList.add("error");
    errorIcon[1].style.display = "block";
    errorMessage[1].innerText = "Last Name must be at least 3 characters";
    errorMessage[1].style.display = "block";
  } else {
    isLastName = true;
    formCont[1].classList.remove("error");
    errorIcon[1].style.display = "none";
    errorMessage[1].style.display = "none";
  }

  if (email.value == "") {
    formCont[2].classList.add("error");
    errorIcon[2].style.display = "block";
    errorMessage[2].innerText = "Email cannot be empty";
    errorMessage[2].style.display = "block";
  } else if (!email.value.match(validation)) {
    formCont[2].classList.add("error");
    errorIcon[2].style.display = "block";
    errorMessage[2].innerText = "Looks like this is not an email";
    errorMessage[2].style.display = "block";
  } else if (email.value.match(validation)) {
    isEmail = true;
    formCont[2].classList.remove("error");
    errorIcon[2].style.display = "none";
    errorMessage[2].style.display = "none";
  }

  if (password.value == "") {
    formCont[3].classList.add("error");
    errorIcon[3].style.display = "block";
    errorMessage[3].innerText = "Password cannot be empty";
    errorMessage[3].style.display = "block";
  } else if (password.value.length < 6) {
    formCont[3].classList.add("error");
    errorIcon[3].style.display = "block";
    errorMessage[3].innerText = "Last Name must be at least 6 characters";
    errorMessage[3].style.display = "block";
  } else {
    isPassword = true;
    formCont[3].classList.remove("error");
    errorIcon[3].style.display = "none";
    errorMessage[3].style.display = "none";
  }

  if (isFirstName && isLastName && isEmail && isPassword) {
    toast.style.display = "flex";

    setTimeout(() => {
      toast.style.display = "none";

      location.reload();
    }, 2500);
  }
});
