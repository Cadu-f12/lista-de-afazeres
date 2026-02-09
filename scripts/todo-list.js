const todoList = [];

function addToList() {
    const inputName = document.querySelector('.js-input-name')

    todoList.push(inputName.value);
    console.log(todoList);

    inputName.value = '';
}