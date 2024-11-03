
const listEl = document.querySelector(".list")

fetch("http://127.0.0.1:3000/posts")
  .then(response => response.json())
  .then(data => {
    let posts = data.data;
    console.log(posts);
    

    posts.forEach(post =>{
        let { title, image, content } = post
        console.log(title);
        console.log(image);
        console.log(content);
        
        
        
        listEl.innerHTML += `
        <div class="seriesPreview">
        <li>
            <h3 class="listTitle">${title}<h3>
            <img src=${image} alt="" class="listPic">
            <p class="listContent">${content}</p>
        </li>
        </div>
    `})
    
    
  })
.catch(err => console.log(err))

    