function saveTask() {
    //Get the values from the DOM
    const title = $("#txtTitle").val();
    const desc = $("#txtDescription").val();
    const color = $("#selColor").val();
    const date = $("#selDate").val();
    const status = $("#selStatus").val();
    const budget = $("#numBudget").val();
   
    // 2. Create an object using our class (Model)
    const taskToSave = new Task(title, desc, color, date, status, budget);

    // 3. Log it to verify
    console.log(taskToSave);
    // 4. Call displayTask to render it on the screen
    displayTask(taskToSave);
} 

function init() {
    
    $("#btnSave").click(saveTask);
}

window.onload=init;

document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const color = document.getElementById('color').value;
    const startDate = document.getElementById('startDate').value;
    const status = document.getElementById('status').value;
    const budget = document.getElementById('budget').value;

    
    const task = {
        title,
        description,
        color,
        startDate,
        status,
        budget
    };

    
    displayTask(task);
});

function displayTask(task) {
    const taskDisplay = document.getElementById('list');
    const taskElement = document.createElement('div');
    taskElement.className = 'task';
    taskElement.style.borderLeftColor = task.color;
    
    const formattedBudget = parseFloat(task.budget) || 0;
    const formattedDate = task.date || 'No date';
    
    taskElement.innerHTML = `
        <div class="task-header">
            <h3>${task.title}</h3>
            <span class="task-status ${task.status.toLowerCase().replace(' ', '-')}">${task.status}</span>
        </div>
        <p class="task-description">${task.description}</p>
        <div class="task-details">
            <div class="task-detail">
                <strong>Date:</strong> ${formattedDate}
            </div>
            <div class="task-detail">
                <strong>Budget:</strong> $${formattedBudget.toFixed(2)}
            </div>
        </div>
    `;
    
    taskDisplay.appendChild(taskElement);
    
    // Clear form after saving
    document.getElementById('taskForm').reset();
}