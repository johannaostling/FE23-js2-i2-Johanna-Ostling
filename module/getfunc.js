import { addinput } from "./addinput.js";
const baseUrl =
  "https://scrum-board-4eb67-default-rtdb.europe-west1.firebasedatabase.app/tasks";

const todoContainer = document.querySelector("#todo");
const inprogContainer = document.querySelector("#inprog");
const doneContainer = document.querySelector("#done");

async function get() {
  const url = baseUrl + ".json";
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);

  for (const key in data) {
    console.log(key, data[key].task);
    const name = data[key].task;
    const keyEl = document.createElement("h2");
    keyEl.id = key;
    keyEl.innerText = name;

    if (data[key].status == "to do") {
      if (data[key].category == "ux") {
        keyEl.classList.add("orangeclass");

      } 
      else if (data[key].category == "dev frontend") {
        keyEl.classList.add("purpleclass");

      } 
      else if (data[key].category == "dev backend") {
        keyEl.classList.add("blueclass");
      }
      todoContainer.append(keyEl);
      addinput(todoContainer)

      
      // const inputEl = document.createElement("input");
      // inputEl.type = "text";
      // inputEl.classList.add("input")
      // todoContainer.appendChild(inputEl);
    } 
    else if (data[key].status == "in progress") {
      if (data[key].category == "ux") {
        keyEl.classList.add("orangeclass");
      } else if (data[key].category == "dev frontend") {
        keyEl.classList.add("purpleclass");
      } else if (data[key].category == "dev backend") {
        keyEl.classList.add("blueclass");
      }
      inprogContainer.append(keyEl);
    } 
    else if (data[key].status == "done") {
      if (data[key].category == "ux") {
        keyEl.classList.add("orangeclass");
      } else if (data[key].category == "dev frontend") {
        keyEl.classList.add("purpleclass");
      } else if (data[key].category == "dev backend") {
        keyEl.classList.add("blueclass");
      }
      doneContainer.append(keyEl);
    }
  }
}
export { get };
