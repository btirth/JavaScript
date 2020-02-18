let number = ['One', 'Two', 'Three', 'Four', 'Five', 'Six']

number[1] = 2

console.log(number)


//start

//remove index from zero index
let a = number.shift()
console.log(a)
console.log(number)

//add element at zero index
number.unshift('something')
console.log(number)



//end

//remove element from the end
let b = number.pop()
console.log("Last element is " + b)
console.log(number)

//add element at the end of array
number.push('Seven')
console.log(number)



//middle
//splice(startIndex, numberOfElementToRemove, replaceWith(notNeccessary))
number.splice(2, 1, 'SOMETHING')
console.log(number)