import { get } from "./module/getfunc.js";
import { post } from "./module/postfunc.js";
const baseUrl =
  "https://scrum-board-4eb67-default-rtdb.europe-west1.firebasedatabase.app/tasks/";

const header = {
  "Content-type": "application/json; charset=UTF-8",
};

get();
const formEl = document.querySelector("form");

formEl.addEventListener("submit", handleform);
async function handleform(event) {
  event.preventDefault();
  console.log("i handleForm");
  await post();
  get();
}



// async function changetodo(event)
// {const element = event.currentTarget;
// let text = event.currentTarget.tagName;}

