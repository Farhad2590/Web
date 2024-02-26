function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
}
function userData(){
    const url = 'https://jsonplaceholder.typicode.com/users' 
    fetch(url)
    .then(res => res.json())
    .then(json => displayData(json))
}
function displayData(json){
    console.log(json);
}