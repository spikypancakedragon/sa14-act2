const taskForm = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");
const taskFormNew = document.getElementById("taskFormNew")

// event listener for creating a new task

taskForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const taskTitle = document.getElementById("taskTitle").value;
    const taskDetails = document.getElementById("taskDetails").value;

    const li = document.createElement("li");
    li.innerHTML = `<span>${taskTitle}</span> <button class="editButton">Edit</button> <button class="deleteButton">Delete</button>`;
    // event listener for clicking the edit button next to a task
    li.addEventListener("submit", function(event) {
        var things = document.getElementsByClassName("edit");
        for (var i = 0; i < things.length; i++) {
            things[i].style.display = "block";
        };
    });
    taskList.appendChild(li);
    taskForm.reset();
});

// event listener for submitting edits made to a task

taskFormNew.addEventListener("submit", function(event) {
    event.preventDefault();
    const taskTitleNew = document.getElementById("taskTitleNew").value;
    const taskDetailsNew = document.getElementById("taskDetailsNew").value;

    const li = event.currentTarget;
    li.innerHTML = `<span>${taskTitleNew}</span> <button class="editButton">Edit</button> <button class="deleteButton">Delete</button>`;
    taskList.appendChild(li);
    taskFormNew.reset();
});



