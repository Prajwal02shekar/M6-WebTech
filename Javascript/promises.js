//? Synatx of Promises

// new Promise((resolve, reject) => {
//     resolve()
//     reject()
// })

//? fullfilled()
//? reject()
//? pending()



//? Example 

// new Promise((resolve, reject) => {
//     let sucess=true;
//     if(sucess){
//         resolve("Promise is fullfilled")
//     }else{
//         reject("Promise is rejected")
//     }
// }).then((res)=>{
//     console.log(res)
// }).catch((rej)=>{
//     console.log(rej)
// }).finally(
//     console.log("I will be execute wheater it is success or failure")
// )


//? Practical Example

// function login(username,password){
//     return new Promise((resolve, reject) => {
//         if(username==="admin" && password==="1234"){
//             resolve("Login Successfull")
//         }else{
//             reject("Invalid Username or Password")
//         }
//     })
// }


// login('admin123','1234').then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })



//! Promise Static Methods

// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('p1 is resolved')
//         reject('p1 is rejected')
//     },3000)
// })
// let p2 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve('p2 is resolved')
//     reject('p2 is rejected')
//     },5000)

// })
// let p3 = new Promise((resolve, reject) => {
//    setTimeout(()=>{
//     //  resolve('p3 is resolved')
//     reject('p3 is rejected')
//    },2000)

// })
// let p4 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve('p4 is resolved')
//     reject('p4 is rejected')
//     },10000)

// })
//? 1. Promise.all()
// Promise.all([p1,p2,p3,p4]).then((abc)=>{
//     console.log(abc)
// }).catch((err)=>{
//     console.log(err)
// })
//? 2. Promise.any()

// Promise.any([p1,p2,p3,p4]).then((abc)=>{
//     console.log(abc)
// }).catch((err)=>{
//     console.log(err)
// })
//? 3. Promise.allSettled()
// Promise.allSettled([p1,p2,p3,p4]).then((abc)=>{
//     console.log(abc)
// }).catch((err)=>{
//     console.log(err)
// })
//? 4. Promise.race()
// Promise.race([p1,p2,p3,p4]).then((abc)=>{
//     console.log(abc)
// }).catch((err)=>{
//     console.log(err)
// })


//? fake API's for learning 

//! https://api.github.com/users

//! https://api.escuelajs.co/api/v1/users

//! https://api.escuelajs.co/api/v1/products

//! https://jsonplaceholder.typicode.com/users

//! https://fakestoreapi.com/products




// fetch('https://api.github.com/users')
// .then((res)=>{
//    return res.json();
// }).then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })



// fetch("https://api.escuelajs.co/api/v1/users")
// .then((respone)=>{
//     console.log(respone)
//     return respone.json()
// }).then((data)=>{
//     console.log(data)
//     data.forEach((user)=>{
//         console.log(user.email)
//         console.log(user.name)
//     })
// }).catch((err)=>{
//     console.log(err)
// })

//!  Not Working in fetch 
// fetch('https://api.escuelajs.co/api/v1/users', {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify({ name: "prajwal", age: 25 })
// })
// .then((res) => console.log(res))
// .catch((err) => console.log(err))


//! async & await

// async function getProducts(){
//     let respone=await fetch('https://fakestoreapi.com/products')
//     console.log(respone)

//     let data=await respone.json()
//     console.log(data)

//     data.map((product)=>{
//         console.log(product.title)
//         console.log(product.price)
//     })
// }
// getProducts()



async function gitHubUsers(){
    try {
        let res=await fetch('https://jsonplaceholder.typicode.com/users')
    console.log(res)

    let data =await res.json();
    console.log(data)

    data.forEach((user)=>{
        console.log(user.name)
    })
    } catch (error) {
        console.log(error)
    }
}
gitHubUsers()


