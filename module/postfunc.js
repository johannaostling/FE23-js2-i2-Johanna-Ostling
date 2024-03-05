
const baseUrl = 'https://scrum-board-4eb67-default-rtdb.europe-west1.firebasedatabase.app/tasks'

const header = {
    "Content-type": "application/json; charset=UTF-8",}

async function post() {
    
    const text = document.querySelector("input").value
    const categoryvalue = document.getElementById("optionvalue").value

    const content = {
        assigned: "none",
        category: categoryvalue,
        status: "to do",
        task: text,
        
    }
    console.log(content)


    const url = baseUrl + "/.json";

    const options = {
        method: "POST",
        body: JSON.stringify(content),
        headers: header,
    };

    const res = await fetch(url, options);
    const data = await res.json();
    console.log(data);

}

export {post}