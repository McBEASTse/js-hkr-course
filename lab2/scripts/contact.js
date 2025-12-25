const contactForm = document.getElementById("contact_form");
const firstNameInput = document.getElementById("first_name");
const lastNameInput = document.getElementById("last_name");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const senderMessageInput = document.getElementById("sender_message");
const requiredField = document.querySelectorAll("input[required]");
const updatedDiv = document.getElementById("updatedDiv");

function clearError(input) {
  // First go to the parent element of the input element.
  const container = input.parentElement;
  // Create a variable for the selected element with class error_message.
  let errorDisplay = container.querySelector(".error_text");

  // If there is a errorDispay, remove it.
  if (errorDisplay) {
    errorDisplay.remove();
  }
}

function showError(input, message) {
  // First, go to the parent element of the input element.
  const container = input.parentElement;

  // Create a variable for the selected element with class error_message.
  let errorDisplay = container.querySelector(".error_text");

  // If there is no errorDisplay variable, create a paragraph with class error_message.
  if (!errorDisplay) {
    errorDisplay = document.createElement("p");
    errorDisplay.className = "error_text";
    container.appendChild(errorDisplay);
  }

  // Show the passed error message.
  errorDisplay.textContent = message;
}

function validateName(input) {
  // First, trim the input from spaces (so that the input field can not be empty with just spaces).
  const nameValue = input.value.trim();
  // Create a regular expression that is everything NOT in the clamp (^ inverts the regex value, \s\ is a space, \- is for dashes).
  const validateLetter = /[^a-zåäöA-ZÅÄÖ\s\-]/;

  // We test if the input, nameValue, with the regular expression that we created.
  if (validateLetter.test(nameValue)) {
    // If there is anything else than what we put in to the regex, we get an error.
    showError(input, "Name can only contain letters");
    // If the input field is empty, we get another error.
  } else if (nameValue === "") {
    showError(input, "Name can not be empty");
    // If everything i OK, the error is cleared.
  } else {
    clearError(input);
  }
}

// Here we check the input field for the first name.
firstNameInput.addEventListener("input", function () {
  validateName(firstNameInput);
});

// Here we check the input field for the last name.
lastNameInput.addEventListener("input", function () {
  validateName(lastNameInput);
});

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (requiredField.value.trim() === "") {
    updatedDiv.textContent = "That shit was empty";
    console.log("Form NOT submitted.");
  } else {
    contactForm.submit();
    updatedDiv.textContent = "That shit was sent";
    console.log("Form submitted.");
  }
});
