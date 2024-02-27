
class person {
    constructor(name) {
        this.species = "homo sapiens";
        this.name = name;
    }
    eat() {
        console.log("Please Eat");
    }

}
class engineer extends person {
    constructor(name) {
        console.log("Enter Child Constructor");
        super(name); // to invoke parent class constructor
    }
    work() {
        super.eat();
        console.log("Please Work, You are an Engineer");
    }
}

let maneng = new engineer("Farhad");