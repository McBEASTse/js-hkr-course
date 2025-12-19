const updatedDiv = document.getElementById("updatedDiv");
const contactForm = document.getElementById("contactForm");
const inputField = document.getElementById("inputField");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (inputField.value.trim() === "") {
    updatedDiv.textContent = "That shit was empty";
    console.log("Form NOT submitted.");
  } else {
    contactForm.submit();
    updatedDiv.textContent = "That shit was sent";
    console.log("Form submitted.");
  }
});
