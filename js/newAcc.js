// Fully load the html document
document.addEventListener("DOMContentLoaded", () => {
  
  // storing the inputs inside a js object
  const inputs = {
    firstName: document.getElementById("First_name"),
    lastName: document.getElementById("Last_name"),
    email: document.getElementById("email"),
    password: document.getElementById("Password"),
    rePassword: document.getElementById("Re_Password"),
  };

  // storing errors inside a js object
  const errors = {
    firstName: document.getElementById("e01"),
    lastName: document.getElementById("e02"),
    email: document.getElementById("e03"),
    password: document.getElementById("e04"),
    rePassword: document.getElementById("e05"),
  };

  // storing regax inside a js object
  const regex = {
    name: /^[A-Za-z]{3,}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
  };

  // Error messages stored in an array 
  const errorMessages = [
    "Enter at least 3 letters.",          
    "Enter a valid email address.",       
    "Min 8 chars: upper, lower, number & symbol.", 
    "Passwords do not match."              
  ];

  // js arrow functions to validate fiels
  const validateField = (input, type, key) => {

    const value = input.value.trim(); //trim the value, if any extra white spaces
    let isValid = false;

    if (type === "name") {
      isValid = regex.name.test(value);
    } else if (type === "email") {
      isValid = regex.email.test(value);
    } else if (type === "password") {
      isValid = regex.password.test(value);
    } else if (type === "rePassword") {
      isValid = value === inputs.password.value && value !== ""; // check the re enter password is not empty and match with password
    }

    if (!isValid) {
      setError(input, errors[key], getErrorMessage(type));
    } else {
      setSuccess(input, errors[key]);
    }

    return isValid;
  };

  //  use array for error messages according to rubric
  const getErrorMessage = (type) => {
    switch (type) {
      case "name": return errorMessages[0];
      case "email": return errorMessages[1];
      case "password": return errorMessages[2];
      case "rePassword": return errorMessages[3];
    }
  };

  const setError = (input, errorElem, message) => {
    input.classList.remove("valid");
    input.classList.add("invalid");
    errorElem.textContent = message;
  };

  const setSuccess = (input, errorElem) => {
    input.classList.remove("invalid");
    input.classList.add("valid");
    errorElem.textContent = "";
  };

  // Live validation
  inputs.firstName.addEventListener("input", () =>
    validateField(inputs.firstName, "name", "firstName")
  );

  inputs.lastName.addEventListener("input", () =>
    validateField(inputs.lastName, "name", "lastName")
  );

  inputs.email.addEventListener("input", () =>
    validateField(inputs.email, "email", "email")
  );

  inputs.password.addEventListener("input", () => {
    validateField(inputs.password, "password", "password");
    validateField(inputs.rePassword, "rePassword", "rePassword");
  });

  inputs.rePassword.addEventListener("input", () =>
    validateField(inputs.rePassword, "rePassword", "rePassword")
  );

  // Submit validation
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const valid =
      validateField(inputs.firstName, "name", "firstName") &&
      validateField(inputs.lastName, "name", "lastName") &&
      validateField(inputs.email, "email", "email") &&
      validateField(inputs.password, "password", "password") &&
      validateField(inputs.rePassword, "rePassword", "rePassword");

    if (valid) {
      alert("Form submitted successfully!");
      // Submit logic here
    }
  });
});

//show the detail view of terms and conditions according to rubric
document.addEventListener('DOMContentLoaded', () => {
  const showBtn = document.getElementById('showTerms');
  const modal = document.getElementById('termsModal');

  showBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'flex'; // when click show the elements in felx model
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none'; // when click outside the elements dissapear thats why use display none
    }
  });
});