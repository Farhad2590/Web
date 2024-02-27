function userData2(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => dataLoader(data))
}

function dataLoader(newData){
    const ulContainer = document.getElementById('ul-container');
    
    // console.log(newData);
    for(const user of newData){
        console.log(user.name);
        const newLi = document.createElement('li');
        newLi.innerText = user.name;
        ulContainer.appendChild(newLi);
    }
}
const stuInfo = JSON.stringify({ name: "James", roll: 3 }); 
console.log(stuInfo.name); 