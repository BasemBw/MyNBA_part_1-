
const Renderer = function () {
  const renderPosts = function (posts) {
    let Comments_list = ""
    $("#posts").empty()
    for (post of posts) {
      for (comment of post.comments)
        Comments_list += `<h5 id=${comment.id} class="comments"><span data-idpost=${post.id} data-idcommnet=${comment.id} class="delete-comment" aria-hidden="true">&times;</span>${comment.text}</h5>`
      Post = `<div style="width: 100%;" class="post">
                  <h3 class="post-text">${post.text}</h3>
                  ${Comments_list}
                  <div class="panel-body" style="display: flex;">
                       <input id="commentinput" placeholder="text"/>
                       <button class="Add-comment" data-idpost=${post.id}>Add Comment</button>
                  </div>
                  <p></p>
                  <div>
                    <button data-id=${post.id} class="delete">delete</button>
                  </div>
            </div>`
      Comments_list = ""
      $("#posts").append(Post);
    }
  }
  return {
    renderPosts,
  }
}



