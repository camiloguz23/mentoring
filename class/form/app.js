const inputName = document.getElementById("name");
const inputLastName = document.getElementById("lastname");
const inputPhone = document.getElementById("phone");
const form = document.getElementById("form");

let fields = { name: false }; // help us for we know if input is complete

const regex = {
  name: /^[a-zA-Z]{4,20}$/,
  lastname: /^[a-zA-Z]{4,20}$/,
  phone: /^[0-9]{10}$/,
};

inputName.addEventListener("blur", validationInput);
inputLastName.addEventListener("blur", validationInput);
inputPhone.addEventListener("blur", validationInput);
form.addEventListener("submit", validationForm);

function validationInput(event) {
  const typeInput = event.target.name;
  const valueInput = event.target.value;
  const isValid = regex[typeInput].test(valueInput);
  fields[typeInput] = isValid;
  event.target.style.border = isValid ? "solid 1px black" : "solid 1px red";
}

function clearDataForm() {
  form.reset();
  fields = { name: false };
}

function validationForm(e) {
  e.preventDefault();
  const dataForm = Object.fromEntries(new FormData(form));
  const isValidForm = Object.values(dataForm).every((item) => item);
  if (isValidForm) {
    const isValidInput = Object.values(fields).every((item) => item);
    isValidInput ? clearDataForm() : alert("formaulario invalido");
    isValidInput && alert("datos guardados");
  }
}
