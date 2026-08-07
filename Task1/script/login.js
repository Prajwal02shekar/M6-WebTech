let myForm=document.querySelector('form')
console.log(myForm)

myForm.addEventListener('submit',(e)=>{
    e.preventDefault()

    let email=document.getElementById('email').value
    let pwd=document.getElementById('password').value

    console.log(email,pwd)

    let storedData=JSON.parse(localStorage.getItem('userDetails'))
    console.log(storedData)
    if(storedData){
        if(email===storedData.email && pwd===storedData.password){
            alert("Login Successfull")
            window.location.href='../HomePage.html'
        }else{
            alert("Invalid Username or Password")
        }
    }
    console.log("Form Submitted")
})