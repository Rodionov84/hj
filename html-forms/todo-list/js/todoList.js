const listBlock = document.getElementsByClassName('list-block')[0];
const tasks = listBlock.querySelectorAll('li');
const tasksCheckbox = listBlock.querySelectorAll('input');
const doneStatus = listBlock.querySelector('output');

for(let checkbox of tasksCheckbox) {
  checkbox.addEventListener('change', tasksUpdate);
}
tasksUpdate();

function tasksUpdate() {
  let doneCount = 0;
  for (let checkbox of tasksCheckbox) {
  	if ( checkbox.checked ) {
  		doneCount++;
  	}
  }
  if (doneCount === tasks.length) {
  	listBlock.classList.add('complete');
  }
  else {
  	listBlock.classList.remove('complete');
  }
  doneStatus.innerHTML = doneCount + ' из ' + tasks.length;
}