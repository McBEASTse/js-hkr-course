const contactForm = document.getElementById("contact_form");
const firstNameInput = document.getElementById("first_name");
const lastNameInput = document.getElementById("last_name");
const emailInput = document.getElementById("email");
const phoneNumberInput = document.getElementById("phone_number");
const senderMessageInput = document.getElementById("sender_message");
const messageLengthCounter = document.getElementById("message_length");
const inputElements = document.querySelectorAll("input, textarea");
const formFeedback = document.getElementById("form_feedback");
// const clearAllInput = document.getElementById("clear_all"); -- Here's a variable I missed that it is not used. It was from an earlier itteration when I tested how to reset the form, and it targets the id of the reset button.

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
    }, 0);

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

// Here each input field is validated with styling and return boolean if the input is valid, invalid or is neutral (no content).
function validateInputField(input, state) {
  // First, clear all the styling.
  input.classList.remove(
    "input_field_neutral",
    "input_field_validated",
    "input_field_error",
  );

  if (state === "valid") {
    input.classList.add("input_field_validated");
    return true;
    // The returned state is used in validateForm(), which is called when the form is submitted: if everything is valid (true), the form is sent. If the form is invalid (false), the user gets an error message and the error for that input field is shown (if for some reason the error is not showing in previous state).
  } else if (state === "error") {
    input.classList.add("input_field_error");
    return false;
  } else {
    input.classList.add("input_field_neutral");
    return false;
  }
}

function validateName(input) {
  // First, trim the input from spaces (so that the input field can not be empty with just spaces). If the input has spaces before a name, the input is still valid (as the spaces are trimmed).
  const nameValue = input.value.trim();
  // Create a regular expression that is everything NOT in the clamp (^ inverts the regex value, \s\ is a space, \- is for dashes). +$ checks the whole string, from start to finish,.
  const validateLetter = /^[a-zåäöA-ZÅÄÖ\s\-]+$/;

  // First we check if the input field is empty. If it is, we get an error.
  if (nameValue === "") {
    return showError(input, "Name can not be empty");
    // Then we test the input, nameValue, with the regular expression that we created.
    // If there are no other symbols than in the regex, the statement is true and we clear the error and use validateInputField to change the color of the border of the element to green.
  } else if (validateLetter.test(nameValue)) {
    clearError(input);
    return validateInputField(input, "valid");
  } else {
    // If there is anything else than what we put in to the regex, we get an error.
    return showError(input, "Name can only contain letters");
  }
}

// This basically works the same as the name-checking function.
function validateEmail(input) {
  const emailValue = input.value.trim();
  const validateInput = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (emailValue === "") {
    return showError(input, "Email can not be empty");
  } else if (validateInput.test(emailValue)) {
    clearError(input);
    return validateInputField(input, "valid");
  } else {
    return showError(input, "Email is not valid");
  }
}

// This basically works the same as the other functions.
function validatePhoneNumber(input) {
  const phoneNumberValue = input.value.trim();
  const validateInput = /^[0-9\s\-+]{7,15}$/;

  if (phoneNumberValue === "") {
    clearError(input);
    validateInputField(input);
    // This return true is special for this function, as the input field for the phone number can be empty. No need to make a special case for this in previous function.
    return true;
  } else if (validateInput.test(phoneNumberValue)) {
    clearError(input);
    return validateInputField(input, "valid");
  } else {
    return showError(input, "Phone number is not valid");
  }
}

// This basically works the same as the other functions.
function validateMessage(input) {
  const messageLength = input.value.trim().length;
  messageLengthCounter.innerText = messageLength;

  if (messageLength <= 19) {
    messageCounterColor("error");
    return showError(input, "Your message must be at least 30 characters long");
  } else if (messageLength >= 30) {
    messageCounterColor("valid");
    clearError(input);
    return validateInputField(input, "valid");
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

// Here we validate each input field from earlier with a switch statements instead of using if statements, as the switch statements is easier to read.
function validateForm(input) {
  switch (input.id) {
    case "first_name":
    case "last_name":
      return validateName(input);
    // The returned value is checked when the form is submitted.

    case "email":
      return validateEmail(input);

    case "phone_number":
      return validatePhoneNumber(input);

    case "sender_message":
      return validateMessage(input);

    // As we don't validate the dropdown, we just return all defaults as true.
    default:
      return true;
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

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  // We assume that all input fields are valid until they are not.
  let formValidated = true;

  // Here we check each input field if they are valid. If any of them is not, the form is not valid.
  inputElements.forEach((input) => {
    if (!validateForm(input)) {
      formValidated = false;
    }
  });

  // I chose to add the HTML for validation/error message as a string as it just felt easier in this case.
  if (formValidated) {
    formFeedback.innerHTML = `<div class="message_send_base message_send_valid"><p>Thank you ${firstNameInput.value} ${lastNameInput.value}! I will get back to you as soon as possible.</p></div>`;
    clearForm();
  } else {
    formFeedback.innerHTML = `<div class="message_send_base message_send_error"><p>There seems to be some errors that needs fixing before you can send your message!</p></div>`;
  }
  // Here I nested the timeouts so they run in order instead of risking that they interupt each other.
  setTimeout(() => {
    setTimeout(() => {
      setTimeout(() => {
        // Remove the validation/error message.
        formFeedback.innerHTML = ``;
      }, 500);
      // Remove the opacity so it fades out.
      formFeedback.firstElementChild.classList.remove("message_send_visible");
    }, 2500);
    // Add the opacity to the element so it fades in.
    formFeedback.firstElementChild.classList.add("message_send_visible");
  });
});
