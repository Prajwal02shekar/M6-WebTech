// let arr=[10,20,30]
// console.log(arr)
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i])
// }

// arr.forEach((ele)=>{
//     console.log(ele)
// })

// console.log("****")
// arr.map((rashmi)=>{
//     console.log(rashmi)
// })


// let arr=[10,20,30]
// console.log(arr)
// console.log(arr.length)

// arr.push(40)
// console.log(arr)


// arr.pop()
// arr.pop()
// console.log(arr)


// arr.unshift(5)
// console.log(arr)

// arr.shift()
// arr.shift()
// console.log(arr)

// let arr=[10,20,30,40,50,10]
// let arr2=[60,70]
// console.log(arr)
// // console.log(arr.slice(1,3))
// console.log(arr.includes(60))
// console.log(arr.indexOf(30))
// console.log(arr.lastIndexOf(10))
// console.log(arr.concat(arr2))


// let arr=[15,25,7,10,1,28,99]
// console.log(arr)

// // console.log(arr.sort((a,b)=>a-b))
// // console.log(arr.sort((a,b)=>b-a))

// console.log(arr.filter((num)=>num>5))




// console.log(arr.reverse())



console.log("Start")

function parent() {
    console.log("Parent Function")
    let a = 10
    let b = 20
    console.log(a)
    console.log(b)

    function child() {
        console.log("Child Function")
        console.log(a)
        console.log(b)
    }
    return child
}
parent()()