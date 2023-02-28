import { createNewItem } from './todoFactory';

const addNoteForm = document.querySelector('#note-form');

addNoteForm.addEventListener('submit', getTodoInfo);

function getTodoInfo(event) {
  event.preventDefault();

  const formTitle = document.querySelector('#title');
  const formDesc = document.querySelector('#description');
  const formDueDate = document.querySelector('#due-date');
  const formPriority = document.querySelector('#priority');

  let title = formTitle.value;
  console.log(title);

  let description = formDesc.value;
  let dueDate = formDueDate.value;
  let priority = formPriority.value;

  createNewItem(
    todoItems,
    title,
    description,
    dueDate,
    priority,
    project,
    complete
  );
}
