let addTaskButton = document.getElementById("add-task-button");
let taskInput = document.getElementById("task-input");
let taskList = document.getElementById("task-list");

addTaskButton.addEventListener("click", addTask);

function addTask() {
  let todoText = taskInput.value.trim();

  if (todoText === "") {
    alert("Enter Task needs to be created");
    return;
  }

  let todoli = document.createElement("li");
  todoli.innerHTML = `
  <img src="images/unchecked.png" class="unchecked">
  <span class="task-text">${todoText}</span>
`;
  let deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("delete");
  todoli.append(deleteButton);
  taskList.appendChild(todoli);
  taskInput.value = "";

  saveData();
}

// Event delegation
taskList.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
    saveData();
  }

  // CHECK / UNCHECK
  if (e.target.classList.contains("unchecked")) {
    let li = e.target.parentElement;

    li.classList.toggle("completed");

    if (li.classList.contains("completed")) {
      e.target.src = "images/checked.png";
    } else {
      e.target.src = "images/unchecked.png";
    }

    saveData();
  }
});

taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

function saveData() {
  localStorage.setItem("value", taskList.innerHTML);
}

function showTask() {
  taskList.innerHTML = localStorage.getItem("value") || "";
}

showTask();
