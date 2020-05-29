var css = document.querySelector("h3");
var h1 = document.querySelector("h1");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");


// Creates 'Random' button which creates random gradient colors
function createButton() {
	var rButton = document.createElement("button");
	var divBtn = document.createElement("div");
	h1.after(divBtn);
	divBtn.appendChild(rButton);
	divBtn.style.padding = "10px";
	rButton.innerHTML = "Surprise me!";	
	rButton.setAttribute("border-radius", "4px;");
	rButton.setAttribute("style","margin: 5px;");
	rButton.style.backgroundImage = "linear-gradient(to right, #DD5E89 0%, #F7BB97 51%, #DD5E89 100%)";

	rButton.addEventListener("click", randomColors);
	rButton.addEventListener("mouseenter", rBtnHoverOn);
	rButton.addEventListener("mouseleave", rBtnHoverOff);
	rButton.addEventListener("mousedown", rndmBtnGrdnt);
}

createButton();

//Sets the style for rButton
function rBtnStyle() {
	
}

//Changes rButton gradient on 'mouse enter' 
function rBtnHoverOn(rButton) {
	this.style.backgroundImage = "linear-gradient(to left, #F7BB97 0%, #DD5E89 51%, #F7BB97 100%)";
}

//Changes rButton gradient back on 'mouse leaves' 
function rBtnHoverOff(rButton) {
	this.style.backgroundImage = "linear-gradient(to right, #DD5E89 0%, #F7BB97 51%, #DD5E89 100%)";
}

// Sets the color at the loading
function setDefColors() {
	color1.value = "#ff0000";
	color2.value = "#ffff00";
	setGradient();
}

setDefColors();

// Creates random color for gradient
function randomColors() {
	color1.value = "#" + fullColorHex(getRndInteger(0, 256), getRndInteger(0, 256), getRndInteger(0, 256));
	color2.value = "#" + fullColorHex(getRndInteger(0, 256), getRndInteger(0, 256), getRndInteger(0, 256));
	setGradient();
}


// Trannsfer 3 color numbers of RGB into HEX
var fullColorHex = function(r,g,b) {   
  var red = rgbToHex(r);
  var green = rgbToHex(g);
  var blue = rgbToHex(b);
  return red+green+blue;
};

// Transnfer single color number of RGB to HEX
var rgbToHex = function (rgb) { 
  var hex = Number(rgb).toString(16);
  if (hex.length < 2) {
       hex = "0" + hex;
  }
  return hex;
};

// Creates random integer between min (included) and max (excluded)
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Set the bg-gradient according to input colors
function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";

}

// Set the bg-gradient according to input colors
function rndmBtnGrdnt(rButton) {
	this.style.backgroundImage = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);