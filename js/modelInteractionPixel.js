
var modal = document.getElementById("myModal");


var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

var images = document.querySelectorAll(".PixelIcons img");


images.forEach(function(img) {
  img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt || "Drawing"; 
  }
});


var span = document.getElementsByClassName("close")[0];


span.onclick = function() {
  modal.style.display = "none";
}