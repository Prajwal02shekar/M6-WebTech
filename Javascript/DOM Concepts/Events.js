// //! Types of Events

// //? 1. Click events


// //? click
// // let btn=document.querySelector('button')
// // console.log(btn)
// // btn.addEventListener('click',()=>{
// //     console.log("Btn Clicked")
// // })

// // let h1=document.querySelector('h1')
// // console.log(h1)
// // h1.onclick=()=>{
// //     console.log("H1 triggred")
// // }




// //? dbclick

// // btn.ondblclick=()=>{
// //     console.log("Db clcik triggred")
// // }

// // h1.addEventListener('dblclick',()=>{
// //     console.log("h1 triggred")
// // })


// //? Mouse Events


// // let btn=document.querySelector('button')
// // console.log(btn)

// // btn.addEventListener('mouseover',()=>{
// //     console.log("Mouse over triggred")
// // })

// // btn.onmouseout=()=>{
// //     console.log("Mouse out triggred")
// // }



// // let h1=document.querySelector('h1')
// // console.log(h1)

// // h1.addEventListener('mouseover',()=>{
// //     console.log("Mouse over triggred")
// // })

// // h1.onmouseout=()=>{
// //     console.log("Mouse out triggred")
// // }


// //? Keyboard events

// // let input=document.querySelector('input')
// // console.log(input)

// // input.addEventListener('keydown',(e)=>{
// //     console.log(e.key, "Key down")
// //     // console.log("Key down triggred")
// // })

// // input.onkeyup=(e)=>{
// // console.log(e.key,"Key up")
// // }


// //? input event
// // input.addEventListener('input',(e)=>{
// //     console.log(e.target.value)
// // })

// // input.oninput=(e)=>{
// //     console.log(e.target.value)
// // }



// // let myForm=document.querySelector('form')
// // console.log(myForm)

// // myForm.addEventListener('submit',(e)=>{
// //     e.preventDefault()

// //     let un=document.getElementById('username')
// //     let pwd=document.getElementById('password')
    
// //     console.log(un,pwd)
// //     console.log(un.name + "="+ un.value)
// //     console.log(pwd.name + "="+ pwd.value)

// //     console.log("Form Submitted")
// // })



// // let myForm=document.querySelector('form')
// // console.log(myForm)

// // myForm.onsubmit=(e)=>{
// //     e.preventDefault()
// //     let inputBox=document.querySelectorAll('input')
// //     console.log(inputBox)
// //     let formData={};
// //     inputBox.forEach((ele)=>{
// //             console.log( ele.name+ "="+ ele.value)
// //             formData[ele.name]=ele.value
// //     })
// //     console.log(formData)
// //     console.log("Form Submitted")
// // }




// let YourForm=document.querySelector('form')
// console.log(YourForm)
// YourForm.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     let inputBox=document.querySelectorAll('input')
//     let userDetails={};
//     inputBox.forEach((ele)=>{
//         userDetails[ele.name]=ele.value
//     })    
//     console.log(userDetails)

//     localStorage.setItem('userInfo',JSON.stringify(userDetails))
//     console.log("Form Submitted")
// })

// localStorage.removeItem('userInfo')
// let BalajiDetails=JSON.parse(localStorage.getItem('userInfo'))
// console.log(BalajiDetails)





let empDetails={
    empName:"Sakshi",
    empDesignation:"Python Developer",
    empAddress:"Mysore"
}
localStorage.setItem('EmpData',JSON.stringify(empDetails))


localStorage.removeItem('EmpData')
let sakshiDetails=JSON.parse(localStorage.getItem('EmpData'))
console.log(sakshiDetails)