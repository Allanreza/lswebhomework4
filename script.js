
// Selectors
var body = document.getElementsByTagName("BODY")[0];
var aboutMe = document.getElementsByTagName("H1")[0];
var nickname = document.getElementById("nickname");
var favorites = document.getElementById("favorites");
var hometown = document.getElementById("hometown");

// Iterate through each li and change class name to "listitem" then make them red
var unorderedList = document.getElementsByTagName("UL")[0];
var listitem = document.getElementsByClassName("listitem")[0];
for(var i = 0; i < unorderedList.children.length; i++) {
  if(unorderedList.children[i].tagName === "LI") {
    unorderedList.children[i].className += "listitem";
  }
}

//Added styles
body.style.backgroundColor = "red";
body.style.fontFamily = "sans-serif";
aboutMe.style.backgroundColor = "blue";
nickname.innerHTML = "Allan";
favorites.innerHTML = "JavaScript & Soup";
hometown.innerHTML = "San Francisco, California";

// Add img tag
var img = document.createElement("img");
img.src = "dorin-vancea-83926.jpg";
body.appendChild(img);

img.style.width = '50%'
img.style.height = 'auto'
