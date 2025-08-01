document.addEventListener("DOMContentLoaded", () => {
  const inputs = {
    firstName: document.getElementById("First_name"),
    lastName: document.getElementById("Last_name"),
    email: document.getElementById("email"),
    password: document.getElementById("Password"),
    rePassword: document.getElementById("Re_Password"),
  };

  const errors = {
    firstName: document.getElementById("e01"),
    lastName: document.getElementById("e02"),
    email: document.getElementById("e03"),
    password: document.getElementById("e04"),
    rePassword: document.getElementById("e05"),
  };

  const regex = {
    name: /^[A-Za-z]{3,}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
  };

  const validateField = (input, type, key) => {
    const value = input.value.trim();
    let isValid = false;

    if (type === "name") {
      isValid = regex.name.test(value);
    } else if (type === "email") {
      isValid = regex.email.test(value);
    } else if (type === "password") {
      isValid = regex.password.test(value);
    } else if (type === "rePassword") {
      isValid = value === inputs.password.value && value !== "";
    }

    if (!isValid) {
      setError(input, errors[key], getErrorMessage(type));
    } else {
      setSuccess(input, errors[key]);
    }

    return isValid;
  };

  const getErrorMessage = (type) => {
    switch (type) {
      case "name": return "Enter at least 3 letters.";
      case "email": return "Enter a valid email address.";
      case "password": return "Min 8 chars: upper, lower, number & symbol.";
      case "rePassword": return "Passwords do not match.";
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

document.addEventListener('DOMContentLoaded', () => {
  const showBtn = document.getElementById('showTerms');
  const modal = document.getElementById('termsModal');

  showBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'flex';
  });

  // Close modal if click outside the #terms box
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});