const contactButton = document.querySelector('#add-btn')
const closeModalButton = document.querySelector('#close-modal')
const modal = document.querySelector('#modal-contact')
const fade = document.querySelector('#fade')

const elements = [contactButton, closeModalButton, fade]

const toggleModal = () => {
    modal.classList.toggle('hide')
    fade.classList.toggle('hide')
}

elements.forEach((elements) => {
    elements.addEventListener('click', toggleModal)
})

const saveButton = document.querySelector('#save')
const completeList = document.querySelector('.contact-list')
const inputName = document.querySelector('#input-name')
const inputPhone = document.querySelector('#input-phone')
$(inputPhone).mask('(00) 00000-0000')

let listContacts = []

const addContact = () => {
    listContacts.push({
        name: inputName.value,
        phoneNumber: inputPhone.value
    })

    inputName.value = ''
    inputPhone.value = ''

    showContact()
    toggleModal()
    console.log(listContacts)
}

saveButton.addEventListener('click', addContact)

function showContact() {
    let numberContacts = document.querySelector('#number-contacts')
    let newLi = ''

    listContacts.forEach((contact, index) => {
        newLi = newLi + `
        <li class="contact">
            <p class="contact-name">${contact.name}</p>
            <p class="phone-number">${contact.phoneNumber}</p>
            <div class="icons">
                <i class="fa-solid fa-pen-to-square"></i>
                <img class="delete-contact" src="assets/img/trash.png" alt="trash" onclick="deleteContact(${index})">
            </div>
        </li>
        `
    })

    completeList.innerHTML = newLi
    numberContacts.innerHTML = `(${listContacts.length})`
}

function deleteContact(index) {
    listContacts.splice(index, 1)

    showContact()
}