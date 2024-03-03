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
todoContainer.addEventListener('click', changetodo)

async function changetodo(event){
    console.log("i changetodo funk")


    let text = event.target.tagName;
    document.getElementById("#todo").innerHTML = text;

}



