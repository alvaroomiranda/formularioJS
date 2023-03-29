const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const emailValue = email.value;
  const passwordValue = password.value;



  if (emailValue === "") {
    setErrorFor(email, "O email é obrigatório.");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Por favor, insira um email válido.");
  } else {
    setErrorFor(email, "Email válido!");
  }

if (passwordValue === "") {
  setErrorFor(password, "A senha é obrigatória.");
} else if (passwordValue.length < 7) {
  setErrorFor(password, "A senha precisa ter no mínimo 7 caracteres.");
} else {
  setErrorFor(password, "Senha válida!");
}

const formControls = form.querySelectorAll(".form-control");

const formIsValid = [...formControls].every((formControl) => {
  return formControl.className === "form-control success";
});

if (formIsValid) {
  console.log("O formulário está 100% válido!");
}
}

function setErrorFor(input, message) {
const formControl = input.parentElement;
const small = formControl.querySelector("small");

small.innerText = message;

formControl.className = "form-control error";
}

function setSuccessFor(input) {
const formControl = input.parentElement;

formControl.className = "form-control success";
}

function checkEmail(email) {
return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}