// Code for Safari 3.1 to 6.0
document.getElementById("myDIV").addEventListener("webkitTransitionEnd", myFunction);

// Standard syntax
document.getElementById("myDIV").addEventListener("transitionend", myFunction);

function myFunction(event) {
    this.innerHTML = "CSS Property used: " + event.propertyName;
}