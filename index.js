const arrSections = document.querySelectorAll('section')
const headerNav = document.querySelector('nav.navigation');

highlightNewActiveTab(document.querySelector('#home-page'))
headerNav.addEventListener('click', function (event) {
    event.stopPropagation();
    switchTab(event);
})

function switchTab(event) {
    const id = event.target?.id

    if (!id) return;

    removeActiveTab()
    highlightNewActiveTab(event.target)

    hideVisiblePage()
    showPage(id)
}

function showPage(id) {
    const el = document.querySelector('.' + id)
    el?.classList.replace('hidden', 'visible')
}


function hideVisiblePage() {
    findVisiblePage()?.classList.replace('visible', 'hidden')
}


function findVisiblePage() {
    return [...arrSections].find((section) => {
        return section.classList.contains('visible')
    })
}

function removeActiveTab() {
    const currentActiveTab = findCurrentActiveTab();
    currentActiveTab.classList.remove('active');
}

function findCurrentActiveTab() {
    let tabsArr = Array.from(headerNav.querySelectorAll('.link-page'));
    return tabsArr.find(function (tab) {
        return tab.classList.contains('active');
    });
}

function highlightNewActiveTab(element) {
    element.classList.add('active');
}
