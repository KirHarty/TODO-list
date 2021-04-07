let addMessage = document.querySelector('.message'),
    addButton = document.querySelector('.add');
todo =    document.querySelector('.todo');

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
    todoList.forEach(function (item, i){
        displayMessage += `
        <li>
           <input type="checkbox" id='item_${i}' ${item.checked ? 'checked' : null}> 
           <label for='item_${i}' class="${item.important ? 'important' : ''}" >${item.todo}</label>
       </li>
       `;
        todo.innerHTML = displayMessage;
    });
 }

 todo.addEventListener('change',function (event){
    let idInput = event.target.getAttibute('id');

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