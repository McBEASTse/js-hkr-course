const hoverText = document.getElementById("hoverText");

hoverText.addEventListener("mouseover", function () {
  this.style.color = "blue";
  console.log("Hover hover");
});

hoverText.addEventListener("mouseout", function () {
  this.style.color = "";
  console.log("Mouse away");
});
