// Select elements on page

let inputBox = document.getElementById("inputBox");
let addButton = document.getElementById("addButton");
let todoList = document.getElementById("todoList");

//Todo storage array
let todos = [];

//Add event listeners to selected objects
todoList.addEventListener("click",closeItem);
addButton.addEventListener("click", addTodo);
todoList.addEventListener("click", checkItem)

//Add a close button to existing
let itemList = document.getElementsByTagName("li");
for (let i=0; i < itemList.length; i++){
    let cross = document.createTextNode("X");
    let crossButton = document.createElement("span");
    crossButton.className = "close";
    crossButton.appendChild(cross);
    itemList[i].appendChild(crossButton);
}

//Clicking an item crosses it off the list
function checkItem(event){

    if (event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
        }
}

//Functions

//Close button function
function closeItem(event){
   if (event.target.classList.contains("close")) {
       //console.log(event.target.parentNode)
       event.target.parentElement.style.display ="none";
   }
}

//  Add todo

function addTodo(item) {
if (inputBox.value !== "") {
    //create new todo with these parameters
    let todo = {
        id: Date.now(),
        name: inputBox.value,   
        completed: false
    }
//add todo to todos array
    todos.push(todo);
    addToLocalStorage(todos);

    //Clear the input box
    inputBox.value ="";
}
}

//Render todos
function renderTodos(todos){
    //Clear the UL
    todoList.innerHTML = " ";

   todos.forEach(todo => {
       //Assigns the checked value of the item to a variable
       let checked = todo.completed ? "checked" : null;
       //Create new li
       let li = document.createElement("li");
       //Add data key object and list item class. Checked, too, if relevant
       li.setAttribute("data-key", todo.id);
       li.classList.add("listItem");
       if (todo.completed === true){
           li.classList.add("checked")
       }
       //Add list item name
       li.innerHTML = todo.name;


//console.log(li)
       todoList.appendChild(li)

       //Add close button to new items
    let cross = document.createTextNode("X");
    let crossButton = document.createElement("span");
    crossButton.className = "close";
    crossButton.appendChild(cross);
    li.appendChild(crossButton);
   })
}

//Add to local storage

function addToLocalStorage(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));

    renderTodos(todos)
}

// Retrieve from local storage
function getFromLocalStorage(){
    let reference = localStorage.getItem("todos");
    if (reference) {
        todos = JSON.parse(reference);
        renderTodos(todos);
    }
}

//Toggle the completed/not completed value in local storage
function toggle(id) {
    todos.forEach(item => {
        if (item.id == id) {
            //if the id of the todo item matches the id passed through from the click action, toggle the item in the todo array
            item.completed = !item.completed;
        }
    })
    addToLocalStorage(todos);
}

//Delete todo from array, update local storage and re-render todo list

function deleteTodo(id) {
    //Filter out the todo item with the id passed through from the click action

    todos = todos.filter(item => {
        return item.id != id;
    });

    //Update local storage
    addToLocalStorage(todos);
}

getFromLocalStorage();

//Adding event listener to list items, so that updating the list item also updates local storage

todoList.addEventListener("click", function(event) {

    //check if the list item was clicked (i.e. not the delete button)

    if (event.target.classList.contains("listItem")){
        // If it's the list item, call the toggle function and pass in the item's data key.
        toggle(event.target.getAttribute("data-key"))
       // console.log(event.target)
    }
    // If it was the delete button that was clicked on, call the delete function
    if (event.target.className === "close") {
        deleteTodo(event.target.parentElement.getAttribute("data-key"))
        //console.log(event.target.parentElement.getAttribute("data-key"))
    }


    
});

//console.log(todos)