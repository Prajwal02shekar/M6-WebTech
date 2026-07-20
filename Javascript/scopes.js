//! Scopes in JS

//? Global Scope

// let username="Prajwal"
// console.log(username)

// function displayNAme(){
//     console.log(username)
// }
// displayNAme()
// {
//     console.log(username)
// }


//? Function Scope

// function data() {
//     var a = 10;
//     let b = 20;
//     const c = 30;

//     console.log(a)
//     console.log(b)
//     console.log(c)
// }

// data()
// // console.log(a)
// // console.log(b)
// console.log(c)


//? Block Scope

// {
//     var a = 10;
//     let b = 20;
//     const c = 30;

//     console.log(a)
//     console.log(b)
//     console.log(c)

// }

// console.log(a)
//     console.log(b)
//     console.log(c)



//? Lexical Scope

// function outer() {
//     var username = "prajwal"
//     let age = 25;
//     const address = "RR Nagar"

//     console.log(username)
//     console.log(age)
//     console.log(address)
//     function inner() {

//         let college="JC College"
//         console.log(username)
//         console.log(age)
//         console.log(address)
//     }
//     inner()

// }
// outer()
