let data = null

async function fetchPosts() {
    fetch('https://studapi.teachmeskills.by/blog/posts/?author__course_group=15&limit=5')
}

function renderPostList() {
    const elPostListWrap = document.querySelector('.post-list-wrap')
}


