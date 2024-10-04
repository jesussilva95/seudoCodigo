

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === ''){
        return;
    }

    const taskList = document.getElementById('taskList');

    const taskItem = document.createElement('div');

    const taskLabel = document.createElement('span');
    taskLabel.textContent = taskText;
    taskLabel.onclick = function() {
        taskLabel.classList.toggle('completed');
    };

    const doneButton = document.createElement('button');
    doneButton.textContent = 'Terminado';
    doneButton.onclick = function() {
        taskLabel.classList.add('completed');
        doneButton.disabled = true;
    };

    const deleteButton = document.createElement('span');
    deleteButton.textContent = 'Eliminar';
    deleteButton.classList.add('delete');
    deleteButton.onclick = function() {
        taskItem.remove(); 
    };
    taskItem.appendChild(taskLabel);
    taskItem.appendChild(doneButton);
    taskItem.appendChild(deleteButton);

    taskList.appendChild(taskItem);
    taskInput.value = '';
}
