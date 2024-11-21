const inputTask = document.querySelector('#input-task')
const addButton = document.querySelector('#add-btn')
const completeList = document.querySelector('.list-task')

let listTask = []

function addNewTask() {
    listTask.push(inputTask.value)

    inputTask.value = ''

    showTasks()
}

addButton.addEventListener('click', addNewTask)

function showTasks() {

    let newLi = ''

    listTask.forEach(task => {

        newLi = newLi + `
        <li class="task">
            <img src="assets/img/checked.png" alt="checked">
            <p>${task}</p>
            <img src="assets/img/trash.png" alt="lixeira">
        </li>
        `
    })

    completeList.innerHTML = newLi
}