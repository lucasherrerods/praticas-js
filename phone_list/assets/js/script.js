// TELA DE INICIO
const welcome = document.querySelector('#welcome')
const content = document.querySelector('#container-content')
const startButton = document.querySelector('#start-btn')

startButton.addEventListener('click', () => { //transição para tela do conteúdo
    welcome.classList.add('hide')
    content.classList.remove('hide')
})

// selecionando todos os elementos de criar e adicionar
const contactButton = document.querySelector('#add-btn')
const closeCreateButton = document.querySelector('#close-create')
const create = document.querySelector('#create-contact')
const createFade = document.querySelector('#create-fade')
const closeEditButton = document.querySelector('#close-edit')
const edit = document.querySelector('#edit-contact')
const editFade = document.querySelector('#edit-fade')

//separando cada um dentro da sua array específica
const createElements = [contactButton, closeCreateButton, createFade]
const editElements = [closeEditButton, editFade]

//function separada pra cada, percorrendo cada um e fazendo com que os elementos realizem a transição
const createModal = () => {
    const elementsModal = [create, createFade]

    elementsModal.forEach((elements) => {
        elements.classList.toggle('hide')
    })
}

const editModal = () => {
    const elementsModal = [edit, editFade]

    elementsModal.forEach((elements) => {
        elements.classList.toggle('hide')
    })
}

// chamando cada function separadamente
createElements.forEach((elements) => {
    elements.addEventListener('click', createModal)
})

editElements.forEach((elements) => {
    elements.addEventListener('click', editModal)
})


const saveCreateButton = document.querySelector('#save-create')
const saveEditButton = document.querySelector('#save-edit')
const completeList = document.querySelector('.contact-list')
const inputName = document.querySelector('#input-name')
const inputPhone = document.querySelector('#input-phone')
$(inputPhone).mask('(00) 00000-0000') //adicionando mask para que o input fique no formato correto

let listContacts = []

const addContact = () => {
    //criando um objeto e fazendo que ele seja enviado para a array
    listContacts.push({
        name: inputName.value,
        phoneNumber: inputPhone.value
    })

    inputName.value = ''
    inputPhone.value = ''

    showContact()
    createModal()
}

const editContact = () => {
    editModal()
}

saveCreateButton.addEventListener('click', addContact)
saveEditButton.addEventListener('click', editContact)

function showContact() {
    let numberContacts = document.querySelector('#number-contacts')
    let newLi = ''

    //inserindo uma <li> para o html dinamicamente
    listContacts.forEach((contact, index) => {
        newLi = newLi + `
        <li class="contact">
            <p class="contact-name">${contact.name}</p>
            <p class="phone-number">${contact.phoneNumber}</p>
            <div class="icons">
                <i class="fa-solid fa-pen-to-square" onclick="editContact()"></i>
                <img class="delete-contact" src="assets/img/trash.png" alt="trash" onclick="deleteContact(${index})">
            </div>
        </li>
        `
    })

    completeList.innerHTML = newLi
    numberContacts.innerHTML = `(${listContacts.length})`
}

function deleteContact(index) {
    listContacts.splice(index, 1) //removendo o primeiro item após a posição que se encontra na array

    showContact()
}