// Select the necessary elements
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");

    // Create a span for the task text
    const span = document.createElement("span");
    span.textContent = taskText;
    li.appendChild(span);

    // Create a button to remove the task
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-button");
    removeButton.onclick = function () {
        taskList.removeChild(li);
    };
    li.appendChild(removeButton);

    // Add an event listener to mark the task as completed
    span.onclick = function () {
        li.classList.toggle("completed");
    };

    // Add the task to the task list
    taskList.appendChild(li);
    taskInput.value = ""; // Clear the input field
}

// Add an event listener to the button
addTaskButton.addEventListener("click", addTask);

// Allow pressing 'Enter' to add a task
taskInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});
