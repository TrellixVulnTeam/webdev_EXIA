let addMessage = document.querySelector('.message');
let addButton = document.querySelector('.add');

let todoList=[];

let delButton = document.querySelector('.del');
let todo= document.querySelector('.todo')


if(localStorage.getItem('todo')){
    todoList = JSON.parse(localStorage.getItem('todo'));
    displayMessages();
}
addButton.addEventListener('click',function(){
    let newTodo={
        todo:addMessage.value,
        checked:false,
        
    };
    todoList.push(newTodo);
    localStorage.setItem('todo',JSON.stringify(todoList));

    localStorage.setItem('todo',JSON.stringify(todoList));


});

function displayMessages(){
    let displayMessage ='';
    todoList.forEach(function(item,i){
            displayMessage+= `

        <li>
            <input type ='checkbox' id='item_${i}' ${item.checked ? 'checked':''}>
            
            <label for='item_${i}'>${item.todo}</label>


        </li>
        `;
        todo.innerHTML= displayMessage;
    
    });
}

todo.addEventListener('change',function(event){
    let IdInput = event.target.getAttribtute('id');
    let forLabel = todo.querySelector('[for='+IdInput+']');
    let valueLabel = forLabel.innerHTML;
    todoList.forEach(function(item){
        if(item.todo === valueLabel){
            item.checked = !item.checked;
            localStorage.setItem('todo',JSON.stringify(todoList));
        }
    })

})


let a = 2;

if(a){
    let a = 3;
}

console.log(a);

// delButton.addEventListener('click',function(event){
//     event.defaultPrevented();
//     todoList.forEach(function(item,i){
//         if(item.todo===event.target.innerHTML){
//             todoList.splice(i,1);
//         }
        
//         displayMessages();
//     })

// })

todo.addEventListener('contextmenu',function(event){
    event.preventDefault();
    todoList.forEach(function(item,i){
        if(item.todo===event.target.innerHTML){
            todoList.splice(i,1);
            
            localStorage.setItem('todo',JSON.stringify(todoList));

        }
        displayMessages();
        
    })
})
