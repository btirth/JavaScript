var john = {
    name: 'John',
    age: 24,
    isActive: true,
}

var sammy = {
    name: 'Sammy',
    age: 26,
    isActive: false,
}

var marry = {
    name: 'Marry',
    age: 20,
    isActive: true
}


let users = new Map()

users.set('john', john);
users.set('sammy', sammy);
users.set('marry', marry);

console.log(users);


console.log();
console.log(users.size);
console.log(users.get('sammy'));


console.log();
console.log(users.keys());
console.log(users.values());



console.log();
console.log('ForOf loop: ');
for (const value of users.values()) {
    console.log(value.name);
}

for (const [key, value] of users.entries()) {
    console.log(key + ' = ' + value.name);
}

console.log();
users.forEach((value, key) => {
    console.log(key + ' = ' + value.name);
})




let arrOfArr = [['one', '1'], ['two', '2'], ['three', '3']]

let newMap = new Map(arrOfArr);
console.log(newMap);