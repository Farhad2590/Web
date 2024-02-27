let data = "Website Data"
class User{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    ViewData(){
        console.log("Data", data);
    }
}
class Admin extends User{
    constructor(name,email){
        super(name,email)
    }
    updateData(){
        data = "Some new Data"
    }
}
let student1 = new User("Farhad","Farhad@gmail.com")
let student2 = new User("Hossen","Hossen@gmail.com")

let admin = new Admin("Admin", "adminclg@gmail.com")