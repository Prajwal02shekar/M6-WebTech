//! DOM Methods

//? getElementById()
// let h1Tag=document.getElementById('head1')
// console.log(h1Tag)
// h1Tag.style.backgroundColor="red"

// let h2=document.getElementById('head2')
// console.log(h2)
// h2.style.color="red"


// let h2Tag=document.getElementById('head3')
// console.log(h2Tag)
// h2Tag.style.backgroundColor="black"
// h2Tag.style.color="white"

//? getElementsByClassName()

// let p=document.getElementsByClassName('para1')
// console.log(p)

// console.log(p[0])
// console.log(p[1])
// console.log(p[2])


// for(let i=0;i<p.length;i++){
//     console.log(p[i])
//     p[i].style.color="red"
//     p[i].style.backgroundColor="black"

// }


//? getElementsByTagName()
// let pTag=document.getElementsByTagName('p')
// console.log(pTag)

// for(let i=0;i<pTag.length;i++){
//     console.log(pTag[i])
//     pTag[i].style.color="red"
//     pTag[i].style.backgroundColor="black"

// }




//? querySelector()

// let h1=document.querySelector('#head1')
// console.log(h1)
// h1.style.color="red"

// let h2=document.querySelector('#head3')
// console.log(h2)



//?  querySelectorAll()

let p=document.querySelectorAll('p')
console.log(p)

p.forEach((ele)=>{
    console.log(ele)
})



let section=document.querySelectorAll('.box')
console.log(section)

// section.forEach((ele)=>{
//     ele.style.height="100px"
//     ele.style.width="100px"
//     ele.style.border="1px solid red"

// })

section[0].style.height="100px"
section[0].style.width="100px"
section[0].style.backgroundColor="red"

section[1].style.height="100px"
section[1].style.width="100px"
section[1].style.backgroundColor="green "