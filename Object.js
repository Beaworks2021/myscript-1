class human {
    
    constructor(name, age) 
    {this.name = name;this.age = age; }

    talk() 
    {console.log(this.name + "speaks")}
}

class man extends Human{
 		
}
new man ("Kofi").talk()

