const input = document.getElementById("input");
const tasks = document.getElementById("tasks");

window.addEventListener("load", async(e) => {
    const response = await fetch("http://localhost:3000/");
    const data = await response.json()
    
    for (let taskObject of data){
        const task = document.createElement("li");
        task.id = taskObject.id;

        const text = document.createTextNode(taskObject.task);
        const del = document.createElement("button");
        const text2 = document.createTextNode("X");

        del.appendChild(text2);
        
        del.addEventListener("click", async (e) => {
            const id = e.target.parentNode.id;
            const response = await fetch(`http://localhost:3000/${id}`, {
                method: "DELETE"
            });
            window.location.reload();
        });

        task.appendChild(text);
        task.appendChild(del);
        tasks.appendChild(task);
    }
});

const form = document.getElementById("form");

form.addEventListener("submit", async(e) => {
    e.preventDefault();
    if (input.value != ""){
        const response = await fetch("http://localhost:3000/", {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({task: input.value})
        });

        window.location.reload();

        input.value = "";
    }
});
