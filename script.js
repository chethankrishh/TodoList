let addTaskButton = document.getElementById("add-task-button");
let taskInput = document.getElementById("task-input");
let taskList = document.getElementById("task-list");

addTaskButton.addEventListener("click", function () {
  let todoText = taskInput.value.trim();
  if (todoText !== "") {
    let todoli = document.createElement("li");
    todoli.textContent = todoText;
    taskList.appendChild(todoli);
    taskInput.value = "";

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.style.marginLeft = "10px";
    todoli.append(deleteButton);

    deleteButton.addEventListener("click", function () {
      todoli.remove();
    });
  } else {
    alert("Enter Task needs to be created");
  }

  saveData();
});

taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTaskButton.click();
  }
});

function saveData() {
  localStorage.setItem("value", taskList.innerHTML);
}

function showTask() {
  taskList.innerHTML = localStorage.getItem("value");
}

showTask();
