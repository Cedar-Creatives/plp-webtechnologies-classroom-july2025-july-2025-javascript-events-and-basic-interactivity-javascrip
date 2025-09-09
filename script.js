// Dark/Light Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});


// Task Form Handling & Validation
const taskForm = document.getElementById('task-form');
const taskName = document.getElementById('task-name');
const taskDesc = document.getElementById('task-desc');
const taskList = document.getElementById('task-list');
const formError = document.getElementById('form-error');

taskForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form from reloading the page
  formError.textContent = '';

  // Simple validation
  if (taskName.value.trim() === '') {
    formError.textContent = 'Task name is required!';
    return;
  }
  if (taskDesc.value.trim() === '') {
    formError.textContent = 'Task description is required!';
    return;
  }

  // Add task
  addTask(taskName.value, taskDesc.value);

  // Clear input fields
  taskName.value = '';
  taskDesc.value = '';
});


// Add Task Function
function addTask(name, desc) {
  const li = document.createElement('li');
  li.innerHTML = `
    <span>${name} - ${desc}</span>
    <div>
      <button class="complete-btn">✔</button>
      <button class="delete-btn">🗑</button>
    </div>
  `;
  taskList.appendChild(li);

  // Event: Complete Task
  const completeBtn = li.querySelector('.complete-btn');
  completeBtn.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  // Event: Delete Task
  const deleteBtn = li.querySelector('.delete-btn');
  deleteBtn.addEventListener('click', () => {
    taskList.removeChild(li);
  });
}
