
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js"
import { getDatabase, ref } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js"
const appSettings = {
    databaseURL:"https://playground-776fe-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const booksInDB = ref(database, "books")

const booksEl = document.getElementById("books")

function clearBooksListEl() {
    booksEl.innerHTML = ""
}

function appendBookToBooksListEl(bookValue) {
    booksEl.innerHTML += `<li>${bookValue}</li>`
}

// const inputFieldEl = document.getElementById("input-field")
// const addButtonEl = document.getElementById("add-button")
// const projectListEl = document.getElementById("project-list")



// addButtonEl.addEventListener("click", function() {
//     let inputValue = inputFieldEl.value
    
//     push(booksInDb, inputValue)

//     clearInputFieldEl()
    
//     appendItemToShoppingListEl(inputValue)
//     //console.log(`${inputValue} added to database`)
//     projectListEl.innerHTML += `<li>${inputValue}<li>`
// })

// function clearInputFieldEl() {
//     inputFieldEl.value = ""
// }

// function appendItemToShoppingListEl(itemValue) {
//     projectListEl.innerHTML += `<li>${itemValue}</li>`
// }








// let scrimbaUsers = {
//     "00": "sindre@scrimba.com",
//     "01": "per@scrimba.com",
//     "02": "frode@scrimba.com"
// }

// let scrimbaUsersEmails = Object.values(scrimbaUsers)

// let scrimbaUsersIDs = Object.keys(scrimbaUsers)

// let scrimbaUsersEntries = Object.entries(scrimbaUsers)

// console.log(scrimbaUsersEntries)