document.addEventListener("DOMContentLoaded", loadTasks);
document.getElementById("addTask").addEventListener("click", function () {
  let taskInput = document.getElementById("taskInput");
  let taskDate = document.getElementById("taskDate");
  let taskList = document.getElementById("taskList");

  if (taskInput.value.trim() === "") {
    alert("Please enter your task first!");
    return;
  }

  let li = document.createElement("li");
  li.classList.add("task-item");
  li.innerHTML = `<input type="checkbox" class="task-check"> ${taskInput.value} (${taskDate.value})
        <button class="edit-task">Edit</button>
        <button class="delete-task">Delete</button>`;

  taskList.appendChild(li);
  saveTasks();
  updateTaskCount();
  taskInput.value = "";
  taskDate.value = "";
});

document.getElementById("taskList").addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-task")) {
    event.target.parentElement.remove();
    saveTasks();
    updateTaskCount();
  } else if (event.target.classList.contains("edit-task")) {
    let newTask = prompt(
      "Edit your task:",
      event.target.parentElement.textContent.trim()
    );
    if (newTask) {
      event.target.parentElement.childNodes[1].nodeValue = newTask;
      saveTasks();
    }
  } else if (event.target.classList.contains("task-check")) {
    updateTaskCount();
  }
});

function saveTasks() {
  localStorage.setItem("tasks", document.getElementById("taskList").innerHTML);
}
function loadTasks() {
  document.getElementById("taskList").innerHTML =
    localStorage.getItem("tasks") || "";
  updateTaskCount();
}
function updateTaskCount() {
  let totalTasks = document.querySelectorAll(".task-item").length;
  let completedTasks = document.querySelectorAll(".task-check:checked").length;
  document.getElementById("totalTasks").innerText = totalTasks;
  document.getElementById("completedTasks").innerText = completedTasks;
}
document
  .getElementById("toggleDarkMode")
  .addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });
