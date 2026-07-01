addEventListener("mousemove",(e)=>{
    // console.log(e.clientX);
    document.documentElement.style.setProperty("--x",e.clientX+"px");
    document.documentElement.style.setProperty("--y",e.clientY+"px");
})