const counterButton = document.getElementById("counterButton");
const displayCount = document.getElementById("displayCount");
// parseInt(); gör att siffran som hämtas (som i detta fall är en sträng) från HTML blir till en siffra.

let count = parseInt(displayCount.textContent);

counterButton.addEventListener("click", function () {
  count += 1;
  displayCount.textContent = count;
});
