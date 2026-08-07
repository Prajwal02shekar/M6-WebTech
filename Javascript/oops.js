
// let student={
//     stdName:"Prajwal",
//     stdAddress:"Bangalore",

//     display(){
//         console.log(this.stdName)
//         console.log(this.stdAddress)
//     }
// }
// console.log(student)
// student.display()

//? Class


// class Student{
//     stdName;
//     stdAge;
//     stdAddress;

//     // display(){

//     // }
// }

// let s1=new Student()



//? Example for class and objects

// class Student{
//     stdName="prajwal";
//     stdAddress="RR Nagar";

//     display(){
//         console.log(this.stdName)
//         console.log(this.stdAddress)
//     }
// }
// let s1=new Student()
// console.log(s1)
// s1.display()
// console.log(s1.stdName)
// console.log(s1.stdAddress)



// class Book{
//     constructor(){
//         console.log("Iam a constructor")
//     }
// }
// let b1=new Book()
// console.log(b1)


//? initializing a values
// class Student{

//     constructor(){
//         console.log("Iam a constructor")
//         this.stdName="Ajith",
//         this.stdAge=23
//     }
// }
// let s1=new Student()
// console.log(s1.stdName)
// console.log(s1.stdAge)

//? constructor with parameters

// class Car{
//     constructor(brand,varient){
//         console.log("Iam a constructor");
//         this.brand=brand
//         this.varient=varient
//     }
// }
// let c1=new Car("polo",'petrol')
// console.log(c1)
// console.log(c1.brand)
// console.log(c1.varient)

//!-------------------------------------------

// class Student{
//     stdName="Ajith"
//     stdAge=23

//     displayDetails(){
//         console.log(`My name is ${this.stdName}`)
//         console.log(`Iam ${this.stdAge} years old`)
//     }
// }

// let std1=new Student();
// console.log(std1)
// std1.displayDetails()


// class Employee{
//     empName;
//     empAge;
//     empDesignation;
//     constructor(empName,empAge,empDesignation){
//         console.log("Iam a constructor")
//         this.empName=empName
//         this.empAge=empAge
//         this.empDesignation=empDesignation
//     }

//     displayDetails(){
//         console.log(this.empName)
//         console.log(this.empAge)
//         console.log(this.empDesignation)
//     }
// }

// let emp1=new Employee("Ajith",23,"Developer")
// emp1.displayDetails()


// let emp2=new Employee();
// emp2.empName="Pavan"
// emp2.empAge=22
// emp2.empDesignation="Tester"


// emp2.displayDetails()


//? Encapsulation


// class BankAccount{
//     #bankBalance=0;

//     getBalance(){
//         return this.#bankBalance
//     }

//     deposit(amount){
//         this.#bankBalance=this.#bankBalance+amount
//     }

//     withdraw(amount){
//         if(amount<=this.#bankBalance){
//              this.#bankBalance=this.#bankBalance-amount
//         }else{
//             console.log("Insufficient Balance")
//         }
//     }
// }

// let b1=new BankAccount()
// console.log(b1.getBalance())
// b1.deposit(1000)
// console.log(b1.getBalance())
// b1.withdraw(500)
// console.log(b1.getBalance())

//? Abstraction
// class Car {
//     #checkEngine() {
//         return "Checking Engine"
//     }

//     start() {
//         console.log(this.#checkEngine())
//         console.log("Car Started")
//     }
// }
// let c1 = new Car()
// c1.start()


//? Inheritance

// class User {
//     login() {
//         console.log("User Login")
//     }
// }
// class Employee extends User {
//     work() {
//         console.log("Employee started Working")
//     }
// }
// let emp1 = new Employee();
// emp1.work()
// emp1.login()


//? Polymorphism
// class Payment{
//     pay(amount){
//         console.log(`Paid ${amount}`)
//     }
// }
// class UPI extends Payment{
//     pay(amount){
//         console.log(`Paid ${amount} using UPI`)
//     }
// }
// class CrediCard extends Payment{
//     pay(amount){
//         console.log(`Paid ${amount} using Credit Card`)
//     }
// }

// let c1=new CrediCard();
// c1.pay(1000)

// let upi1=new UPI()
// upi1.pay(500)

// let p1=new Payment()
// p1.pay(100)


//! CRUD APP with OOP's
class StudentCRUD {
    constructor() {
        this.students = []
    }

    addStudents(id, name, age, address, course) {
        let std = {
            id:id,
            name:name,
            age:age,
            address:address,
            course:course
        }

        this.students.push(std)
        console.log("Stduent added successfully")
    }
    getStduents(){
        console.log(this.students)

        this.students.forEach((std)=>{
            console.log(std)
        })
    }

    updateStudnets(id, name, age, address, course){
        let student=this.students.find((std)=>std.id===id)
        if(student){
            student.name=name
            student.age=age
            student.address=address
            student.course=course

            console.log("Student Updated Successfully")
        }else{
            console.log("Stduent Not Found")
        }
    }

    deleteStduent(id){
        let index=this.students.findIndex((std)=>{
            return std.id===id
        })
        console.log(index,"INDEX VALUE")
        if(index!=-1){
            this.students.splice(index,1)
            console.log("Student Deleted Successfully")
        }
        else{
            console.log("Studnet Not Found")
        }
    }
}

let s1=new StudentCRUD();
//? Adding a studnet [CREATE]
s1.addStudents(1,"Ajith",23,"Mysore","Java")
s1.addStudents(2,"Dishanth",23,"Mysore","Python")
s1.addStudents(3,"Prajwal",23,"Banaglore","MERN")

//? Displaying a Students [READ]
s1.getStduents()

//? Updating a studnet
s1.updateStudnets(3,"Prajwal Shekar",25,"Banglore","MERN Stack")
s1.getStduents()


//? Delete a Studnet
s1.deleteStduent(2)
s1.deleteStduent(5)
s1.getStduents()


//! Question 1
// Create an EmployeeCRUD class to manage employee records.
// Each employee should have(id,name,age,designation,salary)
// Create the following methods:
// addEmployee() → Add employee
// getEmployees() → Display all employees
// updateEmployee() → Update employee using ID
// deleteEmployee() → Delete employee using ID

//! Question 2
// Create a BookCRUD class to manage library books.
// Each book should have:(id,bookName,author,price,category)
// Create the following methods:
// addBook()
// getBooks()
// updateBook()
// deleteBook()
