let form = document.querySelector("form");

let data ={};
let i = 0;
form.addEventListener('submit',(e)=>{
    e.preventDefault();

    let input = document.querySelectorAll("input");
    input.forEach((ele) => {
        data[ele.name] = ele.value;
    })

    let address = document.querySelector("textarea");
    data[address.name] = address.value;

    let tbody = document.querySelector("tbody");
    tbody.innerHTML += `
        <tr>
            <td>${++i}</td>+
            <td>${data.username}</td>
            <td>${data.age}</td>
            <td>${data.phnum}</td>
            <td>${data.address}</td>
        </tr>
    `;
    form.reset();
})