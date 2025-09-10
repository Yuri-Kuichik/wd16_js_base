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
    const elPostListWrap = document.querySelector('.post-list-wrap')
    postsArray.forEach(({
        date,
        description,
        image,
        text,
        title
    }) => {

        const postItem = getPostItem();

        postItem.querySelector('h3')
            .innerText = title;

        postItem.querySelector('img')
            .setAttribute('src', image);

        postItem.querySelector('.post-list__header-date')
            .innerText = date;

        postItem.querySelector('.post-list__about-text')
            .innerText = description;

        postItem.querySelector('.post-list__text')
            .innerText = text


        elPostListWrap.appendChild(postItem);
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

// Подготовим шаблон для нашего поста.
function getPostItem() {
    // Создаём элементы
    let postListItem = document.createElement('div');
    postListItem.className = 'post-list__item';

    let postListHeader = document.createElement('div');
    postListHeader.className = 'post-list__header d-flex d-flex_jcsb d-flex_aic';

    let postListTitle = document.createElement('h3');

    let postListDate = document.createElement('div');
    postListDate.className = 'post-list__header-date';

    let postListContent = document.createElement('div');
    postListContent.className = 'post-list__content d-flex '

    let postListImgWrap = document.createElement('div');
    postListImgWrap.className = 'post-list__img-wrap'

    let postListImg = document.createElement('img');
    postListImg.alt = 'Здесь могла быть ваша реклама.';

    let postListTextWrap = document.createElement('div');
    postListTextWrap.className = 'post-list__text-wrap';

    let postListDescription = document.createElement('div');
    postListDescription.className = 'post-list__about';

    let postListDescriptionPreText = document.createElement('b');
    postListDescriptionPreText.innerText = 'О чём эта статья: ';

    let postListDescriptionText = document.createElement('span');
    postListDescriptionText.className = 'post-list__about-text';

    let postListText = document.createElement('div');
    postListText.className = 'post-list__text';

    // Формируем шаблон.
    postListHeader.appendChild(postListTitle);
    postListHeader.appendChild(postListDate);
    postListItem.appendChild(postListHeader);

    postListImgWrap.appendChild(postListImg);
    postListContent.appendChild(postListImgWrap);

    postListDescription.appendChild(postListDescriptionPreText);
    postListDescription.appendChild(postListDescriptionText);
    postListTextWrap.appendChild(postListDescription)
    postListTextWrap.appendChild(postListText);
    postListContent.appendChild(postListTextWrap);

    postListItem.appendChild(postListContent);

    return postListItem;
}

fetchPosts()
