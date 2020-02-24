let myTodo = {
    day: 'Monday',
    meetings: 0,
    meetDone: 0,

}

let addMeeting = function(todo, meet = 0){
    todo.meetings = todo.meetings + meet;
}

let meetDone = function(todo, meet = 0){
    todo.meetDone = todo.meetDone + meet;
}

let daySummary = function(todo){
    console.log(`You have ${todo.meetings-todo.meetDone} have meetings today`);
}


addMeeting(myTodo, 3);
addMeeting(myTodo, 5);
meetDone(myTodo, 2);
daySummary(myTodo);