var d = document.querySelectorAll(".drum").length;
for (var i = 0; i < d; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInner = this.innerHTML;
    makeSound(buttonInner);
    buttonAnimation(buttonInner);
  });
}
addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "k":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "e":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "h":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "a":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "v":
      var crash = new Audio("sounds/kick-bass.mp3");
      crash.play();
      break;
    case "p":
      var kick = new Audio("sounds/crash.mp3");
      kick.play();
      break;

    default:
      console.log(buttonInner);
  }
}
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
