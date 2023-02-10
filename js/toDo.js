/*
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

  */

const todoForm = document.querySelector('#todo__form')
const todoList = document.querySelector('.todos')
const totalTasks = document.querySelector('#total__tasks')
const completedTasks = document.querySelector('#completed__tasks')
const remainingTasks = document.querySelector('#remaining__tasks')
const mainInput = document.querySelector('#todo__form input')

let tasks = JSON.parse(localStorage.getItem('tasks')) || []

if(localStorage.getItem('tasks')){
    tasks.map((task) => {
        createTask(task)
    })
}

todoForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const inputValue = mainInput.value

    if(inputValue == ""){
        return
    }

    const task = {
        id: new Date().getTime(),
        name: inputValue,
        isCompleted : false
    }

    tasks.push(task)
    localStorage.setItem('tasks', JSON.stringify(tasks))

    createTask(task)

    todoForm.reset()
    mainInput.focus()
})

todoList.addEventListener('click', (e) => {
    if(e.target.classList.contains('remove__task') || e.target.parentElement.classList.contains('remove__task') || e.target.parentElement.parentElement.classList.contains('remove__task')){
        const taskId = e.target.closest('li').id
        removeTask(taskId)  
    }
})

todoList.addEventListener('input', (e) => {
    const taskId = e.target.closest('li').id
    updateTask(taskId, e.target)
})

function createTask(task){
    const taskEl = document.createElement('li')
    taskEl.setAttribute('id', task.id)

    if(task.isCompleted){
        taskEl.classList.add('complete')
        //console.log(task)
    }

    const taskElMarkup = `
    <div>
        <input type='checkbox' name='tasks' id='${task.id}' ${task.isCompleted ? 'checked' : ''}> 
        <span class="test" ${!task.isCompleted ? 'contenteditable' : ''}>${task.name} </span>
    </div>

    <button title="Remove the '${task.name}' task" class="remove__task">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgb(71, 71, 71);"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
    </button>
    `

    taskEl.innerHTML = taskElMarkup
    todoList.appendChild(taskEl)

    countTasks()
}

function countTasks(){
    const completedTasksArray = tasks.filter((task) => task.isCompleted === true)
    totalTasks.textContent = tasks.length
    completedTasks.textContent = completedTasksArray.length
    remainingTasks.textContent = tasks.length - completedTasksArray.length
}

function removeTask(taskId){
    tasks = tasks.filter((task) => task.id !== parseInt(taskId))

    localStorage.setItem('tasks', JSON.stringify(tasks))
    document.getElementById(taskId).remove()
    countTasks()
}
function updateTask(taskId, el){
    const task = tasks.find((task) => task.id === parseInt(taskId))

    //console.log(task)

    if(el.hasAttribute('contenteditable')){
        task.name = el.textContent
    }
    else{
        const span = el//.nextElementSibiling
        const parent = el.closest('li')
        
        task.isCompleted = !task.isCompleted

        //console.log(task.isCompleted + " completed?")
        //console.log(el.nextElementSibiling)
        if(task.isCompleted){
            span.removeAttribute('contenteditable')
            parent.classList.add('complete')
        }
        else{
            span.setAttribute('contenteditable', 'true')
            parent.classList.remove('complete')
            location.reload();
        }
    }
    localStorage.setItem('tasks', JSON.stringify(tasks))
    countTasks()
}