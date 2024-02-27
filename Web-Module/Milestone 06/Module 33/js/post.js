fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then(data => postData(data))

function postData(newPost){
    const postContainer = document.getElementById('post-container');
    for(const post of newPost){
        console.log(post);
        const div = document.createElement('div');
        div.innerHTML = `
        <h4>Users : ${post.id} </h4>
        <h5>Post Title : ${post.title} </h5>
        <p>Post Description : ${post.body} </p>
        `
        postContainer.appendChild(div)
    }
}