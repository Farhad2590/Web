const school = "Chittagong Steel Mills High School";

console.log(school);
console.log(school.toUpperCase());
console.log(school.toLowerCase());

const Subject = "Biology";
const Book = "biology";

if(Subject.toLowerCase() === Book.toLowerCase()){
    console.log("Book Porbo");
}

else{
    console.log("Book Koi?");
}

const life = "  water   ";
const jibon = "water";

if(jibon.trim() === life.trim()){
    console.log("Panir Opor Name Jibon");
}
else{
    console.log("Pani Na kaile mara jabo");
}