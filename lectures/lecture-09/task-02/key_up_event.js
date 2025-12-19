const inputDisplay = document.getElementById("inputField");
const displayDiv = document.getElementById("displayDiv");

inputDisplay.addEventListener("keyup", function () {
  displayDiv.innerText = this.value;
});
