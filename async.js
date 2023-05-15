async function fetchAsync () {
    let post = await fetch ('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(json => console.log(json));

    let toDos = await fetch ('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json));
    
    let comments = await fetch ('https://jsonplaceholder.typicode.com/comments/1')
    .then(response => response.json())
    .then(json => console.log(json));
    
    let albums = await fetch ('https://jsonplaceholder.typicode.com/albums/1')
    .then(response => response.json())
    .then(json => console.log(json));
    
    let photos = await fetch ('https://jsonplaceholder.typicode.com/photos/1')
    .then(response => response.json())
    .then(json => console.log(json));

    let users = await fetch ('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(json => console.log(json));

}

fetchAsync()