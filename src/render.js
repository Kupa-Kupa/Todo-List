// render todo list on page
function render(todoItems) {
  let notesSection = document.querySelector('.notes');
  notesSection.replaceChildren();

  for (let i = 0; i < todoItems.length; i++) {
    let div = document.createElement('div');
    div.classList.add('todo-item');
    let container = document.createElement('div');
    let h2 = document.createElement('h2');
    let due = document.createElement('p');
    let des = document.createElement('p');

    h2.innerText = todoItems[i].title;
    due.innerText = todoItems[i].dueDate;
    des.innerText = todoItems[i].description;

    container.append(h2, des);
    div.append(container, due);
    notesSection.append(div);
  }
}

export { render };
