function Change() {

}

Change.prototype.changeText = function() {
    this.pTag.textContent += this.texter + " "
}

function Texts(texter) {
    this.texter = texter
    this.pTag = document.getElementById('pTag')
}

Texts.prototype = Object.create(Change.prototype)

const tagger = new Texts("Hello world")
const taggerTwo = new Texts("Ola amigo")

tagger.changeText()
taggerTwo.changeText()