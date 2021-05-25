class Person {
    constructor (name, age, gender, interests){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.interests = interests;
    }
    hello() {
        var interests;
        switch (interests) {
            case 0:
                return ("Hello, my name is " + this.name + " " + "and I am " + this.age + " years old.");
                break;
            case 1:
                return ("Hello, my name is " + this.name + " " + "and I am " + this.age + " years old. My interest is " + this.interests + ".");
                break;
            default: 
                this.interests.splice(this.interests.length -1, 0, " and ");
                return ("Hello, my name is " + this.name + " " + "and I am " + this.age + " years old. My interests are " + this.interests.toString().replace(/,\s([^,]+)$/, ' $1') + ".");
                break;
            }
        
    }
}
let person = new Person('Ryan',30,'male',['being a hardarse', 'agile', 'ssd hard drives'] )
let greeting = person.hello()
console.log(greeting);