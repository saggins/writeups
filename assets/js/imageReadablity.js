var imgs = document.getElementsByTagName('img');

for (let img of imgs) {
    img.addEventListener("mouseenter", function(event){
        var divs = document.getElementsByClassName("scanln");
        divs[0].classList.remove("scanlines");
        var output = document.getElementsByClassName("piece");
        output[0].classList.add("nonoutput");
        output[0].classList.remove("output");
    });
    img.addEventListener("mouseleave", function(event){
        var divs = document.getElementsByClassName("scanln");
        divs[0].classList.add("scanlines");
        var output = document.getElementsByClassName("piece");
        output[0].classList.remove("nonoutput");
        output[0].classList.add("output");
    });
}