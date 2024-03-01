import { get } from "./module/getfunc.js"
import { post } from "./module/postfunc.js"
const baseUrl = 'https://scrum-board-4eb67-default-rtdb.europe-west1.firebasedatabase.app/tasks'

const header = {
    "Content-type": "application/json; charset=UTF-8",
}


const formEl = document.querySelector("form")

formEl.addEventListener("submit", handleform)
function handleform(event){
    event.preventDefault()
    console.log("i handleForm")

    get()

    // const text = document.querySelector("input").value
    
    // const content = {
    //     assigned: "",
    //     category: "dev frontend",
    //     status: "to do",
    //     task: text,
    // }
    // console.log(content)

    post()
    get()
}




// async function post(content) {
//     const url = baseUrl + "/.json";

//     const options = {
//         method: "POST",
//         body: JSON.stringify(content),
//         headers: header,
//     };

//     const res = await fetch(url, options);
//     const data = await res.json();
//     console.log(data);
   
// }







// const todoContainer = document.querySelector("#todo")
// const inprogContainer = document.querySelector("#inprog")
// const doneContainer = document.querySelector("#done")
// async function get(){
//     const url= baseUrl + ".json";
//     const res = await fetch(url);
//     const data = await res.json();
//     console.log(data)

//     for (const key in data) {
//         console.log(key, data[key].task);
//         const name = data[key].task;
//         const keyEl = document.createElement("h2");
//         keyEl.id = key;
//         keyEl.innerText = name


//         if (data[key].status == "to do"){


//             todoContainer.append(keyEl)
//         }
//         else if(data[key].status == "in progress"){
//             inprogContainer.append(keyEl)
//         }
//         else if(data[key].status == "done")
//             doneContainer.append(keyEl)
        
//     }
// }