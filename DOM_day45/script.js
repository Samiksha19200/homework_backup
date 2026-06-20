var main=document.querySelector("main")
var btn = document.querySelector("button")
var h2= document.querySelector("h2")
var inner= document.querySelector(".inner")
var a=0
btn.addEventListener("click",function(){
    btn.style.pointerEvents="none"
    var int=setInterval(function(){
        a++
        h2.innerHTML=a+"%"
        inner.style.width= a+"%"
    },50)
    setTimeout(function(){
        clearInterval(int)
        btn.innerHTML="Downloaded"
        btn.style.opacity=0.5
        
    },5000)
})