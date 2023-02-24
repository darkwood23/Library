let myLibrary = ["Permanent Record", "MEGA-LIVING", "Rich Dad Poor Dad", "Atomic Habits"];
const onlyForm = document.querySelector(".one-and-only-form")
onlyForm.style.display = "none"

function Book() {

}

function removeEverything() {
    const books = document.querySelector(".books")
    const author = document.querySelector('#book-writer')
    const title = document.querySelector("#book-name")
    author.value = ""
    title.value = ""
    books.textContent = ""
}

function addBookToLibrary() {
    const title = document.querySelector("#book-name").value
    myLibrary.push(title.toString())
    removeEverything()
    displayBooks()
}

function displayForm() {
    if (onlyForm.style.display === "none") {
        onlyForm.style.display = "block"
    } else {
        onlyForm.style.display = "none"
    }
}

function deleteBook(a) {
    console.log(a)
    myLibrary.splice(a, 1)
    const books = document.querySelector(".books")
    books.textContent = ""
    displayBooks()
}

function displayBooks() {
    for(i = 0; i < myLibrary.length; i++) {
        const books = document.querySelector(".books")

        let pTag = document.createElement("p")
        let alreadyRead = document.createElement('input')
        let labelTag = document.createElement('label')
        let contentHolder = document.createElement('div')
        let removeBookButton = document.createElement('button')
        let placeHolder = document.createElement('div')

        alreadyRead.type = 'checkbox'
        removeBookButton.classList.add('remove-button')
        removeBookButton.setAttribute("id", "remove" + i.toString())
        contentHolder.classList.add('content-holder' + i.toString())
        contentHolder.classList.add('content-holder')
        pTag.classList.add('book' + i.toString())
        pTag.textContent = myLibrary[i]
        labelTag.textContent = 'Already Read:'
        removeBookButton.textContent = 'Remove Book'
        removeBookButton.setAttribute('onclick', `deleteBook(${i})`)

        placeHolder.appendChild(labelTag)
        placeHolder.appendChild(alreadyRead)
        contentHolder.appendChild(pTag)
        contentHolder.appendChild(placeHolder)
        contentHolder.appendChild(removeBookButton)
        books.appendChild(contentHolder)
    }
}

displayBooks()