// script.js
document.addEventListener('DOMContentLoaded', function () {
    const todoForm = document.getElementById('todo-form');
    const taskList = document.getElementById('task-list');
    const nightModeToggle = document.getElementById('night-mode-toggle');
    const taskContainer = document.querySelector('.todo-container');

    console.log(taskContainer);

    // Check local storage for the night mode state
    const nightMode = localStorage.getItem('nightMode');
    if (nightMode === 'enabled') {
        document.body.classList.add('night-mode');
        nightModeToggle.checked = true;
    }

    todoForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const description = document.getElementById('description').value;
        const dueDate = document.getElementById('due-date').value;
        const category = document.getElementById('category').value;
        var dob = new Date(dueDate);
        var dobArr = dob.toDateString().split(' ');
        var dobFormat = dobArr[2] + ' ' + dobArr[1] + ' ' + dobArr[3];


        if (!description || !dueDate || !category) {
            alert('Please fill in all fields.');
            return;
        }

        // Create a new task item
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <span>${description}</span>
            <div>
                <span>${dobFormat}</span>
                <button class="category">${category}</button>
                <i class="fa-solid fa-trash delete" style="color: #bea527;"></i>
            </div>
        `;

        // Add task item to the task list
        taskList.appendChild(taskItem);

        // Clear the form fields
        todoForm.reset();
    });

    nightModeToggle.addEventListener('change', function () {
        if (nightModeToggle.checked) {
            document.body.classList.add('night-mode');

            //for container
            const span = document.querySelector(".todo-container");
            var classes = span.classList;
            classes.add("test");
            
            document.getElementsByClassName('todo-container').className = "test";
            //for task list
            const s=document.querySelector("#todo-list");
            const clas=span.classList;
            clas.add("todo-night")
            document.getElementById('#todo-list').className = "todo-night";
            classes.remove("todo-night");

            

            localStorage.setItem('nightMode', 'enabled');
        } else {
            const span = document.querySelector(".todo-container");
            const classes = span.classList;
            classes.remove("test");
            document.body.classList.remove('night-mode');
            localStorage.setItem('nightMode', 'disabled');
        }
    });

    taskList.addEventListener('click', function (e) {
        if (e.target.classList.contains('delete')) {
            e.target.parentElement.parentElement.remove();
        }
    });
});
