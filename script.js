// alert('File is attached')


const myElement = document.querySelectorAll('.classone')
console.log(myElement[0])



const myPElement = document.querySelector('p')
myPElement.textContent = 'I am change using JS'



const newElement = document.createElement('p')
newElement.textContent = 'I was added using JS'

document.querySelector('body').appendChild(newElement)





document.querySelector('button').addEventListener('click',() => {
    event.target.textContent = 'I was clicked'
})



document.querySelector('#myvalidation').addEventListener('input',(event)=>{
    console.log(event.target.value);
})