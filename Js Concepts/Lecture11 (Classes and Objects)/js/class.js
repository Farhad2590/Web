class ToyotaCar{
    constructor(brand,milage){
        console.log("Creating a new object");
        this.brand = brand
        this.milage = milage
    }
    start(){
        console.log("Please Start");
    }
    stop(){
        console.log("Please Stop");
    }
    // setBrand(brand){
    //     this.brand = brand;
    // }
}

let fortuner = new ToyotaCar("Fortuner",10);
// fortuner.setBrand("Fortuner")
console.log(fortuner);

let lexas = new ToyotaCar("Lexas",12);
// lexas.setBrand("Lexas")
console.log(lexas);
let walton = new ToyotaCar();