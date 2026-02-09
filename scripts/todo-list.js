const todoList = [{
    name: 'Make dinner',
    date: '2020-12-02'
}];

renderTodoList();

function addToList() {
    const inputNameElement = document.querySelector('.js-input-name');
    const inputDateElement = document.querySelector('.js-input-date');
    
    todoList.push({
        name: inputNameElement.value,
        date: inputDateElement.value
    });

    renderTodoList();

    inputNameElement.value = '';
}
function renderTodoList() {
    const divElement = document
        .querySelector('.js-container-output');

    let html = '';

    for (i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        const {name, date} = todoObject;

        html += `
       
        <div>${name}</div>
        <div>${date}</div>
        <button onclick="
            todoList.splice(${i}, 1);
            renderTodoList();
        " class="
            button-delete
        "
        >Delete</button>
        `;
    }

    divElement.innerHTML = html;
}