let taskListData = JSON.parse(localStorage.getItem("tasks")) || []
let taskListElement = document.getElementById("taskList")

function addTask(){
    let newTask = document.getElementById("taskInput").value
    if(newTask === "") alert("Vui lòng nhập công việc")
    else {
        taskListData.push(newTask)
        localStorage.setItem("tasks", JSON.stringify(taskListData))
        renderTask(taskListData)
        document.getElementById("taskInput").value = ""
    }
}

function renderTask(taskListData){
    taskListElement.innerHTML = ''
    taskListData.forEach(task => {
        let li = document.createElement("li")
        li.innerHTML += `
            <span>${task}</span>
            <div class="btn">
                <button onclick="editTask('${task}')">Sửa</button>
                <button onclick="deleteTask('${task}')">Xoá</button>
            </div>
        `
        taskListElement.appendChild(li)
    })
}

function editTask(task) {
    let updatedTask = prompt("Nhập công việc mới:", task)
    if (updatedTask === "") alert("Vui lòng nhập công việc")
    else {
        let taskIndex = taskListData.indexOf(task)
        taskListData[taskIndex] = updatedTask
        localStorage.setItem("tasks", JSON.stringify(taskListData))
        renderTask(taskListData)
    }
}

function deleteTask(task) {
    if (confirm("Bạn có chắc muốn xoá công việc này?")) {
        let taskIndex = taskListData.indexOf(task)
        taskListData.splice(taskIndex, 1)
        localStorage.setItem("tasks", JSON.stringify(taskListData))
        renderTask(taskListData)
    }
}

renderTask(taskListData)
