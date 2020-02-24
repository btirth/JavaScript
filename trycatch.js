const convertToRs = (dollar) => {
    if(typeof dollar === 'number'){
        return dollar * 70;
    }
    else{
        throw Error('Dollar should be in number');
    }
}

try{
    console.log(convertToRs('five'))
}
catch(e){
    console.log(e);
}


console.log('I will not print if programme ceashes')
