var element = document.getElementById("animateTextOne");
var scroll = ["a Digital Artist...", "an Animator...", "a Designer...", "Rinno..."];


var count = 0;
var index = 0;
var currentText = "";
var letter = "";
var goingBack = false;

function type(){
    if (count === scroll.length){
        return;
    }
    currentText = scroll[count];
    if (!goingBack){
        letter = currentText.slice(0, ++index);
        element.innerHTML = "I am <span class = 'toStyle'>" + letter + " | </span> ";
        if (count === scroll.length - 1){
            element.innerHTML = "I am <span class = 'toStyle'>" + letter + "</span>";
            return;
        }
    }else{

        letter = currentText.slice(0, --index);
        element.innerHTML =  "I am <span class = 'toStyle'>" + letter + " |</span>";
        if (index === 0){
            goingBack = false;
            count++;
        }
    }
    if (letter.length === currentText.length){
        goingBack = true
    }
}

setInterval(type, 100);
