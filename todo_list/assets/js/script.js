const inputTask = document.querySelector('#input-task')
const addButton = document.querySelector('#add-btn')
const completeList = document.querySelector('.list-task')

let listTask = []

function addNewTask() {
    listTask.push({
        task: inputTask.value,
        completed: false
    })

    inputTask.value = ''

    showTasks()
}

addButton.addEventListener('click', addNewTask)

function showTasks() {

    let newLi = ''

    listTask.forEach((item, index) => {

        newLi = newLi + `
        <li class="task ${item.completed && "done"}">
            <img src="assets/img/checked.png" alt="checked" onclick="completeTask(${index})">
            <p>${item.task}</p>
            <img src="assets/img/trash.png" alt="lixeira" onclick="removeTask(${index})">
        </li>
        `
    })

    completeList.innerHTML = newLi
}

function removeTask(index) {
    listTask.splice(index, 1)

    showTasks()
}

function completeTask(index) {
    listTask[index].completed = !listTask[index].completed

    showTasks()
}