const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");
const createTodoBtn = document.getElementById("createTodo");
const taskAddSection = document.getElementById("taskAddSection");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
    list.innerHTML = "";
    tasks.forEach((task, index) => {
        console.log(task.text);
        const li = document.createElement("li");
        li.innerHTML = `
        <span class="${task.completed ? 'completed':''} style="color:green">
        ${task.text}
        </span>
        <div>
            <button onclick="toggleTask(${index})">✓</button>
            <button onclick="deleteTask(${index})">🗑</button>
        </div>
        `;
        list.appendChild(li);
    })
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask(){
    const text = input.value.trim();
    if(text){
        console.log("clicked!");
        tasks.push({text, completed: false})
        input.value = "";
        renderTasks();
    }
}

function toggleTask(i) {
    tasks[i].completed = !tasks[i].completed;
    renderTasks();
}

function deleteTask(i) {
    tasks.splice(i,1);
    renderTasks();
}

createTodoBtn.addEventListener("click", () => {
    if(taskAddSection.style.display === "block"){
        taskAddSection.style.display = "none";
        createTodoBtn.textContent = "Create To do";
    }else {
        taskAddSection.style.display = "block";
        createTodoBtn.textContent = "Hide Todo";
    }
})
addBtn.addEventListener("click", addTask);
input.addEventListener("keypress", (e) => {
    if(e.key === "Enter") addTask();
});

renderTasks();