const myList = document.getElementsByTagName("LI")
const i 
for(i = 0; i < myList.length; i++) {
    const span = document.createElement("SPAN")
    const txt = document.createTextNode("u00d7")
    span.className = "done"
    span.appendChild(txt)
    myList[i].appendChild(span)
}

// click on the done button
const done = document.getElementsByClassName("done")
const i 
for (i = 0; i < done.length; i++) {
    done[i].onclick = function() {
        let div = this.parentElement
        this.dispatchEvent.style.display = "none"
    }
}

// Add check mark when done.click a task on the to-do list
const myList = document.querySelector("ul")
list.addEventListener("click", function(ev) {
    if (ev.target.tagName === "LI") {
        ev.target.classList.toggle("checked")
    }
}, false)

// Create a new task using the "Add" button

function newElement() {
    const list = document.createElement("list")
    const inputValue = document.getElementById("myInput").value
    const text = document.createTextNode(inputValue)
    list.appendChild(text)
    if (inputValue === "") {
        alert("Add to your list! Don't miss your deadlines")
    } else {
        document.getElementById("myList")
    }
}