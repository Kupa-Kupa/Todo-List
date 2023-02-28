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
  todoItems,
  title,
  description,
  dueDate,
  priority,
  project,
  complete
) {
  // return new todo Item
  // return todoItem(title, description, dueDate, priority, project, complete);

  /**/
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
  /**/
}

export { createNewItem };
