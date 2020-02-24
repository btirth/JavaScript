let myTodo = {
    day: 'Monday',
    meetings: 0,
    meetDone: 0,

    addMeeting: function(num){
        this.meetings = this.meetings + num;
    },

    meetingsDone: function(num){
        this.meetDone = this.meetDone + num;
    },

    summary: function(){
        return `You have ${this.meetings - this.meetDone} meetings Today`;
    } 
}

myTodo.addMeeting(4);
myTodo.meetingsDone(2);
console.log(myTodo.summary());