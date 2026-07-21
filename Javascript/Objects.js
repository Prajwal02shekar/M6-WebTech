//! Objects

// let student={
//     stdId:101,
//     stdNAme:"Ajith",
//     stdAge:23,
//     stdAddress:"Mysore"
// }
// console.log(student)

// console.log(student.stdId)
// console.log(student.stdNAme)
// console.log(student.stdAge)
// console.log(student.stdAddress)

// //? Adding a new property
// student.stdCourse="Java FullStack"
// console.log(student)

// //? Updating a value
// student.stdCourse="Python Full Stack"
// console.log(student)

// //? deleting a property
// delete student.stdId
// console.log(student)


//! Object Inbuilt Methods

// console.log(Object.keys(student))
// console.log(Object.values(student))
// console.log(Object.entries(student))


// Object.freeze(student)
// console.log(Object.isFrozen(student))


// Object.seal(student)
// console.log(Object.isSealed(student))

// //? Adding a new property
// student.stdCourse="Java FullStack"
// console.log(student)

// //? Updating a value
// student.stdCourse="Python Full Stack"
// console.log(student)

// student.stdNAme="Ajith Kumar"
// console.log(student)

// // //? deleting a property
// delete student.stdId
// console.log(student)




let student={
    stdId:101,
    stdName:"Ajith"
}

let stdAddrss={
    city:"BAngalore",
    state:"KArnataka",
    pincode:560098
}

console.log(Object.assign(student,stdAddrss))