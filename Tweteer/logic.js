const Tweeter = function () {
    let postIdCounter = 0
    let commentIdCounter = 0
    const posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]
    const getPosts = () => posts
    const addPost = function (Text) {
        let Next_Post_Ip = 'p' + (parseInt(posts[posts.length - 1].id[1]) + 1)
        let obj = {
            text: Text,
            id: Next_Post_Ip,
            comments: []
        }
        posts.push(obj)
    }
    const removePost = function (RemoveId) {
        for (post in posts) {
            if (parseInt(posts[post].id[1]) == parseInt(RemoveId[1]))
                posts.splice(post, 1)
        }
    }
    const addComment = function (PostId, Text) {
        for (post in posts) {
            if (parseInt(posts[post].id[1]) == parseInt(PostId[1])) {
                let obj = {
                    id: 'c' + (parseInt(posts[post].comments[posts[post].comments.length - 1].id[1]) + 1),
                    text: Text
                }
                posts[post].comments.push(obj)
            }
        }
    }
    const removeComment = function(PostId,commentId){
        for (post in posts) {
            if (parseInt(posts[post].id[1]) == parseInt(PostId[1])){
                for(Com in posts[post].comments)
                    if(posts[post].comments[Com].id==commentId)
                       posts[post].comments.splice(Com,1)
            }
        }
    }
    return {
        getPosts,
        addPost,
        removePost,
        addComment,
        removeComment
    }
}

/* const tweeter = Tweeter()
console.log(tweeter.getPosts())
tweeter.addPost("Hey There! , anyone here?")
console.log(tweeter.getPosts())
tweeter.removePost("p3");
console.log(tweeter.getPosts())
tweeter.addComment("p2","how are you")
console.log(tweeter.getPosts())
tweeter.removeComment("p2","c5")
console.log(tweeter.getPosts()) */

