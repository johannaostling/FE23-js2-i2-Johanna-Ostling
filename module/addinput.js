function addinput(place){

const inputEl = document.createElement("input");
inputEl.type = "text";
inputEl.classList.add("input")
place.appendChild(inputEl);

const btnEl = document.createElement("button")
btnEl.classList.add("input")
btnEl.innerText =">>>"
place.appendChild(btnEl)

}

export {addinput}