const main = document.querySelector('main')
const btn = document.querySelector('button')

btn.addEventListener("click",function(){
    var arr=["Keep learning.","Stay focused.","Dream big.","Never give up.","Trust yourself.","Be positive.","Work hard."]
    const h1= document.createElement("h1")
    const a= Math.floor(Math.random()*arr.length)
    h1.innerHTML=arr[a]
    const x=Math.random()*80
    const y=Math.random()*80
    const rot=Math.random()*60-30
    const scl = Math.random()*3
    const c1=Math.floor(Math.random()*256)
    const c2=Math.floor(Math.random()*256)
    const c3=Math.floor(Math.random()*256)

    h1.style.left=x+"%"
    h1.style.top=y+"%"
    h1.style.rotate=rot+"deg"
    h1.style.color=`rgb(${c1},${c2},${c3}`
    h1.style.position="absolute"
    h1.style.scale=scl
    console.log(h1); 
    main.appendChild(h1) 
    
})