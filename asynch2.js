
let postElement = document.getElementById('posts')
let addElement = document.getElementById('submit')
let updateElement = document.getElementById('update')
let postForm =document.getElementById('postForm')

let postTitle = document.getElementById('titlePost')
let postAuthor = document.getElementById('authorPost')
let dataPost = null;
let editId = null;


// console.log(postTitle.value, "andkkb");

addElement.onclick = (e) => {
    e.preventDefault()
    // const postId = document.getElementById('idPost')

    const addPostValue ={
        title : postTitle.value,
        author : postAuthor.value
    }
    addPosts(addPostValue)
}

updateElement.onclick = (e) => {
    e.preventDefault()
    
    const updatePostsValue = {
        title : postTitle.value,
        author : postAuthor.value
    }

    UpdatePosts(updatePostsValue)
    
}


async function renderPost(){

    //scope //cakupan
    let get = await fetch('http://localhost:3000/posts')
    let post = await get.json()
    dataPost = post


    // console.log(post, "ini dia");

    let list = ""
    post.forEach((x, index) => {
        sum = `<tr> 
            <td>ID : ${x.id}</td>
            <td>Title : ${x.title}</td>
            <td>Author : ${x.author}</td>
            <td> <button class = "delete" data-index="${x.id}"> Hapus</button>
            <button class="update" data-index="${index}" onclick="editPosts(${index})"> Edit </button> </td>
            </tr>`
            list += sum  
    })
    // console.log(list);
    postElement.innerHTML = list


    const btnDelete = document.querySelectorAll('.delete')
    // console.log(btnDelete, 'ni butdel');
    for (i =0; i < btnDelete.length ; ++i) {
    btnDelete[i].onclick = (e) => {
        if(confirm(`Are you sure want to delete this data?`)){
            const value = e.target.dataset.index
            console.log(value, 'tombol delete')
            this.deletePosts(value)
        } 
    }
}}


async function deletePosts(id){
    // console.log(index, 'ni idx');
    const getdel = await fetch (`http://localhost:3000/posts/${id}`,
        {    
        method: 'DELETE'
        }
    )   
    const postDel = await getdel.json()

    console.log(postDel, "ini dia");
    renderPost()
}


async function addPosts(addPostValue){
    console.log({addPostValue})

    const getAdd =  await fetch('http://localhost:3000/posts', {
        method: 'POST',
        body: JSON.stringify(addPostValue),
        headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json' 
        }
    })

    const postAdd =await getAdd.json()
    console.log(postAdd,'postAdd')
    // renderPost()
}

function editPosts(index){
    // console.log('post ke index:', index, dataPost[index])
    postTitle.value = dataPost[index].title
    postAuthor.value = dataPost[index].author
    editIndex = index
    console.log(postTitle.value, "edit index")
}

async function UpdatePosts(params){
    const item = dataPost[editIndex]
    console.log(item,'no tem');
    const getUpdate = await fetch(`http://localhost:3000/posts/${item.id}`, {
        method: 'PUT', 
        body: JSON.stringify(params),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    const postUpdate = await getUpdate.json()

    console.log(postUpdate, "post update")
    renderPost()

}

renderPost()
