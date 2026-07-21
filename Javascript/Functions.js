//? Functions in JS

// function greet(){
//     console.log("Good Morning All")
// }


// greet()


//! Function with parameters
// function add(n1,n2){
//     console.log(n1+n2)
// }

// add(10,20)

//! Function with return type

// function add(){
//     return 10+15
// }
// console.log(add())


// let res=add()
// console.log(res)

//! Function with parameter and return type

// function add(n1,n2){
//     return n1+n2
// }
// console.log(add(5,10))
// let res=add(10,10)
// console.log(res)



// function mul(num1,num2){
//     // console.log(num1*num2)
//     return num1*num2    
// }
// console.log(mul(5,3))

// let res=mul(10,5)
// console.log(res)

// function wishes(person){
//     console.log(`Happy Birthday ${person}`)
// }

// wishes('sakshi')
// wishes('balaji')


//! Types of Function [or] Ways to declare functions
//? 1. Anonymous  Function
// function (){
//     console.log("Anonymous  Function")
// }
//? 2. Named  Function
//? 3. Function with expression
// let fun = function () {
//     console.log("Anonymous  Function")
// }
// fun()

// let birthdayWish = function wishes(person) {
//     console.log(`Happy Birthday ${person}`)
// }


// birthdayWish('sashi')
//? 4. First Class Function [or] First Citizen Function
//? 5. Nested Function
//! Javascipt Closure
// function parent() {
//     let a = 10;
//     let b = 20;
//     console.log(a)
//     console.log(b)

//     function child() {
//         console.log(a)
//         console.log(b)
//     }
//     child()
// }
// parent()

//! Javascript Currying
// function parent() {
//     let a = 10;
//     let b = 20;
//     console.log(a)
//     console.log(b)

//     function child() {
//         console.log("Iam a child function")
//         console.log(a)
//         console.log(b)
//     }
//     return child
// }
// parent()()
//? 6. Arrow Function
// let arrFun=()=>{
//     console.log("Iam a arrow function")
// }
// arrFun()

//! Implicit return
// let add=(a,b)=>a+b
// console.log(add(5,10))
// let res= add(10,20)
// console.log(res)
//! Explicit return

// let add=(n1,n2)=>{
//     return n1+n2
// }
// console.log(add(5,5))


//? 7. Higher Order Function [HOF]
//? 8. Call Back Function [CBF]

// function add(){
//     console.log(10+10)
// }
// function sub(){
//     console.log(20-10)
// }
// function mul(){
//     console.log(10*10)
// }
// function ArithmeticOperation(operator){
//     operator()
// }
// ArithmeticOperation(add)
// ArithmeticOperation(sub)



// function deposit(amount){
//     console.log(`${amount} deposited successfully`)
// }
// function withdraw(amount){
//     console.log(`${amount} withdraw successfully`)
// }
// function transfer(amount){
//     console.log(`${amount} transfer successfully`)
// }
// function bank(amount,task){
//     task(amount)
// }
// bank(1000,deposit)
// bank(500,transfer)
//? 9. Immediate Invoke Function Expression [IIFE]

// (function greet(){
//     console.log("Good Morning all")
// })()

//? 10. Generator function


