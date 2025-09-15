const elPostListWrap = document.querySelector('.post-list-wrap');
const closeModalBtn = document.querySelector('.modal-window__close');
const modalWindow = document.querySelector('.modal-window-wrapper');
const body = document.querySelector('body');
let data = null

async function fetchPosts() {

    try {
        const response = await fetch('https://studapi.teachmeskills.by/blog/posts/?author__course_group=15&limit=5')
        data = await response.json();

        sortPostsByFreshness(data.results);
        renderPostList(data.results)
    } catch (error) {
        console.log(error.message);
    }
}

function renderPostList(postsArray) {
    postsArray.forEach(
        ({
             id,
             date,
             description,
             image,
             title
         }) => {

            const postItem = `
                <div class="post-list__item" data-post-id="${id}">
                    <div class="post-list__header d-flex d-flex_aic d-flex_fdc d-flex_jcfs">
                        <h3>${title}</h3>
                        <div class="post-list__header-date">${date}</div>
                    </div>
                    <div class="post-list__content d-flex d-flex_jcc">
                        <div class="post-list__img-wrap">
                            <img alt="Здесь могла быть ваша реклама." src="${image}">
                        </div>
                    </div>
                    <div class="post-list__about">
                        <b>О чём эта статья: </b><span class="post-list__about-text">${description}</span>
                    </div>
                </div>
            `;

            elPostListWrap.innerHTML += postItem;
        })
}

function sortPostsByFreshness(items) {
    return items.sort(function (a, b) {
        if (Date.parse(a.date) < Date.parse(b.date)) {
            return 1;
        }

        if (Date.parse(a.date) > Date.parse(b.date)) {
            return -1;
        }

        return 0;
    })
}

elPostListWrap.addEventListener('click', (event) => {
    const postId = event.target.closest('.post-list__item')?.dataset.postId;
    if (postId) {
        openPost(postId);
    }

})

async function openPost(id) {
    data = await getPostById(id);

    if (data) {
        fulfilPostModal(data);
        openCloseModal();
    }
}

async function getPostById(id) {
    try {
        const response = await fetch(`https://studapi.teachmeskills.by/blog/posts/${id}`);
        data = await response.json();

        return data;
    } catch (error) {
        console.log(error.message);
    }
}

function fulfilPostModal(data) {
    modalWindow.querySelector('h3').innerText = data.title;
    modalWindow.querySelector('img').src = data.image;
    modalWindow.querySelector('p').innerText = data.text;
    modalWindow.querySelector('.modal-window__date').innerText = data.date;
}

closeModalBtn.addEventListener('click', () => {
    openCloseModal();
})

function openCloseModal() {
    modalWindow?.classList.toggle('hidden');
    body.classList.toggle('of-hidden');
}

fetchPosts()
