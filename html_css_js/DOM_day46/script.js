var img = document.querySelector("img");
var card= document.querySelector(".card")
var i = document.querySelector("i")

img.addEventListener("dblclick", function () {
    i.style.opacity=1
    i.style.transform= "translate(-50%, -50%) scale(1)"

    setInterval(() => {
        i.style.opacity=0
    }, 1000);
});