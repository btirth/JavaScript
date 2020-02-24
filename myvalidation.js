function validation() {
    let myValue = document.getElementById('myValidation').value;
    
    if(isNaN(myValue) || myValue<1 || myValue>20){
        console.log('NOT a valid input');
    } else{
        console.log('Valid input');
    }

}




document.querySelector('.form').addEventListener('submit', (event)=>{
    event.preventDefault();
    
    console.log(event.target.email.value);
    console.log(event.target.password.value);

    if(event.target.password.value == 'asdfghjkl'){
        console.log('Login Successfully');
    } else{
        console.log('Incorrect Password');
    }
    event.target.email.value = '';
    event.target.password.value = '';
})

