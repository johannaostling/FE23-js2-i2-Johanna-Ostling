const baseUrl =
  "https://scrum-board-4eb67-default-rtdb.europe-west1.firebasedatabase.app/tasks/";

const header = {
  "Content-type": "application/json; charset=UTF-8",
};

async function patch(id) {
  const url = baseUrl + id + ".json";

  const name = document.querySelector("input").value;

  const content = {
    assigned: name,
    status: "in progress",
  };

  const options = {
    method: "PATCH",
    body: JSON.stringify(content),
    headers: header,
  };

  const res = await fetch(url, options);
  const data = await res.json();
  console.log(data);
}

export { patch };
