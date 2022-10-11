// /*
//  * Title: To Do Application using vanilla JS DOM
//  * Description: This JS file has all the JS functions necessary to control the to do application
//  * Author: Sumit Saha ( Learn with Sumit )
//  * Date: 12/17/2020
//  *
//  */

//  // select elements & assign them to variables
//  let newTask = document.querySelector('#new-task');
//  let form = document.querySelector('form');
//  let todoUl = document.querySelector('#items');
//  let completeUl = document.querySelector('.complete-list ul');

// // functions
// let createTask = function(task) {
//     let listItem = document.createElement('li');
//     let checkBox = document.createElement('input');
//     let label = document.createElement('label');

//     label.innerText = task;
//     checkBox.type = 'checkbox';

//     listItem.appendChild(checkBox);
//     listItem.appendChild(label);

//     return listItem;
// }

// let addTask = function(event) {
//     event.preventDefault();
//     let listItem = createTask(newTask.value);
//     todoUl.appendChild(listItem);
//     newTask.value = "";
//     // bind the new list item to the incomplete list
//     bindInCompleteItems(listItem, completeTask);
// }

// let completeTask = function() {
//     let listItem = this.parentNode;
//     let deleteBtn = document.createElement('button');
//     deleteBtn.innerText = 'Delete';
//     deleteBtn.className = 'delete';
//     listItem.appendChild(deleteBtn);

//     let checkBox = listItem.querySelector('input[type="checkbox"]');
//     checkBox.remove();
//     completeUl.appendChild(listItem);
//     bindCompleteItems(listItem, deleteTask);
// }

// let deleteTask = function() {
//     let listItem = this.parentNode;
//     let ul = listItem.parentNode;
//     ul.removeChild(listItem);
// }

// let bindInCompleteItems = function(taskItem, checkboxClick) {
//     let checkBox = taskItem.querySelector('input[type="checkbox"]');
//     checkBox.onchange = checkboxClick;
// }

// let bindCompleteItems = function(taskItem, deleteButtonClick) {
//     let deleteButton = taskItem.querySelector('.delete');
//     deleteButton.onclick = deleteButtonClick;
// }

// for(let i=0; i< todoUl.children.length; i++ ) {
//     bindInCompleteItems(todoUl.children[i], completeTask);
// }

// for(let i=0; i< completeUl.children.length; i++ ) {
//     bindCompleteItems(completeUl.children[i], deleteTask);
// }

// form.addEventListener('submit', addTask);
// console.log(document.all[5]);

// Get element by ID

// let headerElement = document.getElementById("header");
// // header.textContent = "To-Do Apps";
// // header.innerText = "To-Do Appsss";
// headerElement.style.fontSize = "50px";
// const grandParent = document.querySelector(".todo-list");
// // const parent = grandParent.children;

// const children = grandParent.querySelectorAll(".item");
// console.log(children);
// const childrenTwo = document.querySelector(".item").nextElementSibling;
// const childrenOne = childrenTwo.previousElementSibling;
// childrenOne.style.color = "red";
// Creating an Element

// const divElement = document.createElement("div");
// divElement.className = "red";
// divElement.setAttribute("id", "red");
// divElement.setAttribute("title", "Red Div");
// const container = document.querySelector(".todo-list");
// const a = container.appendChild(divElement);
// // const b = container.append(divElement);
// console.log(a);

// select element

let newTask = document.querySelector("#new-task");
let form = document.querySelector("form");
let todoUl = document.querySelector("#items");
let completeUl = document.querySelector(".complete-list ul");

// Functions

let createTask = function (task) {
  let listItem = document.createElement("li");
  let checkBox = document.createElement("input");
  let label = document.createElement("label");
  label.innerText = task;
  checkBox.type = "checkbox";
  listItem.appendChild(checkBox);
  listItem.appendChild(label);

  return listItem;
};
// console.log(createTask("sss"));
let addTask = function (event) {
  event.preventDefault();
  let listItem = createTask(newTask.value);
  todoUl.appendChild(listItem);
  newTask.value = "";
  // bind the new list item to the incomplete list
  bindInCompleteItems(listItem, completeTask);
};
let completeTask = function () {
  let listItem = this.parentNode;
  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.className = "delete";
  listItem.appendChild(deleteBtn);
  let checkBox = listItem.querySelector('input[type="checkbox"]');
  checkBox.remove();
  completeUl.appendChild(listItem);
  bindCompleteItems(listItem, deleteTask);
};
let deleteTask = function () {
  let listItem = this.parentNode;
  let ul = listItem.parentNode;
  ul.removeChild(listItem);
};
let bindInCompleteItems = function (taskitem, checkboxclick) {
  let checkBox = taskitem.querySelector('input[type="checkBox"]');
  checkBox.onchange = checkboxclick;
};

let bindCompleteItems = function (taskitem, deletebuttonclick) {
  let deleteButton = taskitem.querySelector(".delete");
  deleteButton.onclick = deletebuttonclick;
};
for (let i = 0; i < todoUl.children.length; i++) {
  bindInCompleteItems(todoUl.children[i], completeTask);
}

for (let i = 0; i < completeUl.children.length; i++) {
  bindCompleteItems(completeUl.children[i], deleteTask);
}
// completeUl.forEach((el) => {
//   bindCompleteItems(el, deleteTask);
// });
form.addEventListener("submit", addTask);
