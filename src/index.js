import { render } from './render.js';
import { createNewItem } from './todoFactory.js';

// todo items
const todoItems = [];

createNewItem(todoItems, 'Go Shopping', "I'm hungry.", '2023-09-07', 'urgent');
createNewItem(todoItems, 'Soccer Training', 'Kick ball.', '2023-02-28');

// todoItems.push(
//   createNewItem('Go Shopping', "I'm hungry.", '01/01/01', 'urgent')
// );
// todoItems.push(createNewItem('Soccer Training', 'Kick ball.', '02/01/01'));

// get todo info from form
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
  console.log(description);

  let dueDate = formDueDate.value;
  console.log(dueDate);

  let priority = formPriority.value;
  console.log(priority);

  createNewItem(todoItems, title, description, dueDate, priority);
  console.log(todoItems);

  render(todoItems);
}

console.log(todoItems);

render(todoItems);
