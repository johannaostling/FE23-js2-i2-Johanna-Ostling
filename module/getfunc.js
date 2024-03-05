import { addinput } from "./addinput.js";
import { patchinprog } from "./patchinprog.js";
const baseUrl =
  "https://scrum-board-4eb67-default-rtdb.europe-west1.firebasedatabase.app/tasks/";

const todoContainer = document.querySelector("#todo");
const inprogContainer = document.querySelector("#inprog");
const doneContainer = document.querySelector("#done");


async function get() {
  const url = baseUrl + ".json";
  const res = await fetch(url);
  const data = await res.json();
  // console.log(data);

  for (const key in data) {
    // console.log(key, data[key].task);
    const name = data[key].task;
    const keyEl = document.createElement("h2");
    keyEl.id = key;
    keyEl.innerText = name;

    if (data[key].status == "to do") {
      const divcontain = document.createElement("div")
      if (data[key].category == "ux") {
        divcontain.classList.add("orangeclass");
      } else if (data[key].category == "dev frontend") {
        divcontain.classList.add("purpleclass");
      } else if (data[key].category == "dev backend") {
        divcontain.classList.add("blueclass");
      }
      divcontain.append(keyEl)
      addinput(divcontain, key);
      todoContainer.append(divcontain);

    } 
    else if (data[key].status == "in progress") {
      const divcontain = document.createElement("div")
      const pName = document.createElement("p")
      if (data[key].category == "ux") {
        divcontain.classList.add("orangeclass");
      } else if (data[key].category == "dev frontend") {
        divcontain.classList.add("purpleclass");
      } else if (data[key].category == "dev backend") {
        divcontain.classList.add("blueclass");
      }

      pName.innerText = data[key].assigned
      divcontain.append(keyEl, pName)
      patchinprog(divcontain, key)
      inprogContainer.append(divcontain);

    } 
    
    else if (data[key].status == "done") {
      const divcontain = document.createElement("div")
      const pName = document.createElement("p")
      if (data[key].category == "ux") {
        divcontain.classList.add("orangeclass");
      } else if (data[key].category == "dev frontend") {
        divcontain.classList.add("purpleclass");
      } else if (data[key].category == "dev backend") {
        divcontain.classList.add("blueclass");
      }
      pName.innerText = data[key].assigned
      divcontain.append(keyEl, pName)
      doneContainer.append(divcontain);

    }
  }
}
export { get };
