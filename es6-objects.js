const product = {
    label: "JavaScript",
    price: 250
}


const getData = (type,{label:productLabel,price}=product)=>{
    
    console.log(type+" "+productLabel+" "+price)

}

getData("dfsfc")