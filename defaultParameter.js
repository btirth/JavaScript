let guestuser = function(name = 'unName', courseCount = 0){
    return 'Hello ' + name + ' and your course count is ' + courseCount
}

console.log(guestuser())
console.log(guestuser('John'))
console.log(guestuser('John', 5))