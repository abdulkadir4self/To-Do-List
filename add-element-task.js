const todoInput = document.getElementById('todoInput');
const todoBtn = document.getElementById('todoBtn');
const todoAddHere = document.getElementById('todoAddHere');

todoBtn.addEventListener('click' , function(e){

    let todo = todoInput.value;
    
    function capitalizeEachWord(todo){
        return todo.toLowerCase()
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    }


    let insertTodo = `<li>${capitalizeEachWord(todo)} <button>Delete</button> </li>`;
    todoAddHere.insertAdjacentHTML('beforeend' , insertTodo);
    // console.dir(todoInput);
    todoInput.value = '';  
})

todoAddHere.addEventListener('click' , function(e){
    if(e.target.tagName == 'BUTTON'){
        e.target.parentElement.remove();
    }
})
