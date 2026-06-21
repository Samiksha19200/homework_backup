const users = [
  {
    username: "Aarav Sharma",
    image: "https://plus.unsplash.com/premium_photo-1689747698547-271d2d553cee?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profession: "Web Developer",
    description: "Passionate about building modern and responsive websites."
  },
  {
    username: "Priya Verma",
    image: "https://i.pinimg.com/736x/e8/79/8d/e8798dda171578a36a5bcda0b33c85a8.jpg",
    profession: "UI/UX Designer",
    description: "Designing user-friendly and visually appealing interfaces."
  },
  {
    username: "Rohan Gupta",
    image: "https://plus.unsplash.com/premium_photo-1689708721750-8a0e6dc14cee?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profession: "Software Engineer",
    description: "Loves solving complex problems with clean code."
  },
  {
    username: "Ananya Singh",
    image: "https://i.pinimg.com/736x/f1/ac/f4/f1acf4d83cc833218c968286dd40278e.jpg",
    profession: "Content Creator",
    description: "Creating engaging content for social media platforms."
  }
];

var sum=''
users.forEach(function(val){
    sum=sum+`<div class="card">
            <img src=${val.image}> </img>
            <h3>${val.username}</h3>
            <h4>${val.profession}</h4>
            <p>${val.description}</p>
        </div>`
})
var main=document.querySelector("main")
main.innerHTML=sum
