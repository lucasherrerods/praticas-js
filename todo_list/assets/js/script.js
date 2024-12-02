const inputTask = document.querySelector('#input-task')
const addButton = document.querySelector('#add-btn')
const completeList = document.querySelector('.list-task')

let listTask = []

function addNewTask() {
    listTask.push({ //criando um objeto e adicionando na minha array
        task: inputTask.value,
        completed: false
    })

    inputTask.value = ''

    showTasks()
}

addButton.addEventListener('click', addNewTask)

function showTasks() {

    let newLi = ''

    listTask.forEach((item, index) => { //capturando parametros referentes a posicao de cada item e montando uma tag li

        newLi = newLi + `
        <li class="task ${item.completed && "done"}">
            <img src="assets/img/checked.png" alt="checked" onclick="completeTask(${index})">
            <p>${item.task}</p>
            <img src="assets/img/trash.png" alt="lixeira" onclick="removeTask(${index})">
        </li>
        `
    })

    completeList.innerHTML = newLi

    localStorage.setItem('lista', JSON.stringify(listTask)) //adicionando a lista de tarefas no local storage
}

function removeTask(index) {
    listTask.splice(index, 1)

    showTasks()
}

function completeTask(index) {
    listTask[index].completed = !listTask[index].completed //alternando o valor do item "completed" do objeto

    showTasks()
}

function reloadTasks() {
    const localStorageTasks = localStorage.getItem('lista')

    if (localStorageTasks) { //verifica se há dados no local storage ao dar reload na página
        listTask = JSON.parse(localStorageTasks) //transformando a lista de volta para um objeto
    }

    showTasks()
}
reloadTasks()