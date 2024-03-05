const baseUrl =
  "https://scrum-board-4eb67-default-rtdb.europe-west1.firebasedatabase.app/tasks/";

const header = {
  "Content-type": "application/json; charset=UTF-8",
};

function deleting(place, id){
    const delBtn = document.createElement("button");
    delBtn.innerText = "Remove x";
    place.append(delBtn);

  delBtn.addEventListener("click", async function (event) {
    console.log("körs i delete");

    const url = baseUrl + id + ".json";

    const options = {
        method: 'DELETE'
    }

    const res = await fetch(url, options)
    const data = await res.json()
})
}
export {deleting}