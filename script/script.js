document.querySelector('.js-input-div')
  .addEventListener('keydown', (event) => keyFuncFinal(event));

document.querySelector('.js-input-final')
  .addEventListener('keydown', (event) => keyFuncFinal(event));

document.querySelector('.js-add-btn')
  .addEventListener('click', () => todoListFinalFunc());



const todoListFinal = JSON.parse(localStorage.getItem('todoList')) || [];

todoListFinalFunc();

function todoListFinalFunc(){
  const inputName = document.querySelector('.input-final');
  const name = inputName.value;
  const inputDueDate = document.querySelector('.js-due-date-input');
  const dueDate = inputDueDate.value;
  
  if(name && dueDate){
    
    todoListFinal.push({
      name, // same as name: name,
      dueDate // same as dueDate: dueDate
    });

  }else {
    document.querySelector('.error').innerHTML = 'Something Missing :(';
  }

  let html = '';
  
  todoListFinal.forEach((todoList, i) => {

    const name = todoList.name;
    const dueDate = todoList.dueDate;
    // above two line can be written as - const {name, dueDate} = todaList;

    html += `
      <div> ${name} </div>
      <div> ${dueDate} </div>
      <button class="del-btn js-del-btn">
        Delete
      </button>
      `;

  });

  document.querySelector('.showTodo1').innerHTML = html;

  document.querySelectorAll('.js-del-btn')
    .forEach((deleteButton, i) => {
      deleteButton.addEventListener('click', () => {
        todoListFinal.splice(i, 1);
        todoListFinalFunc();
        document.querySelector('.error').innerHTML = '';
      });
    });


  localStorage.setItem('todoList' , JSON.stringify(todoListFinal));

  inputName.value = '';
  inputDueDate.value = '';

}

function keyFuncFinal(event) {
  if(event.key === 'Enter'){
    todoListFinalFunc();
  }else{
    document.querySelector('.error').innerHTML = '';
  }
}

// function keyFuncFinal1(event) {
//   if(event.key === 'Enter'){
//     document.querySelector('.js-due-date-input');
//   }else{
//     document.querySelector('.error').innerHTML = '';
//   }
// }
