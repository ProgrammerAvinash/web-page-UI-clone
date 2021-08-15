// function zoomin() {
//   var GFG = document.getElementById("zoom");
//   var currWidth = GFG.clientWidth;
//   GFG.style.width = currWidth + 100 + "px";
// }

// function zoomout() {
//   var GFG = document.getElementById("geeks");
//   var currWidth = GFG.clientWidth;
//   GFG.style.width = currWidth - 100 + "px";
// }

function changeImage(imageName, name) {
  document.querySelector("#zoomImage").src = imageName;
  document.getElementById("mainImage").src = imageName;
}
