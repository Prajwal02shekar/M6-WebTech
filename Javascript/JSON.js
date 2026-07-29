

let person={
    pName:"Ajith Kumar",
    pAge:23,
    pAddress:"Mysore",
    pPhNum:9874563210
}
console.log(person)


let jsonObj=JSON.stringify(person)
console.log(jsonObj)


let regularObj=JSON.parse(jsonObj)
console.log(regularObj)