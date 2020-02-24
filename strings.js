let str = '   hey, I  am Tirth   '

console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.trim());

let checkStr = function(str, userStr){
    if(str.includes(userStr)){
        return true;
    }

    return false;
}


console.log(checkStr(str, 'hey'));