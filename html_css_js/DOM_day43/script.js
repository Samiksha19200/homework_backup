var arr = [
    {
        team: "CSK",
        primary: "yellow",
        secondary: " blue",
        fullname: "Chennai Super Kings",
        trophies: 5,
        cptain: "Ruturaj Gaikwad"
    },
    {
        team: "MI",
        primary: "blue",
        secondary: "gold",
        fullname: "Mumbai Indians",
        trophies: 5,
        cptain: "Hardik Pandya"
    },
    {
        team: "KKR",
        primary: "purple",
        secondary: "gold",
        fullname: "Kolkata Knight Riders",
        trophies: 3,
        cptain: "Ajinkya Rahane"
    },
    {
        team: "RR",
        primary: "pink",
        secondary: "blue",
        fullname: "Rajasthan Royals",
        trophies: 1,
        cptain: "Sanju Samson"
    },
    {
        team: "RCB",
        primary: "red",
        secondary: "black",
        fullname: "Royal Challengers Bengaluru",
        trophies: 2,
        cptain: "Rajat Patidar"
    },
    {
        team: "DC",
        primary: "blue",
        secondary: "red",
        fullname: "Delhi Capitals",
        trophies: 0,
        cptain: "Axar Patel"
    }
]
var h=document.querySelector("h1")
var btn= document.querySelector("button")
var main= document.querySelector("main")

btn.addEventListener("click",function(){
    var winner=arr[Math.floor(Math.random()*arr.length)]
    h.innerHTML=`
    Team:${winner.team}<br>
    ${winner.fullname}<br>
    Trophies:${winner.trophies}<br>
    Captain:${winner.cptain} ` 
    h.style.backgroundColor=winner.secondary
    main.style.backgroundColor=winner.primary
});
