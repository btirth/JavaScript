class User{
    
    constructor(Fname, Lname, age){
        this.Fname = Fname;
        this.Lname = Lname;
        this.age = age;
    }

    getFullName(){
        let fullName = `${this.Fname} ${this.Lname} is my full name`;
        return fullName;
    }

    updateName(newName){
        const newname = newName.split(' ');
        this.Fname = newname[0];
        this.Lname = newname[1];
    }
}

class Child extends User{
    
    constructor(Fname, Lname, age, subject){
        super(Fname, Lname, age);
        this.subject = subject;
    }

    getFullName(){
        let fullName = `${this.Fname} ${this.Lname} is my full name and I teach ${this.subject}`;
        return fullName;
    }

}



const john = new Child('John', 'Andrewson', 23);
console.log(john.getFullName());

john.updateName("tirth bharatiya");
console.log(john.getFullName());