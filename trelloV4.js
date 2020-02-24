let myTodos = [{
    title: 'Go to Gym',
    isDone: false,
}, {
    title: 'JS',
    isDone: true,
}, {
    title: 'HomeWork',
    isDone: false,
}]



//go through all objects in array and return the index of object when a.title matched
// console.log(myTodos.findIndex(function(a, index){   //it's a more like forEach loop
//     return a.title === 'JS';
// }))

// console.log();





//Method 1
const findTodo1 = function(todoList, title1){
    const index = todoList.findIndex(function(todo, index){
        return todo.title.toLowerCase() === title1.toLowerCase();
    })

    return todoList[index];
}
console.log(findTodo1(myTodos, 'go To gym'))

console.log();



//Method 2
const findTodo2 = function(todoList, title2){
    const returnTodo = todoList.find(function(todo, index){
        return todo.title.toLowerCase() === title2.toLowerCase();
    })

    return returnTodo;
}

console.log(findTodo2(myTodos, 'JS'));
