form = document.querySelector("form");
taskList = document.querySelector("#task-list")


// Handle form submission
form.addEventListener('submit', e => {
    e.preventDefault();
  
    // Get the task text, description, and date from the inputs
    const task = document.querySelector('#new-task').value;
    const description = document.querySelector('#new-task-description').value;
    const date = document.querySelector('#new-task-date').value;
    var deleteBtn = document.createElement("BUTTON");
    deleteBtn.id = "deleteBtn";
    deleteBtn.textContent = "Delete";
  
    // Create a new list item
    const li = document.createElement('li');
    li.classList.add('task');
  
    // Create new elements for task, description and date
    const taskElem = document.createElement('p');
    taskElem.innerText = task;
    const descriptionElem = document.createElement('p');
    descriptionElem.innerText = description;
    const dateElem = document.createElement('p');
    dateElem.innerText = date;
    const deleteElem = document.createElement('p');
    deleteElem.innerText = deleteBtn;

  
    // Append the task, description, and date to the task list
    li.appendChild(taskElem);
    li.appendChild(descriptionElem);
    li.appendChild(dateElem);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    // Clear the inputs
    document.querySelector('#new-task').value = '';
    document.querySelector('#new-task-description').value = '';
    document.querySelector('#new-task-date').value = '';

    deleteBtn.addEventListener("click", function() {
        li.remove();
    });
    
  });

  