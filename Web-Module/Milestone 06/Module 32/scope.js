
if (true) {
    const a = 10;
    let b = 20;
    var c = 30;
}
let b = 30
// console.log("Outer Let ",b); Executed

const a = 40;
// console.log("Outer  Const",a); Executed

// console.log(a); can't output because const cant access outside of a scope
// console.log(b); can't output because let cant access outside of a scope
// console.log(c); Output 30 var can access outside of a scope 

function firstName() {
    const userNameFirst = "Farhad"
    function secondName() {
        const userNamesecond = "Hossen"

        const fullName = userNameFirst + userNamesecond;
        console.log(userNameFirst);
        console.log(userNamesecond);
    }

    // console.log(fullName); cant access because its outside of ther secondName() function
    secondName()
}
firstName()