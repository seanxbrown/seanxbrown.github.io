
//Add item to list


function newElement(){
    //Create element, get value, turn to text node, add node to element
    const li = document.createElement("li")
    const inputValue = document.getElementById("add-box").value;
    const text = document.createTextNode(inputValue)
    li.appendChild(text)

    inputValue === "" ? alert("You gotta write something mate") : document.getElementById("todo-list").appendChild(li); 
    
//Clear the box after adding an item
    document.getElementById("add-box").value = "";

    // Adding the cross that removes the item
    let span = document.createElement("SPAN");
    let cross = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(cross)
    li.appendChild(span)

    for(let i=0; i < close.length; i++){
        close[i].onclick = function() {
            let div = this.parentElement;
            div.style.display = "none";
            
        }
    }

}

// Create a close button for each item

let myNodeList = document.getElementsByTagName("LI");
for( let i=0; i < myNodeList.length; i++){
    const span = document.createElement("SPAN");
    const text = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(text);
    myNodeList[i].appendChild(span);
}

//Close button removes item from list

let close = document.getElementsByClassName("close");
let i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
    }
}

//Add checkmark to li
let list = document.querySelector("ul");
list.addEventListener("click", function(e) {
    if (e.target.tagName = "li") {
        e.target.classList.toggle("checked");
    } 
}, false)



//Moved submit button code to JS. Separation of concerns.
let submitButton = document.getElementById("add-button").addEventListener("click", newElement)


// My random conneries:
let backgroundButton = document.getElementById("background-button").addEventListener("click", changeBackground)

function changeBackground(){
    document.querySelector("body").style.backgroundColor = "green"
}