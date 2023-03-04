let myLibrary = ["Permanent Record", "MEGA-LIVING", "Rich Dad Poor Dad", "Atomic Habits"];
const onlyForm = document.querySelector(".one-and-only-form")
onlyForm.style.display = "none"

function Books() {

}

Books.prototype.changeText = function() {
    this.books.textContent = this.texter
    this.author.value = this.texter
    this.title.value = this.texter
}

Books.prototype.displayBooks = function() {
    for(i = 0; i < myLibrary.length; i++) {
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
        this.books.appendChild(contentHolder)
    }
}

function deleteBook(a) {
    console.log(a)
    myLibrary.splice(a, 1)
    const books = document.querySelector(".books")
    books.textContent = ""
    const showBook = new Display()
    showBook.displayBooks()
}

function Texts(texter) {
    this.texter = texter
    this.books = document.querySelector(".books")
    this.author = document.querySelector('#book-writer')
    this.title = document.querySelector("#book-name")
}

function Display() {
    this.books = document.querySelector(".books")
}

Display.prototype = Object.create(Books.prototype)

function removeEverything() {
    Texts.prototype = Object.create(Books.prototype)

    const tagger = new Texts("")

    tagger.changeText()
}


const displayingBooks = new Display()
displayingBooks.displayBooks()
