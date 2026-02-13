const todoList = JSON.parse(localStorage.getItem('todoList')) || {
    list: []
};

renderTodoList();

function addToList() {
    const inputNameElement = document.querySelector('.js-input-name');
    const inputDateElement = document.querySelector('.js-input-date');
    
    todoList.list.push({
        name: inputNameElement.value,
        date: inputDateElement.value
    });

    renderTodoList();

    localStorage.setItem('todoList', JSON.stringify(todoList));

    inputNameElement.value = '';
}
function renderTodoList() {
    const divElement = document
        .querySelector('.js-container-output');

    let html = '';

    for (i = 0; i < todoList.list.length; i++) {
        const todoObject = todoList.list[i];
        const {name, date} = todoObject;

        html += `
        <div>${name}</div>
        <div>${date}</div>
        <button onclick="
            todoList.list.splice(${i}, 1);
            localStorage.setItem('todoList', JSON.stringify(todoList));
            renderTodoList();
        " class="
            button-delete
        "
        >Delete</button>
        `;
    }

    divElement.innerHTML = html;
}