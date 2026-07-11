//1.    Create an object called laptop that contains brand, price, and a start method that prints “Laptop started”.
// let laptop={
//     brand:"dell",
//     price:50000,
//     start:function(){
//         console.log("Laptop started")

//     },
// }
// laptop.start();

//2.	Add one more method to the same object that increases the price by 10 percent.
// let laptop={
//     brand:"dell",
//     price:50000,
//     start:function(){
//         console.log("Laptop started")

//     },
//     increased(){
//         this.price= this.price+((this.price*10)/100);
//     }
// }
// laptop.increased();
// console.log(laptop.price);

//4.  Create a class named Employee that stores:name,salary,Add a method showDetails that prints name and salary.
// class Employee{
//     constructor(name,salary){
//         this.name=name;
//         this.salary=salary;
//     }
//     showDetails(){
//         console.log(`name:${this.name},salary:${this.salary}`);
//     }

// }
// let e1=new Employee("samiksha",3400000);
// e1.showDetails()

//5.	Create three employee objects from the same class and verify that modifying one employee does not affect the others.
// class Employee{
//     constructor(name,salary){
//         this.name=name;
//         this.salary=salary;
//     }
//     showDetails(){
//         console.log(`name:${this.name},salary:${this.salary}`);
//     }

// }
// let e1=new Employee("samiksha",3400000);
// let e2=new Employee("sam",4400000);
// let e3=new Employee("sami",5400000);

// e1.salary=6400000;
// e1.showDetails();
// e2.showDetails();
// e3.showDetails();

//7.	Create a class named BankAccount.Its constructor should accept accountHolderName and balance. 
//8.	Inside the constructor, store both values using this.
//9.	Add a method deposit(amount) that increases the balance.
//10.	Create two bank accounts and deposit money into only one.Observe and explain why the second account is not affected.
// class BankAccount{
//     constructor(accountHolderName,balance){
//         this.accountHolderName=accountHolderName;
//         this.balance=balance
//     }
//     deposit(amount){
//         this.balance+=amount;
//     }
// }
// let b1=new BankAccount("samiksha",10000000);
// b1.deposit(2);
// console.log(b1.balance);

// let b2=new BankAccount("sam",10000000);

//11.	Create an object named profile with a property username and a method printName that logs this.username.
//12.	Call the method normally and observe the output.
//13.	Store the method in a separate variable and call it.Observe what happens to this and explain why.
//14.	Modify the code so that this works correctly again.
// let profile={
//     username:"samiksha",
//     printName(){
//         console.log(this.username);

//     }
// }
// profile.printName();
// let fn=profile.printName;   //wrong
// fn();

//15.	Create a constructor function called Vehicle that accepts type and wheels.

// function Vehicle(type,wheels){
//     this.type=type;
//     this.wheels=wheels;

// }
// let v1=new Vehicle("scooty",2);
// console.log(v1);

//16.	Add a method describe inside the constructor and observe memory behavior when multiple objects are created.
// function Vehicle(type, wheels) {
//     this.type = type;
//     this.wheels = wheels;
//     this.describe = function () {
//         console.log("hello");
//     }

// }
// let v1 = new Vehicle("scooty", 2);
// let v2 = new Vehicle("bike", 2);
// console.log(v1.describe===v2.describe)  //false

// 17.	Move the same method to Vehicle.prototype and repeat the test.
//18.	Explain why the prototype approach is preferred.
// function Vehicle(type, wheels) {
//     this.type = type;
//     this.wheels = wheels;
// }
// Vehicle.prototype.describe = function () {
//     console.log("hello");
// }
// let v1 = new Vehicle("scooty", 2);
// let v2 = new Vehicle("bike", 2);
// console.log(v1.describe===v2.describe); //true

//19.	Create a function showBrand that prints this.brand.
// let obj={
//     brand:"kia",
// }
// function showBrand(){
//     console.log(this.brand);
    
// }
// showBrand.call(obj);

//20.	Create two different objects with brand values.
// 21.	Use call to execute showBrand for both objects.
// 22.	Explain what problem call is solving here.
// let obj1={
//     brand:"kia",
// }
// let obj2={
//     brand:"shift",
// }
// function showBrand(){
//     console.log(this.brand);
    
// }
// showBrand.call(obj1);
// showBrand.call(obj2);

//23.	Create a function introduce that accepts two arguments: city and role, and prints name, city, and role using this.name.
//24.	Create an object with a name property.
//25.	Use apply to call introduce using the object and an array of arguments.
//26.	Explain in simple words how apply differs from call.
// let obj={
//     name:"samiksha",
// }
// function introduce(city,role){
//     console.log(this.name,city,role);
    

// }
// introduce.apply(obj,["hisar","front"])
// introduce.call(obj,"hisar","front");

//27.	Create a function greet that prints “Hello” followed by this.name.
//28.	Bind this function to an object and store the returned function in a variable.
//29.	Call the bound function later and observe the output.
//30.	Explain why bind is useful when functions are executed later or inside callbacks.

let obj={
   name:"samiksha",
}
function greet(){
    console.log("hello",this.name);
    
}
greet.call(obj)
let b1=greet.bind(obj)
b1();
