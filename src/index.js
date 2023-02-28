// todo items
const todoItems = [];

// todo item factory function
function todoItem(
  title,
  description,
  dueDate,
  priority = 'moderate',
  project = '',
  complete = 'no'
) {
  return { title, description, dueDate, priority, project, complete };
}

// create new to do
function createNewItem(
  title,
  description,
  dueDate,
  priority,
  project,
  complete
) {
  // call todoItem function
  const newTodo = todoItem(
    title,
    description,
    dueDate,
    priority,
    project,
    complete
  );
  todoItems.push(newTodo);
}

createNewItem('Title test', 'This is a test todo item', '01/01/01', 'high');
createNewItem(
  'Go Shopping',
  "I'm hungry. Could go for some food.",
  '01/01/01',
  'urgent'
);
createNewItem('Soccer Training', 'Kick ball.', '02/01/01');
console.log(todoItems);

// set todo as complete

/*  change todo priority - low (yellow), moderate (orange), high (red),
    urgent (purple)
*/

// render todo list on page
function render(todoItems) {
  let notesSection = document.querySelector('.notes');

  //   let div = document.createElement('div');
  //   let h2 = document.createElement('h2');
  //   let due = document.createElement('p');
  //   let des = document.createElement('p');

  for (let i = 0; i < todoItems.length; i++) {
    let div = document.createElement('div');
    let h2 = document.createElement('h2');
    let due = document.createElement('p');
    let des = document.createElement('p');

    h2.innerText = todoItems[i].title;
    due.innerText = todoItems[i].dueDate;
    des.innerText = todoItems[i].description;

    div.append(h2, due, des);
    notesSection.append(div);
  }
}

render(todoItems);
