const contactForm = document.getElementById("contact_form");
const firstNameInput = document.getElementById("first_name");
const lastNameInput = document.getElementById("last_name");
const emailInput = document.getElementById("email");
const phoneNumberInput = document.getElementById("phone_number");
const senderMessageInput = document.getElementById("sender_message");
const messageLengthCounter = document.getElementById("message_length");
const clearAllInput = document.getElementById("clear_all");
const inputElements = document.querySelectorAll("input, textarea");

function clearError(input) {
  // First go to the parent element of the input element.
  const container = input.parentElement;
  // Create a variable for the selected element with class error_message.
  let errorDisplay = container.querySelector(".error_message");

  // If there is a errorDisplay, remove it.
  if (errorDisplay) {
    errorDisplay.classList.remove("error_message_visible");

    // Set a timeout (delay) so that the CSS transition can do its thing.
    setTimeout(() => {
      if (errorDisplay) errorDisplay.remove();
    }, 500);
  }
}

function showError(input, message) {
  // First, go to the parent element of the input element.
  const container = input.parentElement;
  // Create a variable for the selected element with class error_message.
  let errorDisplay = container.querySelector(".error_message");
  // If there is no errorDisplay variable, create a paragraph with class error_message.
  if (!errorDisplay) {
    errorDisplay = document.createElement("p");
    errorDisplay.className = "error_message error_color";
    container.appendChild(errorDisplay);

    setTimeout(() => {
      errorDisplay.classList.add("error_message_visible");
    }, 1);

    // Run the function validateInputField with the status "error" to change the color of the border of the input element to red.
    validateInputField(input, "error");
  }

  // Show the passed error message.
  errorDisplay.textContent = message;
}

function clearForm() {
  contactForm.reset();

  // For each input element (input and textarea), clear the errors and make the input fields neutral (base border color).
  inputElements.forEach((input) => {
    clearError(input);
    validateInputField(input);
  });

  // Clear the formatting of the character counter and set the inner text of the message length element to zero.
  messageCounterColor();
  messageLengthCounter.innerText = "0";
}

function validateName(input) {
  // First, trim the input from spaces (so that the input field can not be empty with just spaces). If the input has spaces before a name, the input is still valid (as the spaces are trimmed).
  const nameValue = input.value.trim();
  // Create a regular expression that is everything NOT in the clamp (^ inverts the regex value, \s\ is a space, \- is for dashes). +$ checks the whole string, from start to finish,.
  const validateLetter = /^[a-zåäöA-ZÅÄÖ\s\-]+$/;

  // First we check if the input field is empty. If it is, we get an error.
  if (nameValue === "") {
    showError(input, "Name can not be empty");
    // Then we test the input, nameValue, with the regular expression that we created.
    // If there are no other symbols than in the regex, the statement is true and we clear the error and use validateInputField to change the color of the border of the element to green.
  } else if (validateLetter.test(nameValue)) {
    clearError(input);
    validateInputField(input, "valid");
  } else {
    // If there is anything else than what we put in to the regex, we get an error.
    showError(input, "Name can only contain letters");
  }
}

// This basically works the same as the name-checking function.
function validateEmail(input) {
  const emailValue = input.value.trim();
  const validateInput = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (emailValue === "") {
    showError(input, "Email can not be empty");
  } else if (validateInput.test(emailValue)) {
    clearError(input);
    validateInputField(input, "valid");
  } else {
    showError(input, "Email is not valid");
  }
}

// This basically works the same as the other functions.
function validatePhoneNumber(input) {
  const phoneNumberValue = input.value.trim();
  const validateInput = /^[0-9\s\-+]{7,15}$/;

  if (phoneNumberValue === "") {
    clearError(input);
    validateInputField(input);
  } else if (validateInput.test(phoneNumberValue)) {
    clearError(input);
    validateInputField(input, "valid");
  } else {
    showError(input, "Phone number is not valid");
  }
}

function validateInputField(input, state) {
  input.classList.remove(
    "input_field_neutral",
    "input_field_validated",
    "input_field_error",
  );

  if (state === "valid") {
    input.classList.add("input_field_validated");
  } else if (state === "error") {
    input.classList.add("input_field_error");
  } else {
    input.classList.add("input_field_neutral");
  }
}

// These functions changes the color of the character counter, and also works when the whole form is reset.
function messageCounterColor(state) {
  const container = messageLengthCounter.parentElement;
  container.classList.remove("error_color", "message_counter_valid");

  if (state === "valid") {
    container.classList.add("message_counter_valid");
  } else if (state === "error") {
    container.classList.add("error_color");
  }
}

// This basically works the same as the other functions.
function validateMessage(input) {
  const messageLength = input.value.trim().length;

  if (messageLength <= 19) {
    messageCounterColor("error");
    showError(input, "Your message must be at least 20 characters long");
  } else if (messageLength >= 20) {
    messageCounterColor("valid");
    clearError(input);
    validateInputField(input, "valid");
  }
  messageLengthCounter.innerText = messageLength;
}

// Here we check the input field for the first name.
firstNameInput.addEventListener("input", function () {
  validateName(firstNameInput);
});

// Here we check the input field for the last name.
lastNameInput.addEventListener("input", function () {
  validateName(lastNameInput);
});

// Here we check the input field for email.
emailInput.addEventListener("input", function () {
  validateEmail(emailInput);
});

// Here we check the input field for phone number.
phoneNumberInput.addEventListener("input", function () {
  validatePhoneNumber(phoneNumberInput);
});

// Here we call the validateMessage() to check if the message is long enough.
senderMessageInput.addEventListener("input", function () {
  validateMessage(senderMessageInput);
});

contactForm.addEventListener("reset", function () {
  clearForm();
});

// contactForm.addEventListener("submit", function (event) {
//   event.preventDefault();
//
//   if (requiredField.value.trim() === "") {
//     updatedDiv.textContent = "That shit was empty";
//     console.log("Form NOT submitted.");
//   } else {
//     contactForm.submit();
//     updatedDiv.textContent = "That shit was sent";
//     console.log("Form submitted.");
//   }
// });
