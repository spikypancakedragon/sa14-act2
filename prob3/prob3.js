const taskForm = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");
const taskFormNew = document.getElementById("taskFormNew")

// event listener for creating a new task

taskForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const taskTitle = document.getElementById("taskTitle").value;
    const taskDetails = document.getElementById("taskDetails").value;

    const li = document.createElement("li");
    li.innerHTML = `<span>${taskTitle}</span>`;

    const editButton = document.createElement("button")
    editButton.innerHTML = "Edit"
    editButton.addEventListener("click", function(event) {
        var things = document.getElementsByClassName("edit");
        for (var i = 0; i < things.length; i++) {
            things[i].style.display = "block";
        };
    });
    li.appendChild(editButton)
    taskList.appendChild(li);

    const deleteButton = document.createElement("button")
    deleteButton.innerHTML = "Delete"
    deleteButton.addEventListener("click", function(event) {
       li.remove(); 
    });
    li.appendChild(deleteButton)
    
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



