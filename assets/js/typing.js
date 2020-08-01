var textElements = document.getElementsByClassName("hide-text");
var text = textElements[0];
textString = text.innerHTML;
text.innerHTML ="";
text.className ="";
const typewriter = new Typewriter(text,{
    delay: 2.5,
    cursor:"",
});
typewriter
    .typeString(textString)
    .start();