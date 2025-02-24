document.getElementById('addTask').addEventListener('click', function() {
    let taskInput = document.getElementById('taskInput');
    let taskList = document.getElementById('taskList');
    
    if (taskInput.value.trim() === "") {
        alert("Please enter your task first!");
        return;
    }
    
    let li = document.createElement('li');
    li.classList.add('task-item');
    li.innerHTML = `${taskInput.value} <button class="delete-task">Delete</button>`;
    
    taskList.appendChild(li);
    taskInput.value = "";
});

document.getElementById('taskList').addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-task')) {
        event.target.parentElement.remove();
    }
});
