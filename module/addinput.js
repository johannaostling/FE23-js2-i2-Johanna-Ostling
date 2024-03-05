function addinput(place) {
  const forminput = document.createElement("form");

  const inputEl = document.createElement("input");
  inputEl.type = "text";
  inputEl.classList.add("input");
  place.appendChild(inputEl);

  const btnEl = document.createElement("button");
  btnEl.classList.add("input");
  btnEl.innerText = ">>>";
  place.appendChild(btnEl);

  forminput.addEventListener("click", function (event) {
    console.log(event.target.id);
    const id = event.target.id;
    console.log(id);
  });
}

export { addinput };
