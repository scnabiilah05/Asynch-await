async function loadData() {
    try {
        const response1 = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const json1 = await response1.json();
        console.log(json1);

        const response2 = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const json2 = await response2.json();
        console.log(json2);

        const response3 = await fetch('https://jsonplaceholder.typicode.com/comments/1');
        const json3 = await response3.json();
        console.log(json3);

        const response4 = await fetch('https://jsonplaceholder.typicode.com/albums/1');
        const json4 = await response4.json();
        console.log(json4);

        const response5 = await fetch('https://jsonplaceholder.typicode.com/photos/1');
        const json5 = await response5.json();
        console.log(json5);

        const response6 = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const json6 = await response6.json();
        console.log(json6);
        
    } catch (error) {
        console.log('Terjadi kesalahan: ' + error);
    }
}

loadData();