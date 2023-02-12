const inputName = document.getElementById("name");
const inputLastName = document.getElementById("lastname");
const inputPhone = document.getElementById("phone");
const form = document.getElementById("form");

let fields = { name: false };

const valdationInput = (typeInput, value) => {
  const typeValidation = {
    name: /^[a-zA-z]{5,15}$/,
    lastname: /^[a-zA-z]{5,15}$/,
    phone: /^[0-9]{10}$/,
  };
  const isValidInput = typeValidation[typeInput].test(value);
  fields[typeInput] = isValidInput;
  /*
        1 -> {}
         {name : true o false}
     */
  return isValidInput;
};

const eventInput = (e) => {
  const typeInput = e.target.name;
  const value = e.target.value;
  const isValid = valdationInput(typeInput, value);
  e.target.style.border = isValid ? "solid 1px black" : "solid 1px red";
};

const clearForm = () => {
  form.reset();
  fields = { name: false };
};

inputName.addEventListener("blur", eventInput);

inputLastName.addEventListener("blur", eventInput);

inputPhone.addEventListener("blur", eventInput);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const dataForm = Object.fromEntries(new FormData(form));
  const isValidForm = Object.values(dataForm).every((item) => item);
  console.log(dataForm);
  if (isValidForm) {
    const everyIsValidInput = Object.values(fields).every((item) => item);
    isValidForm && everyIsValidInput
      ? clearForm()
      : alert("formulario invalid");
  }
});
