/*
 * 1) Добавить функцию window onload
 * 2) Написать функцию render(имя) и поместить её в window onload
 * 3) вынести все addEventListener в отдельную функцию и вызвать после render
 * 4) доработать addEventListener, вынести функцию отдельно от самого addEventListener
 * 5) displayMessages переимновать в renderTodo и переделать в рендер 1 туду 'append() или appendChild()'
 * 6) displayMessages сам сделать отдельно
 * 7) функция удаления to-do из списка с обновлением HTML
 */

const form = document.getElementById('todo-input');
const todoContainer = document.querySelector('.todo');
let todoList = [];

window.onload = () => {

    function init () {
        form.addEventListener('submit', (event) => addTodo(event));

    }

    function addTodo(event) {  // добавить туду
        event.preventDefault();

        let newTodo = {
            task: event.target[0].value,
            checked: false,
            important: false
        };
        todoList.push(newTodo)

        renderTodo();
    }

    function removeTodo(todoID) { // удалить туду

    }

    function toggleTodoStatus(todoID) { // меняем статус туду

    }

    function renderTodo(todoList) { // меняем статус туду

        //
    }

    init();
};

   // addButton.addEventListener('click',function (){ form.addEventListener('submit', logSubmit);
   //

   //
   //     console.log(newTodo);
   //
   //
   // });

/*

  function subscribe (elements, action) {

    function addTodo() {
        const newTodo = {
            todo: elements.addMessage.value,
            checked: false,
            important: false
        };

        //todoList.push(newTodo);
    }

    if (action === 'subscribe') {
        elements.addButton.addEventListener('click', addTodo);
    } else if (action === 'unsubscribe') {
        elements.addButton.removeEventListener('click', addTodo);
    }
}

function render() {
    let addMessage = document.querySelector('.message');
    let addButton = document.querySelector('.add');
    let todo = document.querySelector('.todo');
    let todoList = [];

    subscribe({addMessage,addButton,todo}, 'subscribe');




    function displayMessages() {
        let displayMessage = '';
        todoList.forEach(function (item, index){
            displayMessage += `
        <li>
           <input type="checkbox" id='item_${index}' ${item.checked ? 'checked' : null}> 
           <label for='item_${index}' class="${item.important ? 'important' : null}" >${item.todo}</label>
       </li>`;
            todo.innerHTML = displayMessage;
        });
    }



}

*/



//    elements.todo.addEventListener('change',function (event){
//         // let idInput = event.target.getAttibute('id');
//
//         console.log("tut", event.target)
//         todoList.forEach(function (item){
//             if (item.todo === valueLabel){
//                 item.checked = !item.checked;
//                 localStorage.setItem('todo',JSON.stringify(todoList));
//             }
//         })
//     });
//
//     elements.todo.addEventListener('contextmenu', function (event){
//         event.preventDefault();
//         todoList.forEach(function (item){
//             if (item.todo === event.target.innerHTML) {
//                 item.important = !item.important;
//             }
//         });
//
//    });

// const myEvent = {
//     target: {
//         value: 'pepega'
//     }
// }
//
// console.log(myEvent, 'создание и вызов своего объекта')



/*
* 1) Массивы и их методы
* 2) Объекты и их методы
* 3) Функции обычные и стрелочные(объявление функции),(аргументы фукнкий)!!!
*   Идеально!!!!
* 4)Операторы,операнды.

* */