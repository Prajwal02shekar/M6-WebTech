//! Javascript Basic Programs Question

//? 1. Write a Javascript Program Print "Hello World".

// console.log("Hello World")

//? 2. Write a Javascript Program Add two numbers.

// let n1=10;
// let n2=15;
// console.log(`Sum: ${n1+n2}`)
//? 3. Write a Javascript Program Swap two numbers.

// let n1=10;
// let n2=20;
// console.log("Before Swapping")
// console.log(n1)
// console.log(n2)
// let temp=n1;
// n1=n2
// n2=temp
// console.log("After Swapping")
// console.log(n1)
// console.log(n2)
//? 4. Write a Javascript Program Check whether a number is even or odd.

// let num=Number(prompt("Enter a number"));
// if(num%2===0){
//     console.log(`${num} is even number`)
// }else{
//     console.log(`${num} is odd number`)

// }
//? 5. Write a Javascript Program Check whether a number is positive, negative, or zero.

// let n=-2;
// if(n>0){
//     console.log("Positive Number")
// }else if(n<0){
//     console.log("Negitive Number")
// }else{
//     console.log("Zero")
// }
//? 6. Write a Javascript Program Find the largest of two numbers.
// let n1 = 10;
// let n2 = 20;
// if(n1>n2){
//     console.log("the largestt number is :" + n1);
// }
// else{
//     console.log("The largest number is:" + n2);
// }
//? 7. Write a Javascript Program Find the largest of three numbers.
// let num1 = 10;
// let num2 = 20;
// let num3 = 30;
// if(num1>num2 && num1>num3){
//     console.log(`${num1} is greater than ${num2} and ${num3}`);
// }
// else if(num2>num1 && num2>num3){
//     console.log(`${num2} is greater than ${num2} and ${num3}`);
// }
// else{
//     console.log(`${num3} is greater than ${num2} and ${num3}`);
// }

//? 8. Write a Javascript Program Find the sum of digits of a number.

// let num = 1234
// let sum = 0
// while (num > 0) {
//     let digit = num % 10
//     sum = sum + digit
//     num = Math.floor(num / 10)
// }
// console.log(sum)

//? 9. Write a Javascript Program Reverse a number.
// let num = 12345
// let reversed = 0
// while (num > 0) {
//     let digit = num % 10
//     reversed = (reversed*10) + digit
//     num = Math.floor(num / 10)
// }
// console.log("Reversed Number:",reversed)

//? 10. Write a Javascript Program Count the number of digits.

// let num = 2026;
// let count = 0;
// console.log(num)
// while (num>0){
//     count++
//     num = Math.floor(num/10)
// }
// console.log(count)

//? 11. Write a Javascript Program Check whether a number is a palindrome.
// let num = 22
// let reversed = 0
// let temp=num;
// while (temp > 0) {
//     let digit = temp % 10
//     reversed = (reversed*10) + digit
//     temp = Math.floor(temp / 10)
// }
// if(num===reversed){
//     console.log(`${num} is a plaindrom`)
// }
// else{
//     console.log(`${num} is not a plaindrom`)
// }
//? 12. Write a Javascript Program Find the factorial of a number.
// let num=5;
// let fact=1;
// while(num>0){
//     fact=fact*num;
//     num--;
// }
// console.log(fact)

//? 13. Write a Javascript Program Print the Fibonacci series.

// let num =10
// let first=0
// let second=1
// for(let i=0;i<num;i++){
//     console.log(first)
//     let next=first+second
//     first=second
//     second=next
// }

//? 14. Write a Javascript Program Check whether a number is prime.

// let num = 12
// let flag = true

// for(let i = 2; i < num; i++){
//     if(num % i == 0){
//         flag = false
//         break
//     }
// }
// if(flag == true){
//     console.log("is prime")
// }
// else{
//     console.log("is not prime")
// }
// //? 15. Write a Javascript Program Print all prime numbers between 1 and 100.
// for(let j=2; j<=100; j++){
// let flag = true

// for(let i = 2; i < j; i++){
//     if(j % i == 0){
//         flag = false
//         break
//     }
// }
// if(flag == true){
//     console.log(j)
// }
// }
//? 16. Write a Javascript Program Check whether a number is an Armstrong number.
// function numOfCount(num){
//     let count=0;
//     while(num!=0){
//         num=Math.floor(num/10)
//         count++
//     }
//     return count
// }
// function isArmstrong(num){
//     let count = (num.toString().length)
//     let sum=0;
//     let temp=num;
//     while(temp!=0){
//         let digit=temp%10
//         sum +=Math.pow(digit,count)
//         temp = Math.floor(temp/10)
//     }
//     return sum===num
// }
// if(isArmstrong(156)){
//     console.log("It is a arstrong number")
// }else{
//     console.log("It is not amstrong number")
// }




//! String 
//? 1. Reverse a String
// let str="JavaScript"
// console.log(str)
// console.log(str.split('').reverse().join(''))
// for(let i=str.length-1;i>=0;i--){
//     rev=rev+str[i]
// }
// console.log(rev)
//? 2.Check Palindrome String

// let str="madam"
// let rev=str.split('').reverse().join('')
// if(str===rev){
//     console.log("Palindrome")
// }else{
//     console.log("Not Palindrome")
// }

//? 3.Count Vowels in a String

// let str="Programming";
// let count=0;
// for(let char of str.toLowerCase()){
//     if('aeiou'.includes(char)){
//         count++
//     }
// }
// console.log(`No of vowels: ${count}`)
//? 4. Remove Spaces from String

// let str="Javascript is a programming language"
// console.log(str.split(' ').join(''))

//? 5. Count Words in a String

// let str="Javascript is a programming language"

// console.log(str.split(" ").length)

//? 6. Convert First Letter to Uppercase

// let myName='prajwal'
// let char=myName[0].toUpperCase()
// console.log(char+myName.substring(1))


//! Array Programs
//? 1. Find Largest Element in Array

// let arr=[40,10,55,20,28,16]
// console.log(arr.length)
// let sortedArray=arr.sort((a,b)=>a-b)
// console.log(sortedArray[5])


//? 2. Find Smallest Element in Array
// let arr=[40,10,55,20,28,16]
// console.log(arr.length)
// let sortedArray=arr.sort((a,b)=>a-b)
// console.log(sortedArray[0])

//? 3. Find Sum of Array Elements
// let arr=[10,20,30,40,50]
// let sum=0;
// for(let i of arr){
//     sum=sum+i
// }
// console.log(sum)
//? 4. Remove Duplicate Elements

// let arr=[10,20,10,30,40,30,20]
// console.log(arr)
// console.log(...new Set(arr))

//? 5. Find Even Numbers from Array

let arr=[40,10,55,23,28,17]
console.log(arr.filter((num)=>num%2===0))


//? 6. Find Second Largest Number
// let arr=[40,10,55,20,28,16]
// let sortedArr=arr.sort((a,b)=>b-a)
// console.log(sortedArr[1])

//? 7. Find Common Elements in Two Arrays


//? 8. Find Frequency of Array Elements
