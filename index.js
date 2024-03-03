import { get } from "./module/getfunc.js"
import { post } from "./module/postfunc.js"
const baseUrl = 'https://scrum-board-4eb67-default-rtdb.europe-west1.firebasedatabase.app/tasks'

const header = {
    "Content-type": "application/json; charset=UTF-8",
}

get()
const formEl = document.querySelector("form")

formEl.addEventListener("submit", handleform)
async function handleform(event){
    event.preventDefault()
    console.log("i handleForm")
    await post()
    get()
}

const todoContainer = document.querySelector("#todo")
todoContainer.addEventListener('click', function (event){
    console.log(event.target.id)
    const id = event.target.id
    console.log(id)
})


// async function changetodo(event)
// {const element = event.currentTarget;
// let text = event.currentTarget.tagName;}






// async function patch(id){
//     const url = baseUrl + id;
    
//     const name = document.querySelector("input").value

//     const content = {
//         assigned: name,
        
//     }
    
//     const options = {
//         method: "POST",
//         body: JSON.stringify(content),
//         headers: header,
//     };

//     const res = await fetch(url, options);
//     const data = await res.json();
//     console.log(data);
// }



