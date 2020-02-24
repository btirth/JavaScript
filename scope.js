 let globalScope = 'I am Global Scope'

 if(true){
     let localScopeLet = 'I am local scope let'
     var localScopeVar = 'I am local scope var'

     globalScope = 'changed global scope'  //it will also change the global value 

     console.log(localScopeLet)
     console.log(globalScope)
     console.log(localScopeVar)
 }

 console.log(globalScope)

 //error
 //console.log(localScopeLet)

 console.log(localScopeVar)