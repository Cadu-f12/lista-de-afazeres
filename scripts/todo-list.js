const todoList = [];

function addToList() {
    const inputElement = document.querySelector('.js-input-name');
    todoList.push(inputElement.value);

    renderHTML();

    inputElement.value = '';
}
function renderHTML() {
    const paragraphElement = document
        .querySelector('.js-paragraph-output');
    
    let text = '';

    for (i = 0; i < todoList.length; i++) {
        text += `<p>${todoList[i]}</p>`;
    }

    paragraphElement.innerHTML = text;
}