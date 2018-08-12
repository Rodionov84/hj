const todoList = document.getElementsByClassName('todo-list')[0];
const done = todoList.querySelector('.done');
const undone = todoList.querySelector('.undone');

const tasks = todoList.querySelectorAll('.done label, .undone label');
for (let task of tasks) {
  task.addEventListener('click', taskClick);
}

function taskClick(event) {
  if (event.target.nodeName === 'LABEL') {
  	const cb = event.target.firstElementChild;
  	if (cb.checked) {
      undone.appendChild(event.target);
  	}
  	else {
  	  done.appendChild(event.target);
  	}
  }
}