const days = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat']

days.forEach(function(a){
    console.log(a);
})
console.log();
console.log('For each loop with index value')

days.forEach(function(b, index){
    console.log(`start with ${index+1} -- ${b}`);
})