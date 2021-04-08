/**
 * 1) Добавить функцию window onload
 * 2) Написать функцию render и поместить её в window onload
 * 3) вынести все addEventListener в отдельную функцию и вызвать после render
 * 4) доработать addEventListener, вынести функцию отдельно от самого addEventListener
 * 5) displayMessages переимновать в renderTodo и переделать в рендер 1 туду 'append() или appendChild()'
 * 6) displayMessages сам сделать отдельно
 * 7) функция удаления to-do из списка с обновлением HTML
 * */


let addMessage = document.querySelector('.message');
let addButton = document.querySelector('.add');
let todo = document.querySelector('.todo');
let todoList = [];

addButton.addEventListener('click',function () {

    let newTodo = {
        todo: addMessage.value,
        checked: false,
        important: false
    };

    todoList.push(newTodo);
    displayMessages();
 });

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

 todo.addEventListener('change',function (event){
    // let idInput = event.target.getAttibute('id');

    console.log("tut", event.target)
    todoList.forEach(function (item){
        if (item.todo === valueLabel){
            item.checked = !item.checked;
            localStorage.setItem('todo',JSON.stringify(todoList));
        }
    })
 });

 todo.addEventListener('contextmenu', function (event){
   event.preventDefault();
   todoList.forEach(function (item){
       if (item.todo === event.target.innerHTML) {
           item.important = !item.important;
       }
   });
 });



