
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js"
const appSettings = {
    databaseURL:"https://books-10a3a-default-rtdb.firebaseio.com/"
}
const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListInDB = ref(database, "shoppingList")

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const shoppingListEl = document.getElementById("shopping-list")

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    
    if (inputValue != "") {
        push(shoppingListInDB, inputValue);
    }
    
    clearInputFieldEl()
})

onValue( shoppingListInDB, function(snapshot) {
    if (snapshot.exists()) {
        let itemsArray = Object.entries(snapshot.val())
    
        clearShoppingListEl() 
    
        for ( let i = 0; i < itemsArray.length; i++) {
            let currentItem = itemsArray[i]
            let currentItemID = currentItem[0]
            let currentItemValue = currentItem[1]
    
            appendItemToShoppingListEl(currentItem)
        }
    } else {
        shoppingListEl.innerHTML = "nothing here yet"
    }
    
})

function clearShoppingListEl() {
    shoppingListEl.innerHTML = ""
}

function clearInputFieldEl() {
    inputFieldEl.value = ""
}

function appendItemToShoppingListEl(item) {
    // shoppingListEl.innerHTML += `<li>${itemValue}</li>`
    let itemID = item[0]
    let itemValue = item[1]

    let newEl = document.createElement("li")

    newEl.textContent = itemValue

    newEl.addEventListener("dblclick", function() {
        let exactLocationOfItemInDB = ref(database, `shoppingList/${itemID}`)
       
        remove(exactLocationOfItemInDB)
    })

    shoppingListEl.append(newEl)
}
















// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js"
// import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js"
// const appSettings = {
//     databaseURL:"https://books-10a3a-default-rtdb.firebaseio.com/"
// }
// const app = initializeApp(appSettings)
// const database = getDatabase(app)
// const newsStoriesInDB = ref(database, "shoppingList")

// const storiesEl = document.getElementById("stories")

// onValue(newsStoriesInDB, function(snapshot) {
//     let newsStoriesArray = Object.entries(snapshot.val())
    
//     storiesEl.innerHTML = ""
    
//     for (let i = 0; i < newsStoriesArray.length; i++) {
//         let currentStory = newsStoriesArray[i]
        
//         appendStoryToStoriesEl(currentStory)
//     }
// })

// function appendStoryToStoriesEl(story) {
//     let storyID = story[0]
//     let storyTitle = story[1]
    
//     let newEl = document.createElement("div")
    
//     newEl.classList.add("story")
    
//     newEl.textContent = storyTitle

//     newEl.addEventListener("dblclick", function() {
//         let exactLocationOfStoryInDB = ref(database, `shoppingList/${storyID}`)
        
//         remove(exactLocationOfStoryInDB)
//     })
    
//     storiesEl.append(newEl)
// }















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