const div = document.getElementById("thing")
const button = document.getElementById("button")

divMoving = false

button.addEventListener("click", function(event) {
    event.preventDefault();
    if (divMoving) {
        resetDiv();
    } else {
        moveDiv();
    }; 
});

function moveDiv() {
    divMoving = true
    let leftPosition = 0;
    const moveInterval = setInterval(() => {
      leftPosition += 5; 
      div.style.left = leftPosition + "px";
      if (leftPosition >= window.innerWidth) {
        clearInterval(moveInterval);
      };
    }, 20); 
};

function resetDiv() {
    divMoving = false
    div.style.left = 0
};