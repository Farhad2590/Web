const student = {
    fullName : "Farhad Hossen",
    marks : 94.60,
    /*fullName : "Farhad Hossen",
    marks : 94.60,*/ //this lines are properties 
    printMarks : function(){
        console.log("marks :",this.marks);
        //here this denotes the object name means: student.marks
    }
    /*printMarks : function(){
        console.log("marks :",this.marks);
    } */ //this lines are methods 

}

const employee ={
    calcTax(){
        console.log("Tax rate is 10%");
    }
}
const karanArjun = {
    salary : 50000,
    calcTax(){
        console.log("Tax rate is 20%");
    }
}
// bcause we are using same method here printed " console.log("Tax rate is 20%");"
const karanArjun2 = {
    salary : 50000,
}
// printed "console.log("Tax rate is 10%");"

karanArjun.__prot__ =employee;
// in this line we are setting employee as a karanArjun prototype 