
// document.body.style.backgroundImage = "";
document.body.style.backgroundRepeat = "repeat";

// Change text font to Comic Sans MS
var allElements = document.querySelectorAll('*');
for (var i = 0; i < allElements.length; i++) {
    allElements[i].style.fontFamily = 'Comic Sans MS';
}

// Add a border to all elements
for (var i = 0; i < allElements.length; i++) {
    allElements[i].style.border = '1px solid #ff00ff';
}