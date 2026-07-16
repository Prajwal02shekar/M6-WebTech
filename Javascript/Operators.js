//! Operators
//? Arthemetic Operator

// let n1=10;
// let n2=2;

// console.log(n1+n2)
// console.log(n1-n2)
// console.log(n1*n2)
// console.log(n1/n2)
// console.log(n1%n2)
// console.log(2**3)


//? Assignment Opertaor

// let n1=10;
// console.log(n1+=5)
// console.log(n1-=5)
// console.log(n1*=5)
// console.log(n1/=5)
// console.log(n1%=5)



//? Comparision Operator

// console.log(10>5)
// console.log(10<5)

// console.log(10>=5)
// console.log(10<=5)


// console.log(10==10)
// console.log(10=="10")



// console.log(10===10)
// console.log(10==="10")


//? Logical Operator

// let age=17;
// let hasDL=true;

// console.log(age>=18 && hasDL)
// console.log(age>=18 || hasDL)
// console.log(!hasDL)


// console.log(true && true)
// console.log(true && false)
// console.log(false && true)
// console.log(false && false)


// console.log(true || true)
// console.log(true || false)
// console.log(false || true)
// console.log(false || false)



//! Statements
//? IF

// let age=15;

// if(age>=18){
//     console.log("Eligibal to cast his vote")
// }
//? IF ELSE
// if(age>=18){
//     console.log("Eligibal to cast his vote")
// }else{
//     console.log("Not Eligibal to case his vote")
// }

//? IF ELSE iF

// let age = 21;
// let hasDl = true;
// if(age>=18){
//     console.log("eligible to drive");
// }
// else if(age>=18 && hasDl){
//     console.log("congralutions you can drive safely");
// }
// else{
//     console.log("choose the ksrtc bus");
// }
//? Nested IF
// let age = 22;
// let hasVoterid = true;
// if (age >= 18) {
//     if (hasVoterid) {
//         console.log("you are eligible to vote ");
//     }
// }
//? Switch case
// let selector = '-';
// let num1 = 10;
// let num2 = 20;
// switch (selector) {
//     case "+": console.log(num1 + num2);
//         break;
//     case "-": console.log(num1 - num2);
//         break;
//     case "*": console.log(num1 * num2);
//         break;
//     case "/": console.log(num1 / num2);
//         break;
//     case "%": console.log(num1 % num2);
//         break;
//     default:
//         console.log("INVAID OPERATOR")
// }

// let selector = '-';
// switch (selector) {
//     case "a": console.log(vowels);
//     case "e": console.log(vowels);
//     case "i": console.log(vowels);
//     case "o": console.log(vowels);
//     case "u": console.log(vowels);
//         break;
//     default:
//         console.log("not a vowel")
//         break;
// }



//? Looping Statements

//? WHILE

let num=10
// while(num<=10){
//     console.log(num)
//     num++;
// }


//? DO WHILE
// do{
//     console.log(num)
//     num--
// }while(num>=1)


//? FOR
// let i=0;
for(let i=0;i<=10;i++){
    if(i%2==0){
        console.log(i, "number is even")
    }
    else{
        console.log(i ,"number is odd")
    }
}


