const tweeter = Tweeter()
const renderer = Renderer()
renderer.renderPosts(tweeter.getPosts())


$("#post").click(function () {
  tweeter.addPost($("#input").val())
  renderer.renderPosts(tweeter.getPosts())
});

$(document).on('click', '.delete', function () {
  tweeter.removePost($(this).data().id)
  renderer.renderPosts(tweeter.getPosts())
});

$(document).on('click', 'span', function () {
  tweeter.removeComment($(this).data().idpost, $(this).data().idcommnet)
  renderer.renderPosts(tweeter.getPosts())
})

$(document).on('click', '.Add-comment', function () {
  tweeter.addComment($(this).data().idpost,$("#commentinput").val())
  renderer.renderPosts(tweeter.getPosts())
})
