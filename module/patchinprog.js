const baseUrl =
  "https://scrum-board-4eb67-default-rtdb.europe-west1.firebasedatabase.app/tasks/";

const header = {
  "Content-type": "application/json; charset=UTF-8",
};

function patchinprog(place, id) {
  const doneBtn = document.createElement("button");
  doneBtn.innerText = "Done>>>";
  place.append(doneBtn);

  
  doneBtn.addEventListener("click", async function (event) {

    console.log("körs i patchinprog");

    const url = baseUrl + id + ".json";
  
    const content = {
      status: "done",
    };
  
    const options = {
      method: "PATCH",
      body: JSON.stringify(content),
      headers: header,
    };
  
    const res = await fetch(url, options);
    const data = await res.json();

  });
}



export { patchinprog };