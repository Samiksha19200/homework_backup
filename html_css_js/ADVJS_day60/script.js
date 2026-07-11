// function abcd(fn){
//     fn(function(fn3){
//         fn3(function(fn5){
//             fn5();
//         });
//     });
// }
// abcd(function(fn2){
//     fn2(function(fn4){
//         fn4(function(){
//             console.log("hello")
//         });
//     });
// });


//1--------------------------
// function afterDelay(time,cb){
//     setTimeout(()=>{
//         cb();
//     },time)
// }
// afterDelay(3000,function(){
//     console.log("callback executed");
    
// })

//2-------------------------
// function getUser(username,cb){
//     setTimeout(()=>{
//         cb({id:"1","username":"samiksha"})
//     },1000);

// };
// function getUserPosts(id,cb){
//     setTimeout(()=>{
//         cb(["happy","single","sad"])
//     },2000)

// }
// getUser("samiksha",function(details){
//     getUserPosts(details.id,function(allposts){
//         console.log(details.username,allposts);
        
//     })
// })

//3-----------------
// function loginUser(user,cb){
//     console.log("logging in user")
//     setTimeout(()=>{
//         cb({"id":1,"username":"samiksha"});
//     },1000)
// }
// function fetchPermissions(userid,cb){
//     console.log("fetching the permissions")
//     setTimeout(() => {
//         cb(["yes","permission","is","given"]);
//     }, 2000);
// }
// function loadDashboard(permissionlelo,cb){
//     console.log("loading dashboard")
//     setTimeout(() => {
//         cb("Dashboard loaded");
//     }, 3000);
// }




// loginUser("samiksha",function(logindetails){
//     fetchPermissions(logindetails.id,function(permission){
//         loadDashboard(permission,function(finaloutput){
//             console.log(finaloutput);
//         })
//     })

// })
