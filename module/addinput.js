import { patch } from "./patch.js";

function addinput(place, key) {
  const forminput = document.createElement("form");

  const inputEl = document.createElement("input");
  inputEl.type = "text";
  inputEl.classList.add("input");

  const btnEl = document.createElement("button");
  btnEl.classList.add("input");
  btnEl.innerText = ">>>";
  forminput.append(inputEl, btnEl);
  place.append(forminput);

  console.log(key);

  forminput.addEventListener("submit", async function (event) {
    event.preventDefault();
    // console.log(event.target.id);
    // const id = event.target.id;
    console.log("körs");
    

    await patch(key, inputEl.value);

  });
}

export { addinput };
