const baseUrl = 'https://scrum-board-4eb67-default-rtdb.europe-west1.firebasedatabase.app/tasks'

const header = {
    "Content-type": "application/json; charset=UTF-8",
}


const addBtn = document.querySelector("#add")
const todocon = document.querySelector("#todo")
const form = document.querySelector("form");
addBtn.addEventListener('submit', (event)=>{
    event.preventDefault()
    console.log("add")

})