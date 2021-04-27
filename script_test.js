/*
 * 1) Добавить функцию window onload
 * 2) Написать функцию render(имя) и поместить её в window onload
 * 3) вынести все addEventListener в отдельную функцию и вызвать после render
 * 4) доработать addEventListener, вынести функцию отдельно от самого addEventListener
 * 5) displayMessages переимновать в renderTodo и переделать в рендер 1 туду 'append() или appendChild()'
 * 6) displayMessages сам сделать отдельно
 * 7) функция удаления to-do из списка с обновлением HTML
 */

window.onload = () => {
    const form = document.getElementById('todo-input');
    const todoContainer = document.querySelector('.todo');
    let todoList = [];

    function init () {
        todoList = JSON.parse(localStorage.getItem('todoList')) || [];
        form.addEventListener('submit', (event) => addTodo(event));

    }

    function addTodo(event) {  // добавить туду
        event.preventDefault();

        const input = event.target[0];

        if (input.value !== '') {
            const taskData = {
                id: Math.floor(Math.random() * 1000),
                task: input.value,
                checked: false,
                important: false
            };

            todoList.push(taskData);
            localStorage.setItem('todoList', JSON.stringify(todoList));
            renderTodo(taskData);

            input.value = '';
        } else {
            alert('введите туду');
        }
    }

    function renderTodo(todoData) {
        todoContainer.innerHTML += `
         <div>
           <input type="checkbox" id='item_${todoData.id}' ${todoData.checked ? 'checked' : null}> 
           <label for='item_${todoData.id}' class="${todoData.important ? 'important' : null}">${todoData.task}</label>
         </div>`
    }

   let ulList = document.getElementById('delTodo')

    ulList.addEventListener('click', event => {
        let el = event.target
        if (ulList === el) return;
        el.remove()
    });









//удаление
    /*function removeTodo(id) {
    }*/

    function toggleTodoStatus(todoID) { // меняем статус туду

    }

    function renderTodoList(todos) {
        if (todos.length > 0) {
            todos.forEach(todo => {
                renderTodo(todo);
            })
            console.warn('рендер туду из хранилища выполнен')
        }
    }

    init();
    renderTodoList(todoList);
};
