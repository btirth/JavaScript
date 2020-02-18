let myTodos = [{
    title: 'Go to Gym',
    isDone: false,
}, {
    title: 'JS',
    isDone: true,
}, {
    title: 'HomeWork',
    isDone: true,
}]




const thingsDone = myTodos.filter((todo) => {
    return todo.isDone === true;
})


console.log(thingsDone);
