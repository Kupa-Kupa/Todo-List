import { render } from './render.js';
import { createNewItem } from './todoFactory.js';
import { format, parseISO } from 'date-fns';

// todo items
const todoItems = [];

// add placeholder notes
createNewItem(todoItems, 'Go Shopping', "I'm hungry.", '2023-09-07', 'urgent');
createNewItem(todoItems, 'Soccer Training', 'Kick ball.', '2023-02-28');
createNewItem(todoItems, 'Gym', 'Legs', '2023-03-01');
console.log(todoItems);

// render home notes i.e. all notes
render(todoItems);

// filter buttons
const homeButton = document.querySelector('#home');
const todayButton = document.querySelector('#today');
const weekButton = document.querySelector('#week');

homeButton.addEventListener('click', (event) => render(todoItems));
todayButton.addEventListener('click', filterByToday);
weekButton.addEventListener('click', filterByWeek);

function filterByToday(event) {
  let dateToday = format(new Date(), 'yyyy-MM-dd');
  console.log(dateToday);
  render(todoItems.filter((item) => item.dueDate === dateToday));
}

function filterByWeek(event) {
  let weekToday = format(new Date(), 'ww');
  console.log(weekToday);
  render(
    todoItems.filter(
      (item) => format(parseISO(item.dueDate), 'ww') === weekToday
    )
  );
}

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
