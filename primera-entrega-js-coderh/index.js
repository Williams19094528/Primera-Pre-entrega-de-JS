// index.js
const tasks = []; // Array para almacenar las tareas

function addTask() {
  const taskInput = document.getElementById("taskInput").value; // Obtener el valor del input
  if (taskInput !== "") {
    // Verificar si el input no está vacío
    tasks.push({ task: taskInput, completed: false }); // Agregar la tarea al array
    showTasks(); // Actualizar la lista de tareas
    document.getElementById("taskInput").value = ""; // Limpiar el input después de agregar la tarea
  }
}

function deleteTask(index) {
  const confirmMsg = confirm("¿Está seguro de que desea eliminar esta tarea?"); // Confirmación para eliminar la tarea
  if (confirmMsg) {
    tasks.splice(index, 1); // Eliminar la tarea del array
    showTasks(); // Actualizar la lista de tareas
  }
}

function showTasks() {
  const taskList = document.getElementById("taskList"); // Obtener el elemento <ul>
  taskList.innerHTML = ""; // Limpiar el contenido de la lista

  tasks.forEach((task, index) => {
    // Recorrer todas las tareas en el array
    const li = document.createElement("li"); // Crear un nuevo elemento <li>
    li.textContent = task.task; // Establecer el texto de la tarea

    const deleteButton = document.createElement("button"); // Crear un botón "Eliminar"
    deleteButton.textContent = "Eliminar"; // Establecer el texto del botón
    deleteButton.onclick = () => deleteTask(index); // Asignar el manejador de eventos al botón
    li.appendChild(deleteButton); // Agregar el botón al elemento <li>

    taskList.appendChild(li); // Agregar el elemento <li> al <ul>
  });
}
