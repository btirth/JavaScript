
const todoList = []

todoList.push('basic JS')
todoList.push('Launch')
todoList.push('Home Work')

todoList.forEach(function(task, i){
    console.log(`${i+1}. ${task}`);
})

