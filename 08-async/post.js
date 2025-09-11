let data = null

async function fetchPosts() {
    const response = await fetch('https://studapi.teachmeskills.by/blog/posts/?author__course_group=15&limit=5')
}
        
async function getPost(id) {
    fetch(`https://studapi.teachmeskills.by/blog/posts/${id}`)
}